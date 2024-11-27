import {text, View, StyleSheet, Image, Text, TouchableWithoutFeedback, SafeAreaView} from 'react-native';
import { setItem, getItem } from '../utils/storage';
import { useState, useEffect } from 'react';
import {Row,Col} from '../components/filas';
import axios from 'axios';
import { baseUrl } from '../assets/js/config';
import { useNavigation} from '@react-navigation/native';
import ButtonFooter from '../components/ButtonFooter';

import { falseperfilresponse } from '../services/falsedata';
import { Title } from 'react-native-paper';



export default function PerfilScreen() {
    const [usuario, setUsuario] = useState(null);
    const [errorUsuario, setErrorUsuario] = useState(false);

    const navigation = useNavigation();
    console.log(navigation,'navi gation');

    
    

    useEffect(() => {
      const fetchUsuario = async () => {
        try {
            if(!usuario && !errorUsuario){

                user = await getItem('user');
                data = {
                    id: user,
                    accion: "get_user"
                }

                let url = baseUrl+"?p=trabajadores_user&APP-REQUEST=1";

                const server = await getItem('SERVER',false);
                if(!server){// si no esta en el server del sistema 
                    resp = falseperfilresponse(await getItem('user'));
                }
                else{// si estubiera en el server del sistema
                    resp = await axios.post(url, data);
                }
                if(resp.data){
                    if(resp.data.resultado == "get_user"){
                        console.log("1");
                        console.log(usuario);
                        setUsuario(resp.data.mensaje);
                    }
                    else if(resp.data.resultado){
                        console.log("2");
                        setErrorUsuario(resp.data.mensaje);
                    }
                    else{
                        console.log("3");
                        setErrorUsuario("Error en la solicitud");
                    }
                }
                else {
                    console.log("4");
                    setErrorUsuario("Error en la solicitud");
                }
                
            }
            else if (errorUsuario){
                console.log(errorUsuario);
            }
            else{
                console.log(usuario,"hola");
            }
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchUsuario();
    }, [usuario,setUsuario,errorUsuario,setErrorUsuario]);

    return (
        
        <SafeAreaView style={{flex: 1}}>

            {
            errorUsuario?(
                <View style={{alignItems: 'center',flexGrow: 1,justifyContent: 'center'}}>
                    <View>
                        <Text style={{fontSize: 30,textAlign:"center" , color:"red"}}>{errorUsuario}</Text>
                    </View>
                </View>
            ):(usuario)?(

                <View style={styles.container}>
                    <View style={styles.body}>
                        <View style={styles.avatarContainer}>
                            <Image source={require('../assets/perfil.png')} style={{width: 140, height: 140, objectFit: 'contain'}}/>
                        </View>
                        <View style={styles.nameContainer}>
                            <Text style={styles.name}>{usuario.nombre+" "+usuario.apellido}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Cedula:</Text>
                            <Text style={styles.infoText}>{usuario.cedula}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Genero:</Text>
                            <Text style={styles.infoText}>{usuario.genero}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Telefono:</Text>
                            <Text style={styles.infoText}>{usuario.telefono}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Email:</Text>
                            <Text style={styles.infoText}>{usuario.correo}</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoLabel}>Fecha de Contratación:</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <Text style={styles.infoText}>{usuario.creado}</Text>
                        </View>
                    </View>
                    <TouchableWithoutFeedback onPress={() => navigation.navigate('ResetPass',{title:"Cambiar Contraseña"})}>
                        <View>
                            <Text style={styles.link}>Cambiar Contraseña</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                
            ):(
                <View style={{alignItems: 'center',flexGrow: 1,justifyContent: 'center'}}>
                    <View>
                        <Text style={{fontSize: 30}}>Cargando...</Text>
                    </View>
                </View>
            )}
            <View>
                <ButtonFooter activado="Perfil"/>
            </View>
        </SafeAreaView>
    );
}

// function MyRow({label,value}){
//     return (
//         <Row style={{width:"90%"}}>
//             <Col style={{borderWidth: 1,alignItems:"center",justifyContent:"center"}}>
//                 <Text style={styles.textRight}>{label}</Text>
//             </Col>
//             <Col style={{borderWidth: 1,borderLeftWidth: 0,}}>
//                 <Text style={styles.textLeft}>{value}</Text>
//             </Col>
//         </Row>
//     )
// }

const styles = StyleSheet.create({
    container: {
        flexGrow:1,
      backgroundColor: '#ECF0F3',
    },
    body: {
      marginTop:120,
      alignItems: 'center',
      justifyContent: 'center',
    },
    avatarContainer: {
      width: 140,
      height: 140,
      borderRadius: 70,
      backgroundColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 0.16,
    },
    nameContainer: {
      marginTop: 24,
      alignItems: 'center',
    },
    name: {
      fontSize: 24,
      fontWeight: '600',
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 12,
    },
    infoLabel: {
      fontSize: 16,
      fontWeight: '600',
      color: '#666666',
      marginRight: 8,
    },
    infoText: {
      fontSize: 16,
    },
    link: {
        color: "blue",
        textAlign: "center",
        textDecorationLine: "underline",
        marginVertical: 10
    }
  });
  
