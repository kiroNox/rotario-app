import { useState } from 'react';

/**
 * Custom hook para gestionar validaciones de formularios.
 * @param {Object} initialState - Estado inicial de los valores del formulario.
 * @param {Object} validationRules - Reglas de validación para cada campo.
 * @returns {Object} - Manejo de valores, errores y funciones de validación.
 */
const useCustomValidation = (initialState = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialState); // Estado de los valores
  const [errors, setErrors] = useState({}); // Estado de los errores

  /**
   * Actualiza el valor de un campo y valida su contenido.
   * @param {string} field - Nombre del campo.
   * @param {string} value - Nuevo valor del campo.
   */
  const handleChange = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    // Validar el campo individualmente
    if (validationRules[field]) {
      const error = validationRules[field](value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

  /**
   * Valida todos los campos del formulario basado en las reglas de validación.
   * @returns {boolean} - `true` si no hay errores, `false` en caso contrario.
   */
  const validateAll = () => {
    const newErrors = {};
    for (const field in validationRules) {
      const error = validationRules[field](values[field]);
      if (error) {
        newErrors[field] = error;
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };

  return {
    values, // Valores actuales del formulario
    errors, // Errores actuales del formulario
    handleChange, // Función para manejar cambios
    validateAll, // Función para validar todo el formulario
  };
};

export default useCustomValidation;
