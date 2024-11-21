import { Text, View, StyleSheet, Button } from 'react-native';
export default function Button_template(argumnents) {
    const defaultProps = {
        value:"button",
        btn:{onPress: () => {alert("click")}},
    }
   const props = {...defaultProps, ...argumnents};
   let stylesText = {};
   let buttonStyles = {};
   let containerStyles = {};

   if(props.styles){
       if(props.styles.text){
        stylesText = {...props.styles.text};
       }
       if(props.styles.button){
        buttonStyles = {...props.styles.button};
       }
       if(props.styles.container){
        containerStyles = {...props.styles.container};
       }  
   }

   return (
    <View style={[defaultstyles.container, containerStyles]}>
        <Button title={props.value} />
    </View>
  );

   
    
  return (
    <View style={[defaultstyles.container, containerStyles]}>
        <View style={[defaultstyles.Button, buttonStyles]} {...props.btn}>
            <Text style={[defaultstyles.text,stylesText]}>
                {props.value}
            </Text>
        </View>
    </View>
  );
}

const defaultstyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  }
  ,Button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    elevation: 3,
    backgroundColor: '#4e73df',
    borderRadius: 10,
  },
  text: {
    color: 'white',
  }
});

