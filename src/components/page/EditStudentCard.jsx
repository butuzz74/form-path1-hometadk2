import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import API from "../../api";
import TextField from "../form/TextField";
import { validatorConfig } from "../../config/validatorConfig";
import { validator } from "../../utils/validator";
import Navbar from "../ui/NavBar";

const EditStudentCard = () => {
    const history = useHistory();
    const params = useParams();
    const { userId } = params;
    const [studentData, setStudentData] = useState();
    const [errors, setErrors] = useState({});

    useEffect(() => {
        API.students.getById(userId).then((data) => setStudentData(data));
    }, []);
    const validate = () => {
        const errors = validator(studentData, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleChange = ({ target }) => {
        setStudentData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        validate();
    }, [studentData]);
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        API.students.update(userId, studentData);
        history.push("/");
    };
    return (
        studentData && (
            <>
                <Navbar />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6 offset-md-3 p-4 shadow bg-light">
                            <h2>Редактировать</h2>
                            <form onSubmit={handleSubmit}>
                                <TextField
                                    label="Имя"
                                    name="name"
                                    value={studentData.name}
                                    onChange={handleChange}
                                    error={errors.name}
                                />
                                <TextField
                                    label="Фамилия"
                                    name="surname"
                                    value={studentData.surname}
                                    onChange={handleChange}
                                    error={errors.surname}
                                />
                                <TextField
                                    label="Год рождения"
                                    name="year"
                                    value={studentData.year}
                                    onChange={handleChange}
                                    error={errors.year}
                                />
                                <TextField
                                    label="Портфолио"
                                    name="portfolio"
                                    type="url"
                                    value={studentData.portfolio}
                                    onChange={handleChange}
                                    error={errors.portfolio}
                                />
                                <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="btn btn-primary w-100 mx-auto"
                                >
                                    Отправить
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default EditStudentCard;
