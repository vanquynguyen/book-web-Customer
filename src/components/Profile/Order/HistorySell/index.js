import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../../Pagination/style.css';
import List from '../../../Pagination/index';
import { connect } from 'react-redux';
import { actFetchSellsRequest } from '../../../../actions/Sells';
import * as Config from '../../../../constants/Config';
import axios from 'axios';

class HistorySell extends Component {
    
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

    componentDidMount() {
        const id = localStorage.getItem('userId');
        this.props.fetchAllUserSells(id);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps && nextProps.orders){
            var {orders} = nextProps;
            this.setState({
                Orders: orders
            })
        }
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

    showOrders = (Orders) => {
        const {currentPage, PerPage } = this.state;
        const indexOfLastTodo = currentPage * PerPage;
        const indexOfFirstTodo = indexOfLastTodo - PerPage;
        var result = null;
        const currentOrders = this.state.Orders.slice(indexOfFirstTodo, indexOfLastTodo);
        
        result = currentOrders.map((order, index) =>
           <tr key={index}>
                <td>{index + 1}</td>
                <td>${order.price}</td>
                {order.order.method === 0 ? (
                    <td>Cash on delivery(COD)</td>
                ) : (
                    <td>Banking</td>
                )}
                {order.order.status === 0 ? (
                    <td>
                        <p className="label label-inprogress" >inprogress</p>
                    </td>
                ) : (
                    <td>
                        <p className="label label-success">Paymented</p>
                    </td>
                )}
                {order.order.status === 0 ? (
                    <td>
                        <Link to={`/order/${order.id}/payment`} >
                            <button className="btn btn-primary">Payment</button>
                        </Link>
                    </td>
                ) : (
                    <td>
                        <button disabled className="btn btn-success">Paymented</button>
                    </td>
                )}
            </tr>
        );

        return result;
    }  

    handleFilterStatus = (event) => {
     
        var status = event.target.value;
        if (status === 'null') {
            const id = localStorage.getItem('userId');
            this.props.fetchAllUserOrders(id);
        } else {
            axios.get(Config.API_URL + '/filter-status', {params:{status: status}}).then(res => {
                this.setState({
                    Orders: res.data
                })
            });
        }
    }

    render() {
        const Orders = this.props.orders;
        const { PerPage, activeItem } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.orders.length / PerPage); i++) {
        pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number =>
            <List handleClick={this.handleClick} id={number} key={number} isActive={activeItem === number} default={this.state.class} />
        );
        
        return (
            <div>
                { Orders.length > 0 ? (
                    <p><strong>Amount:</strong> <strong>{Orders.length}</strong> Orders</p>
                ) : (
                    <p><strong>Amount:</strong> <strong>0</strong> Orders</p>
                )}
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
                            <span style={{ float: 'right' }}>Status:</span>
                        </div>
                        <div className="col-md-8">
                            <select className="form-control" onChange={this.handleFilterStatus}>
                                <option value="null">All</option>
                                <option value="0">Inprogress</option>
                                <option value="1">Paymented</option>
                            </select>
                        </div>
                    </div>
                </div>
                <table style={{ marginTop: '10px' }} className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Total Price</th>
                            <th>Method</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showOrders(Orders)}
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

const mapStateToProps = state => {
    return {
        account: state.account,
        orders: state.sells
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUserSells: (id) => {
            dispatch(actFetchSellsRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistorySell);

