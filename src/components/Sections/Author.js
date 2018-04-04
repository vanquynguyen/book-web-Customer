import React from 'react';
import './author.css';

const Author = () => {
    return (
        <div className="hot-authors">
            <div className="section-title-line">
                <h3 className="heading-tittle">Hot authors</h3>
                <hr className="filler-line" />
            </div>
            {/* <div className="sidebar-box-content">
                <div className="user-card">
                    <div className="user-info-row">
                        <div className="user-avatar">
                            <a className="avatar">
                            <img className="img-circle" src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt="" />
                            </a>
                        </div>
                        <div className="user-name">
                        <a className="">Quy Nguyen</a>
                        </div>
                    </div>
                    <div className="user-info-row">
                        <div className="user-action">
                            <div className="subscribe"><button className="btn btn-follow btn-full-width btn-small-padding">
                                Follow
                                </button>
                            </div>
                        </div>
                        <div className="user-stats">
                            <span>
                                <i aria-hidden="true" className="fa fa-star"></i> 1406
                            </span>
                            <span>
                                <i aria-hidden="true" className="fa fa-user-plus"></i> 88
                            </span>
                            <span>
                                <i aria-hidden="true" className="fa fa-pencil"></i> 11
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="author-content">
                <div className="user-item">
                    <div className="image">
                        <img className="img-circle" src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt="Images" />
                    </div>
                    <div className="content">
                        <h4 className="author-name">Quy Nguyen</h4>
                        <div className="rating-wrapper">
                            <div className="rating-item">
                                <span style={{cursor: 'default'}}>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'visible'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'visible'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span></span></div>
                                    </div>
                                </span>
                                <input type="hidden" className="rating" data-filled="fa fa-star rating-rated" data-empty="fa fa-star-o" data-fractions="2" data-readonly="" value="3.5" />
                            </div>
                        </div>
                        <span className="labeling"><i className="fa fa-map-marker"></i> Bangkok, Thailand</span>
                    </div>
                    {/* <div className="user-meta">
                        <ul className="clearfix">
                            <li>
                                <div className="meta">
                                    <span className="number">53</span>
                                    Tours
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">443</span>
                                    Reviews
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">17</span>
                                    Awards 
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">76</span>
                                    Happiers 
                                </div>
                            </li>
                        </ul>
                    </div> */}
                    <div className="ph-20">
                        <a style={{ width: '90%', background: '#47abda', borderColor: '#FE8800' }} className="btn btn-primary btn-block">View Profile</a>
                    </div>
                </div>
            </div>
            <div className="author-content">
                <div className="user-item">
                    <div className="image">
                        <img className="img-circle" src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt="Images" />
                    </div>
                    <div className="content">
                        <h4 className="author-name">Phuc Luong</h4>
                        <div className="rating-wrapper">
                            <div className="rating-item">
                                <span style={{cursor: 'default'}}>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'visible'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'visible'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span></span></div>
                                    </div>
                                </span>
                                <input type="hidden" className="rating" data-filled="fa fa-star rating-rated" data-empty="fa fa-star-o" data-fractions="2" data-readonly="" value="3.5" />
                            </div>
                        </div>
                        <span className="labeling"><i className="fa fa-map-marker"></i> Bangkok, Thailand</span>
                    </div>
                    {/* <div className="user-meta">
                        <ul className="clearfix">
                            <li>
                                <div className="meta">
                                    <span className="number">53</span>
                                    Tours
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">443</span>
                                    Reviews
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">17</span>
                                    Awards 
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">76</span>
                                    Happiers 
                                </div>
                            </li>
                        </ul>
                    </div> */}
                    <div className="ph-20">
                        <a style={{ width: '90%',   background: '#47abda', borderColor: '#FE8800' }} className="btn btn-primary btn-block">View Profile</a>
                    </div>
                </div>
            </div>
            <div className="author-content">
                <div className="user-item">
                    <div className="image">
                        <img className="img-circle" src="https://images.viblo.asia/avatar/398ff412-f7d3-4e32-85b3-50efae907d6b.png" alt="Images" />
                    </div>
                    <div className="content">
                        <h4 className="author-name">Tran Khanh</h4>
                        <div className="rating-wrapper">
                            <div className="rating-item">
                                <span style={{cursor: 'default'}}>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'hidden'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'visible'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span className="fa fa-star rating-rated"></span></div>
                                    </div>
                                    <div className="rating-symbol" style={{display: 'inline-block', position: 'relative'}}>
                                        <div className="rating-symbol-background fa fa-star-o" style={{visibility: 'visible'}}></div>
                                        <div className="rating-symbol-foreground" style={{display: 'inline-block', position: 'absolute', overflow: 'hidden', left: '0px', right: '0px', width: 'auto'}}><span></span></div>
                                    </div>
                                </span>
                                <input type="hidden" className="rating" data-filled="fa fa-star rating-rated" data-empty="fa fa-star-o" data-fractions="2" data-readonly="" value="3.5" />
                            </div>
                        </div>
                        <span className="labeling"><i className="fa fa-map-marker"></i> Bangkok, Thailand</span>
                    </div>
                    {/* <div className="user-meta">
                        <ul className="clearfix">
                            <li>
                                <div className="meta">
                                    <span className="number">53</span>
                                    Tours
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">443</span>
                                    Reviews
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">17</span>
                                    Awards 
                                </div>
                            </li>
                            <li>
                                <div className="meta">
                                    <span className="number">76</span>
                                    Happiers 
                                </div>
                            </li>
                        </ul>
                    </div> */}
                    <div className="ph-20">
                        <a style={{ width: '90%', background: '#47abda', borderColor: '#FE8800' }} className="btn btn-primary btn-block">View Profile</a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="sidebar-box-links">
                <a className="accented-link">
                <i aria-hidden="true" className="fa fa-tags mr-05"></i> All authors
                </a>
            </div>
        </div>
    );
};

export default Author;
