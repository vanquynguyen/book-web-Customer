import React, { Component } from 'react';
import '../../../Pagination/style.css';
import List from '../../../Pagination/index';
import * as Config from '../../../../constants/Config';
import { connect } from 'react-redux';
import BooksItem from '../BooksItem';
import axios from 'axios';
import { actFetchUserBooksRequest } from '../../../../actions/Books';

class BooksListPage extends Component {
    
    constructor() {
        super();
        this.state = {
            books: [],
            currentPage: 1,
            PerPage: 5,
            class: 'default'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        const userId = localStorage.getItem('userId');
        this.props.fetchAllUserBooks(userId);
    }

    handleClick(id) {
        if (id===1) {
            this.setState({
                currentPage: Number(id),
                activeItem: id,
                class: 'default'
            });
        } else {
            this.setState({
                currentPage: Number(id),
                activeItem: id,
                class: ''
            });
        }
      
    }

    handleFilterList = (event) => {
        this.setState({
            PerPage: event.target.value
        })
    }

    showBooks(books) {
        const {currentPage, PerPage } = this.state;
        const indexOfLastTodo = currentPage * PerPage;
        const indexOfFirstTodo = indexOfLastTodo - PerPage;
        var result = null;
        if(this.state.books.length > 0) {
            const currentBooks = this.state.books.slice(indexOfFirstTodo, indexOfLastTodo);
            
            if (currentBooks.length > 0) {
                result = currentBooks.map((book, index) => {
                    return <BooksItem book={book} key={index} index={index} fetchAllUserBooks={this.props.fetchAllUserBooks} userId={this.props.account.id}  />
                });
            }
            
            return result;
        } else {
            if (books.length > 0) {
                const currentBooks = books.slice(indexOfFirstTodo, indexOfLastTodo);
                if (currentBooks.length > 0) {
                    result = currentBooks.map((book, index) => {
                        return <BooksItem book={book} key={index} index={index} />
                    });
                }
        
                return result;
            }
        }
       
    }
    onSearch = (event) => {
        const userId = this.props.account.id;
        var keywork = event.target.value;
        axios.get(Config.API_URL + `/user/${userId}/search-books`, {params:{keywork:keywork}}).then(res => {
            this.setState({
                books: res.data
            })
        });
    }

    render() {
        var { books } = this.props;
        const { PerPage, activeItem } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(books.length / PerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number =>
            <List handleClick={this.handleClick} id={number} key={number} isActive={activeItem === number} default={this.state.class} />
        );
        
        return (
            <div>
                <p><strong>Amount:</strong> <strong>{books.length}</strong> books</p>
                <div className="row" style={{ paddingTop: '25px' }}>
                    <div className="col-md-6">
                        <span style={{ float: 'left' }}>Show:</span>
                        <select className="form-control filter-box" onChange={this.handleFilterList}>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <div className="col-md-4">
                            <span style={{ float: 'right' }}>Search:</span>
                        </div>
                        <div className="col-md-8">
                            <span><input type="text" className="form-control search-form" onChange={this.onSearch}/></span>
                        </div>
                    </div>
                </div>
                {this.showBooks(books)}
                <div className="col-md-12">
                    <ul className="pagination">
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.account,
        books: state.userBooks

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUserBooks: (userId) => {
            dispatch(actFetchUserBooksRequest(userId));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksListPage);
