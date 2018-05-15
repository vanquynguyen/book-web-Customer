import React, { Component } from 'react';

import { connect } from 'react-redux';
import BooksItem from './BookItems/index';
import { actFetchHomeBooksRequest } from '../../../../actions/Books';

class NewBooks extends Component {
    
    constructor() {
        super();
        this.state = {
            // books: [],
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllBooks();
    }

    showBooks(books) {
        const data = this.props.books;

        var result = null;
        if (data.length > 0) {
            result = data.map((book, index) => {
                return <BooksItem key={index} book={book} />
            });
        }
        return result;
    }

  
    render() {
        var books = this.props.books;

        return (
            <div className="product-sec1">
                <h3 className="heading-tittle">New Books</h3>
                {this.showBooks(books)}
                <div className="clearfix"></div>
                <div className="ph-20" style={{ marginTop: '30px', textAlign: 'center' }}><a className="btn btn-primary btn-block" style={{ width: '35%', background: '#f0ad4e', borderColor: 'rgb(254, 136, 0)'}}>View more</a></div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllBooks: () => {
            dispatch(actFetchHomeBooksRequest());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewBooks);
