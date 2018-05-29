import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Category from './Category';
import axios from 'axios';
import SortBy from './SortBy';
import * as Config from '../../../constants/Config';
import '../../Pagination/style.css';
// import List from '../../Pagination/index';
import BooksItem from './BooksItem';
import { connect } from 'react-redux';

class Books extends Component {
    constructor() {
        super();
        this.state = {
            books: [],
            currentPage: 1,
            PerPage: 20,
            class: 'default'
        };
    }

    componentWillMount() {
        axios.get(Config.API_URL + '/books').then(res => {
            this.setState({
                books: res.data
            })
        })
    }

    handleClick(id) {
        if (id === 1) {
            this.setState({
                currentPage: Number(id),
                activeItem: id,
                class: 'default'
            });
        } 

        if (id !== 1) {
            this.setState({
                currentPage: Number(id),
                activeItem: id,
                class: ''
            });
        }
      
    }

    showBooks(books) {
        const {currentPage, PerPage } = this.state;
        const indexOfLastTodo = currentPage * PerPage;
        const indexOfFirstTodo = indexOfLastTodo - PerPage;
        var result = null;
        if(books.length > 0) {
            const currentBooks = this.state.books.slice(indexOfFirstTodo, indexOfLastTodo);
            
            if (currentBooks.length > 0) {
                result = currentBooks.map((book, index) => {
                    return <BooksItem book={book} key={index} index={index} fetchAllUserBooks={this.props.fetchAllUserBooks} userId={this.props.account.id}  />
                });
            }
        }
            
        return result;
        // } else {
        //     if (books.length > 0) {
        //         const currentBooks = books.slice(indexOfFirstTodo, indexOfLastTodo);
        //         if (currentBooks.length > 0) {
        //             result = currentBooks.map((book, index) => {
        //                 return <BooksItem book={book} key={index} index={index} />
        //             });
        //         }
        
        //         return result;
        //     }
        // }
       
    }

    render() {
        const books = this.state.books;
        // const { PerPage, activeItem } = this.state;
        // const pageNumbers = [];
        // for (let i = 1; i <= Math.ceil(books.length / PerPage); i++) {
        //   pageNumbers.push(i);
        // }
        // const renderPageNumbers = pageNumbers.map(number =>
        //     <List handleClick={this.handleClick} id={number} key={number} isActive={activeItem === number} default={this.state.class} />
        // );
        return (
            <div>
                <div className="ads-grid">
                    <div className="container">
                        <h3 className="tittle-w3l">Filter Books
                            <span className="heading-style">
                            <i></i>
                            <i></i>
                            <i></i>
                            </span>
                        </h3>
                        <div className="side-bar col-md-3">
                            <Category />
                        </div>
                        <div className="agileinfo-ads-display col-md-9">
                            <SortBy />
                            <p><strong>{books.length}</strong> book found</p>
                            <div className="wrapper">
                                <div className="product-sec1">
                                    <h3 className="heading-tittle">Books</h3>
                                    <hr />
                                    {/* {listBooks} */}
                                    {this.showBooks(books)}
                                    {/* <div className="col-md-12">
                                        <ul className="pagination">
                                            {renderPageNumbers}
                                        </ul>
                                    </div> */}
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        account: state.account,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);

