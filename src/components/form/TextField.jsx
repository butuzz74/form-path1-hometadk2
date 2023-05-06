import React from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, value, name, onChange, error }) => {
    const getInvalidClasses = () => {
        return `form-control + ${error ? "is-invalid" : ""}`;
    };
    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    className={getInvalidClasses()}
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />

                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    );
};

TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default TextField;
