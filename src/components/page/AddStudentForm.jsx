import React, { useEffect, useState } from "react";
import TextField from "../form/TextField";
import { useHistory } from "react-router-dom";
import { validatorConfig } from "../../config/validatorConfig";
import { validator } from "../../utils/validator";
import Navbar from "../ui/NavBar";

const AddStudentForm = () => {
    const history = useHistory();
    const { location } = history;
    const [data, setData] = useState({
        name: "",
        surname: "",
        year: "",
        portfolio: ""
    });
    const [errors, setErrors] = useState({});
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    useEffect(() => {
        validate();
    }, [data]);
    const isValid = Object.keys(errors).length === 0;
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        const students = JSON.parse(localStorage.getItem("students"));
        const newData = {
            ...data,
            id: Date.now()
        };
        const a = [...students, newData];
        localStorage.setItem("students", JSON.stringify(a));
        history.push("/");
    };

    return (
        <>
            <Navbar pathname={location.pathname} />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 p-4 shadow bg-light">
                        <h2>Создать</h2>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Фамилия"
                                name="surname"
                                value={data.surname}
                                onChange={handleChange}
                                error={errors.surname}
                            />
                            <TextField
                                label="Год рождения"
                                name="year"
                                value={data.year}
                                onChange={handleChange}
                                error={errors.year}
                            />
                            <TextField
                                label="Портфолио"
                                name="portfolio"
                                type="url"
                                value={data.portfolio}
                                onChange={handleChange}
                                error={errors.portfolio}
                            />
                            <button
                                type="submit"
                                disabled={!isValid}
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Создать
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddStudentForm;
