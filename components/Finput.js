import { Text, View, StyleSheet, TextInput } from 'react-native';
export default function Finput(pr) {
 
    const defaultProps = {
      label:'Name',
      span: "",
      placeholder:"placeholder",
    }
    const props = {...defaultProps, ...pr}
    const inputProps = {
      label: props.label,
      placeholder: props.placeholder,
      ...pr.input
    }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {props.label}
      </Text>
      <TextInput {...inputProps} style={styles.input}/>
      <Text style={[styles.span, props.span === "" ?  styles.spanHidden : {}]}>
        {props.span}
      </Text>
    </View>
  );
}

// haz que el span se esconda cuando no haya error

const styles = StyleSheet.create({
  container: {
    alignItems: 'left',
    justifyContent: 'left',
    padding: 10,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 18
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    flexBasis: 40,
    width: '100%',
    padding: 8,
    minHeight: 40,
    borderWidth: 1,
    borderRadius: 5,
  },
  span: {
      color: 'red',
      textAlign: 'left',
      marginLeft: 10,
      marginTop: 5,
  },
  spanHidden: {
      display: 'none'
  }

});
