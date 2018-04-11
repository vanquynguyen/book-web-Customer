import React, { Component } from 'react';
import '../../../Pagination/style.css';
import List from '../../../Pagination/index';
import * as Config from '../../../../constants/Config';
import axios from 'axios';

class HistoryOrder extends Component {
    
    constructor() {
        super();
        this.state = {
            Orders: [],
            currentPage: 1,
            PerPage: 5,
            class: 'default'
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        const id = localStorage.getItem('userId');
        axios.get(Config.API_URL + `/user/${id}/get-manage-order`).then(res => {
            this.setState({
                Orders: res.data
            })
        })
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

    showOrders = () => {
        const {currentPage, PerPage } = this.state;
        const indexOfLastTodo = currentPage * PerPage;
        const indexOfFirstTodo = indexOfLastTodo - PerPage;
        var result = null;
        if(this.state.Orders.length > 0) {
            const currentOrders = this.state.Orders.slice(indexOfFirstTodo, indexOfLastTodo);
            
            if (currentOrders.length > 0) {
                result = currentOrders.map((order, index) => {
                    return  <tr key={index}>
                                <td>{index + 1}</td>3
                                <td>{order.user_id}</td>
                                <td>{order.total_price}</td>
                                <td>{order.method}</td>
                                <td>{order.status}</td>
                            </tr>
                });
            }
            
            return result;
        }
        // } else {
        //     if (orders.length > 0) {
        //         const currentOrders = orders.slice(indexOfFirstTodo, indexOfLastTodo);
        //         if (currentOrders.length > 0) {
        //             result = currentOrders.map((order, index) => {
        //                 return 
        //             });
        //         }
        
        //         return result;
        //     }
        // }
       
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
        const { PerPage, activeItem } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.Orders.length / PerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number =>
            <List handleClick={this.handleClick} id={number} key={number} isActive={activeItem === number} default={this.state.class} />
        );
        
        return (
            <div>
                {/* <p><strong>Amount:</strong> <strong>{books.length}</strong> books</p> */}
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
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Hành Động</th>
                            <th>Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showOrders}
                    </tbody>
                </table>
                <div className="col-md-12">
                    <ul className="pagination">
                        {renderPageNumbers}
                    </ul>
                </div>
            </div>
        );
    }
}

export default HistoryOrder;
