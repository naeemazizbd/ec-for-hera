import React from 'react';

const Product = () => {
    return (
        <div>
            <div class="card mb-3 shadow m-2" Style="max-width: 100%;">
                <div class="row g-0 ">
                    <div class="col-md-4 p-2">
                        <img Style="width:300px" src="http://www.heartbowsmakeup.com/wp-content/uploads/2015/02/Best-Body-Shop-Products.jpg" alt="..." />
                    </div>
                    <div class="col-md-8 p-2">
                        <div class="card-body ">
                            <h3 class="card-title">Product title</h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <h5 class="card-text">Price: $ 500</h5>
                            <div className="d-flex m-1">
                                <div className="d-flex  w-25 border text-center">
                                <button className="btn">-</button>
                                <input className="form-control border border-light" type="text" value="1" name="" id=""/>
                                <button className="btn">+</button>
                                </div>
                                <div className="d-flex">
                                <button className="btn btn-success ms-2">View Details</button>
                                <button className="btn btn-success ms-2"><i className="fas fa-shopping-cart"></i>Add To Cart</button>
                                <button className="btn btn-success ms-2"><i class="fas fa-heart"></i></button>
                                
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;