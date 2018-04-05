import React, { Component } from 'react';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail, isEmpty } from 'validator';

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

const email = (defaultValue) => {
    if (!isEmail(defaultValue)) {
        return <small className="form-text text-danger">Invalid email format</small>;
    }
}

const minLength = (defaultValue) => {
    if (defaultValue.trim().length < 6) {
        return <small className="form-text text-danger">Password must be at least 6 characters long</small>;
    }
}

class AddBook extends Component {
    
    constructor() {
        super();
        this.state = {
            full_name: '',
            email: '',
            password: '',
            comfirm_password: '',
            emailExist: ''
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllCategories();
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.defaultValue,
            emailExist: ''
        })
       
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.form.validateAll();
        if ( this.checkBtn.context._errors.length === 0 ) {
            var { full_name, email, password } = this.state;
            var user = new FormData();
            user.append("full_name", full_name);
            user.append("email", email);
            user.append("password", password);
            axios.post(Config.API_URL + '/register', user).then(res => {
                if(res.data === 403) {
                    this.setState({
                        emailExist: 403
                    });
                    
                    // swal("Email already exist!", "You clicked the button!", "warning");
                } else {
                    // this.props.onAddUser(user);
                    swal("Register Success!", "You clicked the button!", "success");
                    // this.props.history.push('/') ;
                }
               
            });
        }
    }

    render() {
        const confirmPass = () => {
            if (this.state.password !== this.state.comfirm_password) {
                return <small className="form-text text-danger">Password must be confirmed</small>;
            }
        } 

        const emailExist = () => {
            if (this.state.emailExist === 403) {
                return <small className="form-text text-danger">Email already exist</small>;
            }
        }

        console.log(this.props)

        return (
            <div>
               <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 text-center">
                            <h2 className="text-danger">Add <strong>Your Book</strong></h2>
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
                            <form action="/books/add" id="form-add-book" method="post" encType="multipart/form-data" noValidate="noValidate">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12">
                                        <div className="form-group form-group-custom">
                                            <label>Title</label>
                                            <div className="input-group">
                                                <input type="text" name="title" className="form-control bg-danger title-book title-book-custom" id="title" required="required" aria-required="true"/>
                                                <span className="input-group-btn">
                                                <button className="btn btn-secondary b-r-0 btn-success" id="fillSuggestData" type="button" data-toggle="tooltip" title="Import data book from google book">
                                                <span className="glyphicon glyphicon-import custom-span-button"></span> Import from Google book
                                                </button>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="search-result search-result-custom col-md-12">
                                            <ul id="data-suggest-book"></ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Author</label>
                                            <input type="text" name="author" className="form-control bg-danger b-r-0" placeholder="Enter your book author..." required="required" aria-required="true" />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Category</label>
                                            <select id="category" className="form-control bg-danger b-r-0" name="category_id" required="required" aria-required="true">
                                                <option defaultValue="1">Bình luận văn học‎</option>
                                                <option defaultValue="2">Chính trị‎</option>
                                                <option defaultValue="3">Địa lý</option>
                                                <option defaultValue="4">Giáo khoa‎</option>
                                                <option defaultValue="5">Lịch sử‎</option>
                                                <option defaultValue="6">Phi hư cấu‎</option>
                                                <option defaultValue="7">Khoa học‎</option>
                                                <option defaultValue="8">Kinh Tế - Quản Lý</option>
                                                <option defaultValue="9">Thiếu nhi‎</option>
                                                <option defaultValue="10">Thiếu niên‎</option>
                                                <option defaultValue="11">Tự lực‎</option>
                                                <option defaultValue="12">Khoa học viễn tưởng</option>
                                                <option defaultValue="13">Truyện Ngắn - Ngôn Tình</option>
                                                <option defaultValue="14">Truyện Cười -Tiếu Lâm</option>
                                                <option defaultValue="15">Y Học - Sức Khỏe</option>
                                                <option defaultValue="16">Học Ngoại Ngữ</option>
                                                <option defaultValue="17">Thể Thao - Nghệ Thuật</option>
                                                <option defaultValue="18">Trinh Thám - Hình Sự</option>
                                                <option defaultValue="19">Văn Hóa - Tôn Giáo</option>
                                                <option defaultValue="20">Tử Vi - Phong Thủy</option>
                                                <option defaultValue="21">Văn Học Việt Nam</option>
                                                <option defaultValue="22">Tiểu Thuyết Nước Ngoài</option>
                                                <option defaultValue="23">Kinh Dị - Ma Quái</option>
                                                <option defaultValue="24">Huyền bí - Giả tưởng</option>
                                                <option defaultValue="25">Hồi Ký - Tuỳ Bút</option>
                                                <option defaultValue="26">Phiêu Lưu - Mạo Hiểm</option>
                                                <option defaultValue="27">Tuổi Học Trò</option>
                                                <option defaultValue="28">Cổ Tích - Thần Thoại</option>
                                                <option defaultValue="29">Triết Học</option>
                                                <option defaultValue="30">Kiếm Hiệp</option>
                                                <option defaultValue="31">Kiến Trúc - Xây Dựng</option>
                                                <option defaultValue="32">Nông - Lâm - Ngư</option>
                                                <option defaultValue="33">Công Nghệ Thông Tin</option>
                                                <option defaultValue="34">Truyện Tranh</option>
                                                <option defaultValue="35">Tâm Lý - Kỹ Năng Sống</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input type="text" name="price" className="form-control bg-danger b-r-0" placeholder="Enter price your book..." required="required" aria-required="true" />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <div className="form-group">
                                            <label>Amount</label>
                                            <input type="number" name="amount" className="form-control bg-danger b-r-0" placeholder="Enter amount your book..." required="required" aria-required="true" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-6 col-md-12">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea name="description" id="description" cols="67" rows="8" required="required" className="form-control b-r-0" aria-required="true"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="row upload-image" id="row-image1">
                                    <div className="col-xs-12 col-sm-8">
                                        <div className="form-group">
                                            <input type="file" id="image1" name="image" accept="Image/*" key="1" />
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-4">
                                        <span className="glyphicon glyphicon-plus btn-info btn-xs add-more-image" id="btn-plus1" data-toggle="tooltip" title="Add more image"></span>
                                        <span className="glyphicon glyphicon-minus btn-danger btn-xs clear-image hidden" id="btn-minus1" key="1" data-toggle="tooltip" title="Clear image"></span>
                                    </div>
                                    <div className="col-xs-12 col-sm-6">
                                        <img id="pre-img1" className="pre-img hidden" alt="" />
                                    </div>
                                </div>
                                <div id="append-aria"></div>
                                <div className="row">
                                    <div className="space-20"></div>
                                    <div className="col-xs-12 col-sm-6">
                                        <button type="submit" className="btn btn-primary btn-xs b-r-0" id="btn-add-book">
                                        Create Book
                                        </button>
                                        <input type="reset" className="btn btn-danger btn-xs b-r-0 btn-reset" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories : state.categories
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllCategories: () => {
            dispatch(actFetchCategoriesRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);

