import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { getFullYear } from "../utils/getFullYear";

const StudentCard = ({ name, surname, year, id, portfolio }) => {
    const fullYear = getFullYear(year);
    return (
        <div className="col-sm-6 mb-3 mb-sm-0 mt-3">
            <div className="card">
                <div className="card-body shadow">
                    <h5 className="card-title">{name + " " + surname}</h5>
                    <p className="card-text">
                        Год рождения : { year + " " + `(${fullYear})`}
                    </p>
                    <p className="card-text">
                        Портфолио : {<a href={portfolio} target="_blank" rel="noreferrer">{portfolio}</a>}
                    </p>
                    <Link to={`/${id}`} className="btn btn-primary">
                        Редактировать
                    </Link>
                </div>
            </div>
        </div>
    );
};

StudentCard.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    year: PropTypes.string,
    id: PropTypes.number,
    fullYear: PropTypes.string,
    portfolio: PropTypes.string
};
export default StudentCard;
