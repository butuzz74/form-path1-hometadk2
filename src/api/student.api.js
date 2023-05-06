const students = [];

if (!localStorage.getItem("students")) {
    localStorage.setItem("students", JSON.stringify(students));
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(JSON.parse(localStorage.getItem("students")));
        }, 2000);
    });
const update = (id, data) =>
    new Promise((resolve) => {
        const students = JSON.parse(localStorage.getItem("students"));
        const studentsIndex = students.findIndex((u) => +u.id === +id);
        students[studentsIndex] = { ...students[studentsIndex], ...data };
        localStorage.setItem("students", JSON.stringify(students));
        resolve(students[studentsIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function() {
            resolve(
                JSON.parse(localStorage.getItem("students")).find(
                    (student) => +student.id === +id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};
