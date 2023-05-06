export const getFullYear = (year) => {
    const currentYear = new Date().getFullYear();
    let fullYear = String(+currentYear - +year);
    if (+fullYear.slice(-1) === 1) {
        fullYear = fullYear + " " + "год";
    } else {
        if (+fullYear.slice(-1) > 1 && +fullYear.slice(-1) < 5) {
            fullYear = fullYear + " " + "года";
        } else {
            fullYear = fullYear + " " + "лет";
        }
    }
    return fullYear;
};
