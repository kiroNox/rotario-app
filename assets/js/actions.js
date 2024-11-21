// actions.js
export const setFormFieldValue = (formId, fieldName, value) => ({
    type: 'SET_FORM_FIELD_VALUE',
    payload: { formId, fieldName, value }
});