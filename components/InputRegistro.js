import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const InputField = ({ label, value, onChange, error, secureTextEntry = false, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text>{label}</Text>
      <TextInput
        style={[styles.input, error ? styles.errorInput : null]}
        value={value}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '50%', // Esto permite ajustarlo con flex o un ancho específico
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});

export default InputField;
