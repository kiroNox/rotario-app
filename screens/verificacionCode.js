import { View,Alert, Button, ScrollView, StyleSheet, SafeAreaView, Text } from 'react-native';
import React, { useState } from 'react';
import ButtonFooter from '../components/ButtonFooter';
import Finput from '../components/Finput';
import { useValidateCodigo } from '../assets/js/validaciones';
import { useNavigation } from '@react-navigation/native';




export default function VerificacionCode() {
    const navigation = useNavigation();
    const [Codigo, setCodigo] = useState('');
    const errors = useValidateCodigo(Codigo);
    const handleCode = () => {
        if(errors){
            Alert.alert("Error",errors);
        }else{
            navigation.navigate('ResetPass',{title: 'Reestablecer Contraseña'});
        }
    }
    return (
        <SafeAreaView style={styles.container}> 
            <View style={{flexGrow: 1,paddingTop: 50,paddingHorizontal:20}}>
                <Text style={styles.text}>Por favor ingrese el codigo de verificacion enviado a su correo</Text>
                <Finput  
                input={{value: Codigo, onChangeText: setCodigo, style: {  textAlign: 'center' ,fontSize: 24}}}
                label="" 
                span="" 
                placeholder=""/>
                <Button title="Verificar" onPress={handleCode}/>
            </View>
        </SafeAreaView>
    );
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