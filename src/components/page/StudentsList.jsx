import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../ui/Header";
import API from "../../api/index";
import StudentCard from "../StudentCard";
import Preloader from "../ui/Preloader";
import Navbar from "../ui/NavBar";

const StudentsList = () => {
    const history = useHistory();
    const { location } = history;
    const [students, setStudents] = useState();

    useEffect(() => {
        API.students.fetchAll().then((data) => setStudents(data));
    }, []);

    return students
        ? (
            students.length === 0
                ? (
                    <>
                        <Navbar pathname={location.pathname} />
                        <Header />
                    </>
                )
                : (
                    <>
                        <Navbar pathname={location.pathname} />
                        <div className="row mt-4 mx-2">
                            <h1 className="text-white">Cписок студентов</h1>
                            {students.map((student) => (
                                <StudentCard key={student.id} {...student} />
                            ))}
                        </div>
                    </>
                )
        )
        : (
            <Preloader />
        );
};

export default StudentsList;
