import React from 'react';
import './Category.css';

const Category = () => {
    return (
        <div>
            <div className="box categories">
                <h2>Category<span></span></h2>
                <ul className="box-content category-sidebar">
                    <li><a >Bình luận văn học‎</a></li>
                    <li><a >Chính trị‎</a></li>
                    <li><a >Địa lý</a></li>
                    <li><a >Giáo khoa‎</a></li>
                    <li><a >Lịch sử‎</a></li>
                    <li><a >Phi hư cấu‎</a></li>
                    <li><a >Khoa học‎</a></li>
                    <li><a >Kinh Tế - Quản Lý</a></li>
                    <li><a >Thiếu nhi‎</a></li>
                    <li><a >Thiếu niên‎</a></li>
                </ul>
                <a className="btn btn-primary btn-xs" id="btn-loadmore-category">See All</a>
            </div>
        </div>
    );
};

export default Category;
