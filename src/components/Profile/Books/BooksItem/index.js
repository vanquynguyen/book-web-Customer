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
import { actFetchUserBooksRequest } from '../../../../actions/Books';

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
            imagePreview: '',
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
            price: '',
            sale: ''
        }
        this.onDelete = this.onDelete.bind(this);
    }

    onOpenModal = () => {
        this.setState({ 
            open: true,
            imagePreview:`${Config.LOCAL_URL}/images/books/${this.props.book.image}`
        });
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

        this.setState({
            category_id: this.props.book.category_id,
            user_id: this.props.book.user_id,
            title: this.props.book.title,
            author: this.props.book.author,
            amount: this.props.book.amount,
            image: this.props.book.image,
            description: this.props.book.description,
            price: this.props.book.price,
            sale: this.props.book.sale,
        })
    }

    _handleImageChange = (e) => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
    
        reader.onloadend = () => {
            this.setState({
                image: file,
                imagePreview: reader.result
            });
        }

        reader.readAsDataURL(file)
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
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [e.target.name]: value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.form.validateAll();

        if ( this.checkBtn.context._errors.length === 0 ) {
            var {title, image, author, category_id, description, price, amount, sale } = this.state;
            var id = this.props.book.id;
            var book = new FormData()
            book.append("user_id", this.props.account.id);
            book.append("title", title);
            book.append("image", image);
            book.append("author", author);
            book.append("category_id", category_id);
            book.append("description", description);
            book.append("price", price);
            book.append("sale", sale);
            book.append("amount", amount);
            
            axios.post(Config.API_URL + `/book/${id}/edit` , book).then(res => {
                swal("Good job!", "You clicked the button!", "success");
                const userId = localStorage.getItem('userId');
                this.props.fetchAllUserBooks(userId);
                this.setState({ open: false });
            });
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
                                    <img src={this.state.imagePreview} style={{width: '200px', height: '300px'}} alt=""/>
                                    <input 
                                        type="file" 
                                        name="image" 
                                        onChange={(e)=>this._handleImageChange(e)} 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label>Title</label>
                                    <Input 
                                        type="text" 
                                        name="title"
                                        value={book.title}  
                                        placehoder="title" 
                                        onChange={this.onChangeHandler}
                                        // validations={[required, minLength]}
                                    />
                                    <label>Author</label>
                                    <Input 
                                        type="text" 
                                        name="author"
                                        value={book.author} 
                                        placehoder="author" 
                                        onChange={this.onChangeHandler}
                                    />
                                    <label>Category</label>
                                     <select 
                                        name="category_id"
                                        className="form-control bg-danger b-r-0" 
                                        onChange={this.onChangeHandler}
                                    >
                                        <option value={category.id}>{category.name}</option>
                                        {listCategories}
                                    </select>
                                    <label>Price</label>
                                    <Input 
                                        type="text" 
                                        name="price"
                                        value={book.price} 
                                        placehoder="price" 
                                        onChange={this.onChangeHandler}
                                        // validations={[required]}
                                    />
                                    <label>Sale(%)</label>
                                    <Input 
                                        type="number" 
                                        name="sale"
                                        min="0"
                                        max="100"
                                        className="form-control"
                                        value={book.sale} 
                                        placehoder="price" 
                                        onChange={this.onChangeHandler}
                                        // validations={[required]}
                                    />
                                    <label>Amount</label>
                                    <Input 
                                        type="text" 
                                        name="amount"
                                        value={book.amount} 
                                        placehoder="amount"
                                        onChange={this.onChangeHandler}
                                        // validations={[required]}
                                    />
                                    <label>Description</label>
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
                                        <button type="submit" className="btn btn-success" style={{marginRight: '5px', float: 'left'}}>Save</button>
                                        <button type="button" onClick={e => this.onDelete(e)} className="btn btn-danger" style={{paddingRight: '5px', paddingLeft: '4px', float: 'left'}}>Delete</button>
                                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                    </div>
                                </div>
                            </Form>
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
        fetchAllUserBooks: (userId) => {
            dispatch(actFetchUserBooksRequest(userId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
