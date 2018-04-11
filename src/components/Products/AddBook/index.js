import React, { Component } from 'react';
import Breadscrumb from '../../Sections/Breadcrumb';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import CheckButton from 'react-validation/build/button';
import { isEmpty } from 'validator';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import axios from 'axios';
import * as Config from '../../../constants/Config';
import { actFetchCategoriesRequest } from '../../../actions/Categories';

const required = (defaultValue) => {
    if (isEmpty(defaultValue)) {
        return <small className="form-text text-danger">This field is required</small>;
    }
}

const minLength = (defaultValue) => {
    if (defaultValue.trim().length < 6) {
        return <small className="form-text text-danger">Title must be at least 6 characters long</small>;
    }
}

class AddBook extends Component {
    
    constructor() {
        super();
        this.state = {
            user_id: '',
            title: '',
            author: '',
            amount: '',
            category_id: '',
            image: '',
            description: '',
            price: ''
           
        };
        // this.onChangeFile = this.onChangeFile.bind(this)
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllCategories();
    }

    onChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value,
            user_id: this.props.account.id,
            category_id: this.refs.categoryId.value,
        })
       
    }

    onChangeFile = (e) => {
        e.preventDefault();
        this.setState({
            image: e.target.files[0]
        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            var { user_id, title, image, author, category_id, description, price, amount } = this.state;
            var book = new FormData()
            book.append("user_id", user_id);
            book.append("title", title);
            book.append("image", image);
            book.append("author", author);
            book.append("category_id", category_id);
            book.append("description", description);
            book.append("price", price);
            book.append("amount", amount);

            axios.post(Config.API_URL + '/books', book).then(res => {
                swal("Good job!", "You clicked the button!", "success");
                this.props.history.push(`/user/${user_id}/profile`);
            });
        }
    }

    render() {
        const data = this.props.categories;

        const listCatgories = data.map((category, index) => 
            <option key={index} value={category.id}>{category.name}</option>
        );

        return (
            <div>
                <Breadscrumb name='AddBook  '/>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">
                            <h1>Add Your Book</h1>
                            <hr />
                            <div className="space-10"></div>
                            <div className="title-bar blue">
                                <ul className="list-inline list-unstyled">
                                    <li><i className="icofont icofont-square"></i></li>
                                    <li><i className="icofont icofont-square"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="space-20"></div>
                    <div className="loader" style={{display: 'none'}}></div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                            <div id="modelSpace"></div>
                            <div className="suggestedTitle"></div>
                            <div className="space-10"></div>
                            <Form onSubmit={e => this.onSubmit(e)} ref={c => { this.form = c }}>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Title</label>
                                            <Input 
                                                type="text" 
                                                name="title" 
                                                className="form-control" 
                                                placeholder="Enter your book title..."
                                                onChange={this.onChangeHandler}
                                                validations={[required, minLength]}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Author</label>
                                            <Input 
                                                type="text" 
                                                name="author" 
                                                className="form-control bg-danger b-r-0" 
                                                placeholder="Enter your book author..." 
                                                onChange={this.onChangeHandler}
                                                validations={[required]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <select 
                                                ref="categoryId"
                                                className="form-control bg-danger b-r-0" 
                                                name="category_id" 
                                                onChange={this.onChangeHandler}
                                                validations={[required]}
                                            >
                                                {listCatgories}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <Input 
                                                type="text" 
                                                name="price" 
                                                className="form-control bg-danger b-r-0" 
                                                placeholder="Enter price your book..."
                                                onChange={this.onChangeHandler}
                                                validations={[required]} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <Input 
                                                ref="amount"
                                                type="text" 
                                                name="amount" 
                                                className="form-control bg-danger b-r-0" 
                                                placeholder="Enter amount your book..."
                                                onChange={this.onChangeHandler}
                                                validations={[required]} 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <Textarea 
                                                name="description" 
                                                cols="67" 
                                                rows="8"
                                                onChange={this.onChangeHandler}
                                                className="form-control b-r-0"
                                                validations={[required, minLength]}
                                            ></Textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row upload-image" id="row-image1">
                                    <div className="col-xs-12 col-sm-8">
                                        <div className="form-group">
                                            <input 
                                                type="file" 
                                                name="image" 
                                                onChange={this.onChangeFile}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="col-xs-12 col-sm-4">
                                        <span className="glyphicon glyphicon-plus btn-info btn-xs add-more-image" id="btn-plus1" data-toggle="tooltip" title="Add more image"></span>
                                        <span className="glyphicon glyphicon-minus btn-danger btn-xs clear-image hidden" id="btn-minus1" key="1" data-toggle="tooltip" title="Clear image"></span>
                                    </div> */}
                                    <div className="col-xs-12 col-sm-6">
                                        <img className="pre-img hidden" alt="" />
                                    </div>
                                </div>
                                <div id="append-aria"></div>
                                <div className="row">
                                    <div className="space-20"></div>
                                    <div className="col-xs-12 col-sm-6">
                                        <button type="submit" className="btn btn-primary btn-xs b-r-0" id="btn-add-book">
                                        Create Book
                                        </button>
                                        {/* <input type="reset" className="btn btn-danger btn-xs b-r-0 btn-reset" /> */}
                                        <CheckButton style={{ display: 'none' }} ref={c => { this.checkBtn = c }} />
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddBook));

