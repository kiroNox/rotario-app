import React, { useRef, useEffect } from 'react';
import { Animated, Text, View, StyleSheet } from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cargando...</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0

  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
});

export default Loading;