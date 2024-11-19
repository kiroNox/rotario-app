import React from 'react';
import { View, Button, ScrollView, StyleSheet } from 'react-native';
import InputField from '../components/InputRegistro';
import SelectField from '../components/SelectorRegistro';
import RadioButton from '../components/RadioRegistro';
import useCustomValidation from '../hooks/useCustomValidation'; // Hook personalizado

const RegistroScreen = () => {
  // Reglas de validación para los campos
  const validationRules = {
    cedula: (value) => (!value ? 'La cédula es requerida' : ''),
    nombre: (value) => (!value ? 'El nombre es requerido' : ''),
    apellido: (value) => (!value ? 'El apellido es requerido' : ''),
    telefono: (value) =>
      value.length < 10 ? 'El teléfono debe tener al menos 10 dígitos' : '',
    correo: (value) =>
      !value
        ? 'El correo es requerido'
        : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ? 'El correo no es válido'
        : '',
    fechaIngreso: (value) =>
      !value ? 'La fecha de ingreso es requerida' : '',
  };

  // Hook de validación
  const { values, errors, handleChange, validateAll } = useCustomValidation(
    {
      cedula: '',
      nombre: '',
      apellido: '',
      telefono: '',
      correo: '',
      fechaIngreso: '',
      nivelEducativo: '',
      rol: '',
      comisionServicios: '',
    },
    validationRules
  );

  const handleSubmit = () => {
    if (validateAll()) {
      alert('Formulario enviado correctamente: ' + JSON.stringify(values));
    } else {
      alert('Corrige los errores antes de enviar');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <InputField
        label="Cédula"
        value={values.cedula}
        onChange={(text) => handleChange('cedula', text)}
        error={errors.cedula}
        style={styles.inputField}
      />
      <InputField
        label="Nombre"
        value={values.nombre}
        onChange={(text) => handleChange('nombre', text)}
        error={errors.nombre}
        style={styles.inputField}
      />
      <InputField
        label="Apellido"
        value={values.apellido}
        onChange={(text) => handleChange('apellido', text)}
        error={errors.apellido}
        style={styles.inputField}
      />
      <InputField
        label="Teléfono"
        value={values.telefono}
        onChange={(text) => handleChange('telefono', text)}
        error={errors.telefono}
        style={styles.inputField}
      />
      <InputField
        label="Correo"
        value={values.correo}
        onChange={(text) => handleChange('correo', text)}
        error={errors.correo}
        style={styles.inputField}
      />
      <InputField
        label="Fecha de Ingreso"
        value={values.fechaIngreso}
        onChange={(text) => handleChange('fechaIngreso', text)}
        error={errors.fechaIngreso}
        style={styles.inputField}
      />
      <SelectField
        label="Nivel Educativo"
        selectedValue={values.nivelEducativo}
        onValueChange={(value) =>
          handleChange('nivelEducativo', value)
        }
        options={[
          { label: 'Seleccione un nivel educativo', value: '' },
          { label: 'Primaria', value: 'primaria' },
          { label: 'Secundaria', value: 'secundaria' },
        ]}
        error={errors.nivelEducativo}
        style={styles.inputField}
      />
      <SelectField
        label="Rol"
        selectedValue={values.rol}
        onValueChange={(value) => handleChange('rol', value)}
        options={[
          { label: 'Seleccione un rol', value: '' },
          { label: 'Administrador', value: 'admin' },
          { label: 'Usuario', value: 'user' },
        ]}
        error={errors.rol}
        style={styles.inputField}
      />
      <RadioButton
        label="Comisión de servicios?"
        selectedValue={values.comisionServicios}
        onValueChange={(value) =>
          handleChange('comisionServicios', value)
        }
        options={[
          { label: 'Sí', value: 'true' },
          { label: 'No', value: 'false' },
        ]}
        error={errors.comisionServicios}
        style={styles.inputField}
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  inputField: {
    alignSelf: 'center', // Centra el campo en el contenedor
    width: '60%', // Ajusta el ancho al 80% del contenedor padre
  },
});

export default RegistroScreen;
