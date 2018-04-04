import React from 'react';

const Breadscrumb = (props) => {
    return (
        <div className="services-breadcrumb">
            <div className="agile_inner_breadcrumb">
                <div className="container">
                    <ul className="w3_short">
                        <li>
                            <a>Home</a>
                            <i>|</i>
                        </li>
                        <li>{ props.name }</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Breadscrumb;
