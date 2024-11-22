import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';


const RadioButton = ({ label, selectedValue, onValueChange, options, error, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text>{label}</Text>
      <View style={styles.radioContainer}>
        {options.map((option, index) => (
          <View key={index} style={styles.radioItem}>
            <Text>{option.label}</Text>
            <Input
              type="radio"
              value={option.value}
              checked={selectedValue === option.value}
              onChange={() => onValueChange(option.value)}
            />
          </View>
        ))}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    alignSelf: 'center', // Centrar el componente horizontalmente
    justifyContent: 'center', // Centrar el componente verticalmente si es parte de un contenedor
    width: '80%', // Ajustar el ancho al 80% del contenedor padre
  },
  radioContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center', // Centrar las opciones dentro del radioContainer
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    textAlign: 'center', // Centrar el mensaje de error si aparece
  },
});

export default RadioButton;
