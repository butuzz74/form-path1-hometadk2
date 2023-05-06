import React from "react";

const Preloader = () => {
    return (
        <div className="d-flex justify-content-center my-4 mx-5">
            <strong>Loading...</strong>
            <div
                className="spinner-border ms-auto"
                role="status"
                aria-hidden="true"
            ></div>
        </div>
    );
};

export default Preloader;
