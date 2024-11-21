import React from 'react';
import { View, StyleSheet } from 'react-native';

const Row = ({ children, style, ...props }) => {
    const styleParent = {...props.styleParent};
    delete props.styleParent;
    return (
        <View style={{alignItems:'center',...styleParent}}>
            <View style={[styles.row, style]} {...props}>
            {children}
            </View>
        </View>
    );
  };

const Col = ({ children, style, ...props }) => {
    return (
      <View style={[stylescol.col, style]} {...props}>
        {children}
      </View>
    );
  };
  
  const stylescol = StyleSheet.create({
    col: {
      flex: 1,
      paddingHorizontal:5
    },
  });

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export {Row,Col};