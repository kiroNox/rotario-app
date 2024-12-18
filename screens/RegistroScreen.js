import React from 'react';
import { View, Button, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import InputField from '../components/InputRegistro';
import SelectField from '../components/SelectorRegistro';
import RadioButton from '../components/RadioRegistro';
import useCustomValidation from '../hooks/useCustomValidation'; // Hook personalizado
import ButtonFooter from '../components/ButtonFooter';

const RegistroScreen = () => {
  const validationRules = {
    cedula: (value) =>
      !value
        ? 'La cédula es requerida'
        : !/^(V|E)-\d{5,15}$/.test(value)
        ? 'La cédula debe tener el formato V-12345678 o E-12345678'
        : '',
  
    nombre: (value) =>
      !value
        ? 'El nombre es requerido'
        : !/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{2,50}$/.test(value)
        ? 'El nombre solo puede contener letras y espacios'
        : '',
  
    apellido: (value) =>
      !value
        ? 'El apellido es requerido'
        : !/^[a-zA-ZÁÉÍÓÚáéíóúÑñ\s]{2,50}$/.test(value)
        ? 'El apellido solo puede contener letras y espacios'
        : '',
  
    telefono: (value) =>
      !value
        ? 'El teléfono es requerido'
        : !/^\d{10,15}$/.test(value)
        ? 'El teléfono debe contener entre 10 y 15 dígitos'
        : '',
  
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
    <SafeAreaView style={styles.container}>

      <ScrollView>
        <View style={{paddingBottom: 20}}>
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
        {/*  
        
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
        */}
        <Button title="Enviar" onPress={handleSubmit} />
        </View>
      </ScrollView>

      <View>
        <ButtonFooter activado="Registro"/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal:20,
    paddingTop:20
  },
  inputField: {
    alignSelf: 'center', // Centra el campo en el contenedor
    width: '60%', // Ajusta el ancho al 80% del contenedor padre
  },
});

export default RegistroScreen;
