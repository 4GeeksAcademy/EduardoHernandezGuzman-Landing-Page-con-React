import React from "react";

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary  bg-secondary">
                <div className="container-fluid">
                    <a className="navbar-brand text-white fw-bold" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav ">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            <a className="nav-link active text-white" aria-current="page" href="#">About</a>
                            <a className="nav-link active text-white" aria-current="page" href="#">Services</a>
                            <a className="nav-link active text-white" aria-current="page" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Nav;