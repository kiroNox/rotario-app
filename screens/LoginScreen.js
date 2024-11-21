import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Image, TouchableWithoutFeedback, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useValidateEmail, useValidatePassword} from '../assets/js/validaciones';
import FInput from '../components/Finput';
import { setItem, getItem, clear, removeItem } from '../utils/storage';
import { baseUrl } from '../assets/js/config';
import  Loading from '../components/loading';

import axios from 'axios';

export default LoginScreen = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('uptaebxavier@gmail.com');
    const [password, setPassword] = useState('hola123');
    const emailError = useValidateEmail(email);
    const passwordError = useValidatePassword(password);
    const [sending, setSending] = useState(false);

    const handleLogin = async () => {
        await clear();
        console.log(await getItem('user'));

        return new Promise(async (resolve, reject) => {

            if(sending){
                return;
            }
            else {
                setSending(true);
            }
            await removeItem("user");
            
            if(email=="" || password==""){
                reject("campos vacios");
                return;
            }
            
            
            let data = {
                "user": email,
                "pass": password,
                "accion":"singing"
            }
            let url = baseUrl+"?p=log&APP-REQUEST=1";


            if(emailError || passwordError){
                reject((emailError ? emailError : passwordError));
                return;
            }

            
            try {
                const response = await axios.post(url, data,{
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

            
                if(response.data.resultado && response.data.resultado == "singing"){
                    let none = await setItem('user', response.headers['user']);
                    console.log(getItem('user'),"get user");
                    console.log(response,"response");
                    navigation.reset({index: 0, routes: [{ name: 'Home' }]});
                }
                else{
                    alert(response.data.mensaje);
                }
            } catch (error) {
                console.error(error);
            }
            resolve();
            }).catch((error) => alert(error)).finally(() => setSending(false));
    };

    return (
        <View style={{flex: 1}}>
            <View>
                <Image source={require('../assets/rotario_logo.jpg')}/>


                <FInput 
                    span={((emailError && email != "") ? emailError : "")}
                    label="Correo" 
                    placeholder="Escribe tu correo" 
                    input={{value: email, onChangeText: setEmail}}
                    />
                <FInput
                    span={((passwordError && password != "") ? passwordError : "")}
                    label="Contraseña"
                    placeholder="Escribe tu contraseña"
                    
                    input={{value: password, onChangeText: setPassword, secureTextEntry: true}}
                    />
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('ResetPass')}>
                        <View>
                            <Text style={styles.link}>Recuperar contraseña</Text>
                        </View>
                    </TouchableWithoutFeedback>

                <Button title="Iniciar sesión" onPress={handleLogin} />
            </View>
            {sending && <Loading />}
        </View>
    );
};

const styles = StyleSheet.create({
    link: {
        color: "blue",
        textAlign: "center",
        textDecorationLine: "underline",
        marginVertical: 10
    }
});