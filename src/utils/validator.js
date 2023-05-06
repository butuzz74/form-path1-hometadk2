export const validator = (data, config) => {
    const errors = {};
    function validate(validateMethod, data, config) {
        let statusValidate;
        switch (validateMethod) {
        case "isRequired": {
            statusValidate = data.trim() === "";
            break;
        }
        case "isFirstCapitalLetter": {
            const emailRegExp = /^[A-ZА-Я]/;
            statusValidate = !emailRegExp.test(data);
            break;
        }
        case "isNumber": {
            const emailRegExp = /^\d{4}$/g;
            statusValidate = !emailRegExp.test(data);
            break;
        }
        case "isLessCurrentYear": {
            const currentYear = new Date().getFullYear();
            statusValidate = !(+data <= +currentYear);
            break;
        }
        case "isValidLink": {
            const emailRegExp = /^https?:\/\/\S+\.\S+/;
            statusValidate = !emailRegExp.test(data);
            break;
        }
        default:
            break;
        }
        if (statusValidate) {
            return config.message;
        }
    }
    for (const fieldName in data) {
        for (const validateMethod in config[fieldName]) {
            const error = validate(
                validateMethod,
                data[fieldName],
                config[fieldName][validateMethod]
            );
            if (error && !errors[fieldName]) {
                errors[fieldName] = error;
            }
        }
    }
    return errors;
};
