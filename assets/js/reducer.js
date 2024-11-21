// reducer.js
const initialState = {
    forms: {
        login: {
            correo: { value: '', error: null },
            password: { value: '', error: null }
        },
        // ... otros formularios
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FORM_FIELD_VALUE':
            return {
                ...state,
                forms: {
                    ...state.forms,
                    [action.payload.formId]: {
                        ...state.forms[action.payload.formId],
                        [action.payload.fieldName]: {
                            value: action.payload.value,
                            error: null // Reiniciamos el error al cambiar el valor
                        }
                    }
                }
            };
        default:
            return state;
    }
};

export default reducer;