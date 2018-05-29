import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Category.css';
import { actFetchCategoriesRequest } from '../../../actions/Categories/index';

class Category extends Component {
    constructor() {
        super();
        this.state = {
           
        };
    }

    componentDidMount() {
        // Gọi trước khi component đc render lần đầu tiên
        this.props.fetchAllCategories();
    }

    render() {
        const data = this.props.categories;

        const listCatgories = data.map((category, index) => 
            <li key={index} ><a className="filter-category">{category.name}</a></li>
        );
        return (
            <div>
                <div className="box categories">
                    <h2 style={{ textAlign: 'center', fontSize: '22px' }}>Category<span></span></h2>
                    <ul className="box-content category-sidebar">
                        {listCatgories}
                    </ul>
                    {/* <a className="btn btn-primary btn-xs" id="btn-loadmore-category">See All</a> */}
                </div>
            </div>
        );
    }
};


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

export default connect(mapStateToProps, mapDispatchToProps)(Category);
