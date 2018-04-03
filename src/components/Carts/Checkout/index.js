import React from 'react';

const Checkout = () => {
    return (
        <div className="privacy">
            <div className="container">
                <h3 className="tittle-w3l">Checkout
                    <span className="heading-style">
                    <i></i>
                    <i></i>
                    <i></i>
                    </span>
                </h3>
                <div className="checkout-right">
                    <h4>Your shopping cart contains:
                        <span>3 Products</span>
                    </h4>
                    <div className="table-responsive">
                        <table className="timetable_sub">
                            <thead>
                                <tr>
                                    <th>SL No.</th>
                                    <th>Product</th>
                                    <th>Quality</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="rem1">
                                    <td className="invert">1</td>
                                    <td className="invert-image">
                                        <a href="single2.html">
                                        <img src="http://api-book.framgia.vn/image//2018/03/book/022cc11520a575b3ed61e0ccf0084401.jpg?p=thumbnail_web&s=1e5d93cf3f49841ae346eb30d0061468" alt=" " className="img-responsive" />
                                        </a>
                                    </td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value">
                                                    <span>1</span>
                                                </div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Spotzero Spin Mop</td>
                                    <td className="invert">$888.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close1"> </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="rem2">
                                    <td className="invert">2</td>
                                    <td className="invert-image">
                                        <a href="single2.html">
                                        <img src="http://api-book.framgia.vn/image//2018/03/book/download-2.jpeg?p=thumbnail_web&s=ce06a49ff6b11aa9ff2341ca4a62627a" alt=" " className="img-responsive" />
                                        </a>
                                    </td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value">
                                                    <span>1</span>
                                                </div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Fair &amp; Lovely, 80 g</td>
                                    <td className="invert">$121.60</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close2"> </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="rem3">
                                    <td className="invert">3</td>
                                    <td className="invert-image">
                                        <a href="single.html">
                                        <img src="http://api-book.framgia.vn/image//2018/03/book/veembangmaunoinho.jpg?p=thumbnail_web&s=c545ba92c83df55c8200181a91edf7aa" alt=" " className="img-responsive" />
                                        </a>
                                    </td>
                                    <td className="invert">
                                        <div className="quantity">
                                            <div className="quantity-select">
                                                <div className="entry value-minus">&nbsp;</div>
                                                <div className="entry value">
                                                    <span>1</span>
                                                </div>
                                                <div className="entry value-plus active">&nbsp;</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="invert">Sprite, 2.25L (Pack of 2)</td>
                                    <td className="invert">$180.00</td>
                                    <td className="invert">
                                        <div className="rem">
                                            <div className="close3"> </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="checkout-left">
                    <div className="address_form_agile">
                        <h4>Add a new Details</h4>
                        <form action="payment.html" method="post" className="creditly-card-form agileinfo_form">
                            <div className="creditly-wrapper wthree, w3_agileits_wrapper">
                                <div className="information-wrapper">
                                    <div className="first-row">
                                        <div className="controls">
                                            <input className="billing-address-name" type="text" name="name" placeholder="Full Name" required="" />
                                        </div>
                                        <div className="w3_agileits_card_number_grids">
                                            <div className="w3_agileits_card_number_grid_left">
                                                <div className="controls">
                                                    <input type="text" placeholder="Mobile Number" name="number" required="" />
                                                </div>
                                            </div>
                                            <div className="w3_agileits_card_number_grid_right">
                                                <div className="controls">
                                                    <input type="text" placeholder="Landmark" name="landmark" required="" />
                                                </div>
                                            </div>
                                            <div className="clear"> </div>
                                        </div>
                                        <div className="controls">
                                            <input type="text" placeholder="Town/City" name="city" required="" />
                                        </div>
                                        <div className="controls">
                                            <select className="option-w3ls">
                                                <option>Select Address type</option>
                                                <option>Office</option>
                                                <option>Home</option>
                                                <option>Commercial</option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="submit check_out">Delivery to this Address</button>
                                </div>
                            </div>
                        </form>
                        <div className="checkout-right-basket">
                            <a>Make a Payment
                            <span className="fa fa-hand-o-right" aria-hidden="true"></span>
                            </a>
                        </div>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
