import { View,Alert, Button, ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native';
import React, { useState } from 'react';
import ButtonFooter from '../components/ButtonFooter';
import Finput from '../components/Finput';
import { useValidateCodigo } from '../assets/js/validaciones';
import { useNavigation } from '@react-navigation/native';
import { useValidateEmail } from "../assets/js/validaciones";

export default function CorreoForReset (){
    const navigation = useNavigation();
    const [correo,setCorreo] = useState("");
    const error = useValidateEmail(correo);

    const handleCorreo= ()=>{
        if(error){
            Alert.alert("Error",error);
        }else{
            navigation.navigate('verificacionCode');
        }
    }

    return (
        <SafeAreaView style={styles.container}> 
            <View style={{flexGrow: 1,paddingTop: 50,paddingHorizontal:20}}>
                <Text style={styles.text}>Por favor Ingrese el correo de su usuario a reestablecer</Text>
                <Finput  
                input={{value: correo, onChangeText: setCorreo, style: {  textAlign: 'center' ,fontSize: 24}}}
                label="" 
                span="" 
                placeholder=""/>
                <Button title="Verificar" onPress={handleCorreo}/>
            </View>
            
        </SafeAreaView>
    )



}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center'
      }
});