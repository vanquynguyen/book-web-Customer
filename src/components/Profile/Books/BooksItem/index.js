import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import CheckButton from 'react-validation/build/button';
// import { isEmpty } from 'validator';
import * as Config from '../../../../constants/Config';
import Modal from 'react-responsive-modal';
import swal from 'sweetalert';
import axios from 'axios'; 
import { connect } from 'react-redux';
import { actFetchCategoriesRequest } from '../../../../actions/Categories';

// const required = (value) => {
//     if (isEmpty(value)) {
//         return <small className="form-text text-danger">This field is required</small>;
//     }
// }

// const minLength = (value) => {
//     if (value.trim().length < 6) {
//         return <small className="form-text text-danger">Title must be at least 6 characters long</small>;
//     }
// }

class BooksList extends Component {
    constructor(props) {
        super();
        this.state = {
            category: '',
            categories: '',
            open: false,
            user_id: '',
            title: '',
            author: '',
            amount: '',
            category_id: '',
            image: '',
            description: '',
            price: ''
        }
        this.onDelete = this.onDelete.bind(this);
    }

    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllCategories();
    }

    componentWillMount() {
        const id = this.props.book.category_id;
        axios.get(Config.API_URL + `/categories/${id}`).then(res => {
            this.setState({
                category: res.data
            })
        });
    }

    showCategories() {
        var result = null;
        if (this.state.categories.length > 0) {
            result = this.state.categories.map((category, index) => {
                return <div key={index}><option value={category.id} >{category.name}</option></div>
            });
        }

        return result;
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value,
            user_id: this.props.account.id,
            category_id: this.refs.categoryId.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        // this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            // var { user_id, title, image, author, category_id, description, price, amount } = this.state;
            // var book = new FormData()
            // book.append("user_id", user_id);
            // book.append("title", title);
            // book.append("image", image);
            // book.append("author", author);
            // book.append("category_id", category_id);
            // book.append("description", description);
            // book.append("price", price);
            // book.append("amount", amount);

            // axios.post(Config.API_URL + '/books', book).then(res => {
            //     swal("Good job!", "You clicked the button!", "success");
            //     this.props.history.push(`/user/${user_id}/profile`);
            // });
        }
    }

    onDelete = (e) => {
        e.preventDefault();
        const id = this.props.book.id;

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                axios.delete(Config.API_URL + `/books/${id}`).then(res => {
                   this.props.fetchAllUserBooks(this.props.userId);
                });
                swal("Poof! Your imaginary file has been deleted!", {
                    icon: "success",
                });
            } else {
                swal("Your imaginary file is safe!");
            }
        });
    }

    render() {
        const book = this.props.book;
        const { open } = this.state;
        const category = this.state.category;
        const categories = this.props.categories;

        const listCategories = categories.map((category, index) => 
            <option key={index} value={category.id}>{category.name}</option>
        );

        return (
            <div className="col-md-4 product-men">
                <div className="men-pro-item simpleCart_shelfItem">
                    <div className="men-thumb-item">
                        <img src={Config.LOCAL_URL + '/images/books/' + book.image} alt="" width="150" height="200"/>
                        <div className="men-cart-pro">
                            <div className="inner-men-cart-pro">
                                <a className="link-product-add-cart quick-view" style={{marginLeft: '53px', width: '42%'}} onClick={this.onOpenModal}>Quick View</a>
                            </div>
                        </div>
                        <span className="product-new-top">New</span>
                    </div>
                    <div className="item-info-product ">
                        <h4>
                            <p>{book.title}</p>
                        </h4>
                        <div className="info-product-price">
                            <span className="item_price">${book.price}</span>
                        </div>
                        {/* <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">
                            <form action="#" method="post">
                                <fieldset>
                                    <input type="hidden" name="cmd" value="_cart" />
                                    <input type="hidden" name="add" value="1" />
                                    <input type="hidden" name="business" value=" " />
                                    <input type="hidden" name="item_name" value="Almonds, 100g" />
                                    <input type="hidden" name="amount" value="149.00" />
                                    <input type="hidden" name="discount_amount" value="1.00" />
                                    <input type="hidden" name="currency_code" value="USD" />
                                    <input type="hidden" name="return" value=" " />
                                    <input type="hidden" name="cancel_return" value=" " />
                                    <input type="submit" name="submit" value="Add to cart" className="button" />
                                </fieldset>
                            </form>
                        </div> */}
                    </div>
                </div>
                <Modal open={open} onClose={this.onCloseModal} little>
                    <h3>Detail</h3>
                    <div className="modal-body modal-body-sub_agile">
                        <div className="main-mailposi">
                            <span className="fa fa-book" aria-hidden="true"></span>
                        </div>
                        <div className="modal_body_left modal_body_left1">
                            <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                <div className="col-md-6">
                                    <img src={Config.LOCAL_URL + '/images/books/' + book.image} style={{width: '85%'}} alt=""/>
                                    <input 
                                        type="file" 
                                        name="image" 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Input 
                                        type="text" 
                                        name="title"
                                        value={book.title}  
                                        placehoder="title" 
                                        onChange={this.onChangeHandler}
                                        // validations={[required, minLength]}
                                    />
                                    <Input 
                                        type="text" 
                                        name="author"
                                        value={book.author} 
                                        placehoder="author" 
                                        onChange={this.onChangeHandler}
                                    />
                                     <select 
                                        ref="categoryId"
                                        className="form-control bg-danger b-r-0" 
                                        onChange={this.onChangeHandler}
                                        // validations={[required]}
                                    >
                                        <option value={category.id} >{category.name}</option>
                                        {listCategories}
                                    </select>
                                    <Input 
                                        type="text" 
                                        name="price"
                                        value={book.price} 
                                        placehoder="price" 
                                        onChange={this.onChangeHandler}
                                        // validations={[required]}
                                    />
                                    <Input 
                                        type="text" 
                                        ref="amount"
                                        value={book.amount} 
                                        placehoder="amount"
                                        onChange={this.onChangeHandler}
                                        // validations={[required]}
                                    />
                                    <Textarea 
                                        name="description"
                                        className="form-control" 
                                        placehoder="description" 
                                        value={book.description}
                                        onChange={this.onChangeHandler}
                                        // validations={[required, minLength]}
                                    >
                                    </Textarea>
                                    <div className="row" style={{ marginLeft: '5px', marginTop: '10px' }}>
                                        <button type="submit" className="btn btn-success" style={{marginRight: '5px'}}>Save</button>
                                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                    </div>
                                </div>
                            </Form>
                            <div className="col-md-12">
                                <form onSubmit={e => this.onDelete(e)} ref={c => { this.form = c }} style={{float: 'right'}}>
                                    Are you Delete this book?
                                    <button type="submit" className="btn btn-danger" style={{paddingRight: '5px', paddingLeft: '4px'}}>Delete</button>
                                </form>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </Modal>
            </div>           
        );
    }

}

const mapStateToProps = state => {
    return {
        categories : state.categories,
        account: state.account
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(actFetchCategoriesRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
