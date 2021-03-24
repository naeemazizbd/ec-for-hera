import React from 'react';
import { Link } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto  d-flex content-align-center ">
                            <div className="nav-item">
                                <Link className="text-success" to="/home"><i class="fas fa-home fs-3"></i></Link>
                            </div>

                            <li className="nav-item dropdown ms-4 bg-success">
                                <Link className="nav-link text-white" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Product Category <i class="fas fa-caret-square-down"></i>
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" >Action</Link></li>
                                    <li><Link className="dropdown-item" >Another action</Link></li>
                                    <li><Link className="dropdown-item" >Something else here</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="navbar-text">
                        <Link to=""><i class="fas fa-heart fs-3 text-success"></i></Link>
                        <Link to=""><i className="fas fa-shopping-cart fs-3 ms-3 text-success"></i></Link>
                        <Link to=""><i className="fas fa-user-circle fs-3 ms-3 text-success"></i></Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navber;