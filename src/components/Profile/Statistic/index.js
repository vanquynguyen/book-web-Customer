import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actGetStatisBookRequest } from '../../../actions/Books';
import { actStatisPaymentsRequest } from '../../../actions/StatisPayments';

import * as Config from '../../../constants/Config';
import axios from 'axios';
import ReactHighcharts from 'react-highcharts';

import HighchartsMore from 'highcharts-more';
HighchartsMore(ReactHighcharts.Highcharts);

// Highcharts exporting
const HighchartsExporting = require('highcharts-exporting')
HighchartsExporting(ReactHighcharts.Highcharts)

require('highcharts-export-csv')(ReactHighcharts.Highcharts)

var ReactHighstock =  require('react-highcharts/ReactHighstock');
HighchartsExporting(ReactHighstock.Highcharts);

class Statistic extends Component {
    
    constructor() {
        super();
        this.state = {
            statisBooks: {},
            statisPayments: {},
            revenueWeek: [],
            revenueMonth: [],
            config: {},
            chartMonth: {}
        };
    }

    componentWillMount() {
        const userId = localStorage.getItem('userId');
        axios.get(Config.API_URL + `/user/${userId}/book/percent-active`).then(res => {
            this.setState({
                statisBooks : res.data
            });
        })

        axios.get(Config.API_URL + `/user/${userId}/payment/percent-payment`).then(res => {
            this.setState({
                statisPayments : res.data
            });
        })

        axios.get(Config.API_URL + `/user/${userId}/get-revenue`).then(res => {
            this.setState({
                revenueWeek : res.data.week,
                revenueMonth : res.data.month,
                revenueAll: res.data.all
            });
        })

        axios.get(Config.API_URL + `/user/${userId}/get-revenue-month`).then(res => {
            let month = []
            for(let key in res.data) {
                month.push(res.data[key].data);
            }
            this.setState({
                config:{
                    /* HighchartsConfig */
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: 'Monthly Growth'
                    },
                    subtitle: {
                        text: 'Source: UTTBOOK'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    series: [{
                        name: 'Revenue',
                        data: [month[0], month[1], month[2], month[3], month[4], month[5], month[6], month[7], month[8], month[9], month[10], month[11]]
                    }],
                    plotOptions: {
                        line: {
                          dataLabels: {
                            enabled: true
                          },
                          enableMouseTracking: false
                        }
                    },
                    yAxis: {
                        title: {
                            text: 'Revenue ($)'
                        }
                    },
                },
            })
        })
    }

    handleFilterYear = (event) => {
        const year = event.target.value;
        const userId = localStorage.getItem('userId');
        axios.get(Config.API_URL + `/user/${userId}/get-revenue-month`, {params:{year: year}}).then(res => {
            let month = []
            for(let key in res.data) {
                month.push(res.data[key].data);
            }
            this.setState({
                config:{
                    /* HighchartsConfig */
                    title: {
                        text: 'Monthly Growth'
                    },
                    subtitle: {
                        text: 'Source: UTTBOOK'
                    },
                    xAxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    },
                    series: [{
                        name: 'Revenue',
                        data: [month[0], month[1], month[2], month[3], month[4], month[5], month[6], month[7], month[8], month[9], month[10], month[11]]
                    }],
                    yAxis: {
                        title: {
                            text: 'Revenue ($)'
                        }
                    },
                },
            })
        })
    }

    render() {
        const activeBook = this.state.statisBooks.active;
        const percentBook = ((activeBook/this.state.statisBooks.sum)*100).toFixed(1);
        const activeOrder = this.state.statisPayments.active_orders;
        const percentOrder = ((activeOrder/this.state.statisPayments.all_orders)*100).toFixed(1);
        const activeSell = this.state.statisPayments.active_sells;
        const percentSell = ((activeSell/this.state.statisPayments.all_sells)*100).toFixed(1);

        let totalWeek = 0;
        for(let key in this.state.revenueWeek) {
            totalWeek += this.state.revenueWeek[key].price
        }

        let totalMonth = 0;
        for(let key in this.state.revenueMonth) {
            totalMonth += this.state.revenueMonth[key].price
        }

        let totalAll = 0;
        for(let key in this.state.revenueAll) {
            totalAll += this.state.revenueAll[key].price
        }

        return (
            <div>
                <div className="row total-statis">
                    <div className="col-sm-4">
                        <div className="row total">
                            <div className="col-md-12">
                                <p className="dashboard-title">Total Books</p>
                                <div className="row">
                                    <div className="col-md-4" style={{ textAlign: 'center' }}>
                                        <p className="total-amount">{ this.state.statisBooks.sum ? this.state.statisBooks.sum : 0 }</p>
                                        <i className="icon-notebook total-icon"></i>
                                    </div>
                                    <div className="col-md-8 total-percent">
                                        <p className="total-percent-number">{ percentBook }%</p>
                                        <div className="progress-bar">
                                            <div className="progress-active" style={{ width: `${percentBook}%` }}>
                                            </div>
                                        </div>
                                        <p className="percent-active">Percentage active</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="row total">
                            <div className="col-md-12">
                                <p className="dashboard-title">Total Orders</p>
                                <div className="row">
                                    <div className="col-md-4" style={{ textAlign: 'center' }}>
                                        <p className="total-amount">{ this.state.statisPayments.all_orders ? this.state.statisPayments.all_orders : 0 }</p>
                                        <i className="icon-basket-loaded total-icon"></i>
                                    </div>
                                    <div className="col-md-8 total-percent">
                                        <p className="total-percent-number">{ percentOrder }%</p>
                                        <div className="progress-bar">
                                            <div className="progress-active" style={{ width: `${percentOrder}%`}}>
                                            </div>
                                        </div>
                                        <p className="percent-active">Percentage payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="row total">
                            <div className="col-md-12">
                                <p className="dashboard-title">Total Sells</p>
                                <div className="row">
                                    <div className="col-md-4" style={{ textAlign: 'center' }}>
                                        <p className="total-amount">{ this.state.statisPayments.all_sells ? this.state.statisPayments.all_sells : 0 }</p>
                                        <i className="icon-bag total-icon"></i>
                                    </div>
                                    <div className="col-md-8 total-percent">
                                        <p className="total-percent-number">{ percentSell }%</p>
                                        <div className="progress-bar">
                                            <div className="progress-active" style={{ width: `${percentSell}%`}}>
                                            </div>
                                        </div>
                                        <p className="percent-active">Percentage payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row total-main-statis">
                    <h2>Activity Performance</h2>
                    <hr />
                    <h4 style={{ fontWeight: 'bold'}}>Revenue in Week</h4>
                    {totalWeek}$
                    <hr />
                    <h4 style={{ fontWeight: 'bold'}}>Revenue in Month</h4>
                    {totalMonth}$
                    <hr />
                    <h3 style={{ fontWeight: 'bold'}}>Revenue All</h3>
                    Revenue Estimate: {totalAll}$
                    <br />
                    Revenue (charges): {totalAll*0.9}$
                    <hr />
                    <select className="form-control" onChange={this.handleFilterYear} style={{ width: '15%', float: 'right' }}>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2019">2020</option>
                    </select>
                    <ReactHighcharts config = {this.state.config} ref="chart"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        account: state.account,
        statisBooks: state.statisBooks,
        statisPayments:  state.statisPayments,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllUserStatisBooks: (id) => {
            dispatch(actGetStatisBookRequest(id));
        },
        fetchAllUserStatisPayments: (id) => {
            dispatch(actStatisPaymentsRequest(id));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Statistic);
