import React from 'react';

const SortBy = () => {
    return (
        <div className="row">
            <div className="pull-left col-xs-12 col-sm-7 col-md-7">
                <h4><i>Books for <span className="">"filter"</span></i></h4>
            </div>
            <div className="pull-right col-xs-12 col-sm-5 col-md-5">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label className="control-label col-xs-6">Sort By <i className="icofont icofont-sort"></i></label>
                        <div className="col-xs-5">
                            <div className="form-group">
                                <select name="sort" id="sort-book" className="form-control">
                                    <optgroup label="Order By Desc" data-order-by="desc">
                                        <option value="title">Title</option>
                                        <option value="count_view">View</option>
                                        <option value="avg_star">Star</option>
                                        <option value="publish_date">Publish date</option>
                                        <option value="author">Author</option>
                                        <option value="created_at">Created at</option>
                                    </optgroup>
                                    <optgroup label="Order By Asc" data-order-by="asc">
                                        <option value="title">Title</option>
                                        <option value="count_view">View</option>
                                        <option value="avg_star">Star</option>
                                        <option value="publish_date">Publish date</option>
                                        <option value="author">Author</option>
                                        <option value="created_at">Created at</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SortBy;
