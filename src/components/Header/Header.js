import React from 'react';

const Header = () => {
    return (
        <div className="">
        <div className="row p-2 d-flex justify-content-center">
            <div className="col-md-6">
            <h1 className="p-1 text-success">E Commerce For Hera</h1>
            </div>
            <div className="col-md-6">
                <form class="d-flex p-1">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
        </div>

    );
};

export default Header;