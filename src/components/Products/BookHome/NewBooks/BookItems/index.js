import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Config from '../../../../../constants/Config';
import axios from 'axios';
import swal from 'sweetalert';
import { actFetchCartsRequest } from '../../../../../actions/Carts';

class BooksItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            carts: {},
            check:{}
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        const userId = localStorage.getItem('userId');
        this.props.fetchAllCarts(userId); 
    }

    // componentWillMount () {
    //     const bookId = this.props.books['0'].id;
    //     // console.log(this.props.books['0'].id)
    //     axios.get(Config.API_URL+ '/cart/get-book-id', {params: {bookId: bookId}}).then(res => {
    //         // console.log(res.data)
    //         const check = res.data;
    //         this.setState({
    //             check: check['0']
    //         })
    //     });
    // }

    onSubmit(id) {
        const bookId = id
        axios.get(Config.API_URL+ '/cart/get-book-id', {params: {bookId: bookId}}).then(res => {
          
            var data = res.data;
 
            if (data.length > 0) {
                var bookId = id;
                var addedAmount = data['0'].amount + 1;
                var price = data['0'].price*2;
                var request = {
                    'amount' : addedAmount,
                    'price' : price
                }
                axios.get(Config.API_URL+ `/books/${bookId}`).then(response => {
                    // console.log(response)
                    const amountBook = response.data.amount;
                    const userId = this.props.account.id;
                    if (addedAmount <= amountBook) {
                        axios.put(Config.API_URL+ `/carts/${data['0'].id}`, request).then(response => {
                           
                            swal({
                                title: `Added ${addedAmount} / ${amountBook} products`,
                                text: "You clicked the button!",
                                icon: "success",
                            });

                            this.props.fetchAllCarts(userId);
                        });
                    } else {
                        swal({
                            title: "Too many amount allowed!",
                            text: "You clicked the button!",
                            icon: "warning",
                        });
                    }
                });
            } else {
                const userId = this.props.account.id;
                const bookId = id;
                const data = {
                    bookId: bookId,
                    userId: userId
                }
                axios.post(Config.API_URL+ '/carts', data).then(response => {
                    swal({
                        title: `Added 1 products`,
                        text: "You clicked the button!",
                        icon: "success",
                    });

                    this.props.fetchAllCarts(userId);
                });
            }

        });
    }

    onDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                this.props.onDeleteBook(id);
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    render() {
        var { book } = this.props;

        return (
            <div className="col-md-4 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                        <Link to={`/book/${book.id}/detail`}>
                            <img src={Config.LOCAL_URL + '/images/books/' + book.image} alt="" width="150" height="200"/>
                        </Link>
                        <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                                <Link to={`/book/${book.id}/detail`} className="link-product-add-cart">Quick View</Link>
                            </div>
                        </div>
                        <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                        <h4 className="title-book">
                        {book.title}
                        </h4>
                        <div className="info-product-price">
                            <span className="item_price">${book.price}</span>
                        </div>
                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <input type="button" name="submit" value="Add to cart" onClick={e => this.onSubmit(book.id)} className="button" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books,
        account: state.account,
        carts: state.carts
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCarts: (userId) => {
            dispatch(actFetchCartsRequest(userId));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BooksItem);
