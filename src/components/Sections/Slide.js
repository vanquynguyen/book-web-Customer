import React from 'react';

const Slide = () => {
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1" className=""></li>
                <li data-target="#myCarousel" data-slide-to="2" className=""></li>
                <li data-target="#myCarousel" data-slide-to="3" className=""></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Big
                                <span>Save</span>
                            </h3>
                            <p>Get flat
                                <span>10%</span> Cashback
                            </p>
                            <a className="button2" >Shop Now </a>
                        </div>
                    </div>
                </div>
                <div className="item item2">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Healthy
                                <span>Saving</span>
                            </h3>
                            <p>Get Upto
                                <span>30%</span> Off
                            </p>
                            <a className="button2" >Shop Now </a>
                        </div>
                    </div>
                </div>
                <div className="item item3">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Big
                                <span>Deal</span>
                            </h3>
                            <p>Get Best Offer Upto
                                <span>20%</span>
                            </p>
                            <a className="button2" >Shop Now </a>
                        </div>
                    </div>
                </div>
                <div className="item item4">
                    <div className="container">
                        <div className="carousel-caption">
                            <h3>Today
                                <span>Discount</span>
                            </h3>
                            <p>Get Now
                                <span>40%</span> Discount
                            </p>
                            <a className="button2" >Shop Now </a>
                        </div>
                    </div>
                </div>
            </div>
            <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Slide;