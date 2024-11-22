import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const SelectField = ({ label, selectedValue, onValueChange, options, error, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text>{label}</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={[styles.picker, error ? styles.errorInput : null]}
      >
        {options.map((option, index) => (
          <Picker.Item key={index} label={option.label} value={option.value} />
        ))}
      </Picker>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignSelf: 'center', // Centra el contenedor en el eje horizontal
    width: '80%', // Ancho predeterminado al 80%
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: 40,
    paddingHorizontal: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default SelectField;
