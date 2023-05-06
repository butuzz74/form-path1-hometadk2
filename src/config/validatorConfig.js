export const validatorConfig = {
    name: {
        isRequired: {
            message: "Поле обязательно к заполнению"
        },
        isFirstCapitalLetter: {
            message: "Имя должно начинаться с заглавной буквы"
        }
    },
    surname: {
        isRequired: {
            message: "Поле обязательно к заполнению"
        },
        isFirstCapitalLetter: {
            message: "Имя должно начинаться с заглавной буквы"
        }
    },
    year: {
        isRequired: {
            message: "Поле обязательно к заполнению"
        },
        isNumber: {
            message: "Год рождения должен быть числом и содержать 4 цифры"
        },
        isLessCurrentYear: {
            message: "Год рождения должен быть больше текущего"
        }
    },
    portfolio: {
        isRequired: {
            message: "Поле обязательно к заполнению"
        },
        isValidLink: {
            message: "Пример для заполнения https://xxx.xxx"
        }
    }
};
