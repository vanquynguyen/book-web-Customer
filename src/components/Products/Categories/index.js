import React, { Component } from 'react';
import axios from 'axios';
import * as Config from '../../constants/Config';
import { connect } from 'react-redux';


class Categories extends Component {
    
    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.categories)
        return (
            <div>
            
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        categories : state.categories
    }
}

export default connect(mapStateToProps)(Categories);
