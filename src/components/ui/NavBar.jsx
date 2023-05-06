import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ pathname }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {pathname !== "/" && <li className="nav-item me-4">
                            <Link
                                className="btn btn-info text-white"
                                aria-current="page"
                                to="/"
                            >
                                К списку студентов
                            </Link>
                        </li>}
                        {pathname !== "/add" && <li className="nav-item me-4">
                            <Link
                                className="btn btn-info text-white"
                                aria-current="page"
                                to="/add"
                            >
                                Добавить студента
                            </Link>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
Navbar.propTypes = {
    pathname: PropTypes.string
};
export default Navbar;
