import {text, View, StyleSheet, Button, Image, Text, TextInput, Alert, InputAccessoryView} from 'react-native';
import { setItem, getItem } from '../utils/storage';
import { useState, useEffect } from 'react';
import {Row,Col} from '../components/filas';
import axios from 'axios';
import { baseUrl } from '../assets/js/config';
import { useNavigation} from '@react-navigation/native';



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
                
                resp =await axios.post(url, data);
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
        <View style={{padding: 10}}>

            {
            errorUsuario?(
                <View style={{alignItems: 'center',flexBasis: '100%',justifyContent: 'center'}}>
                    <View>
                        <Text style={{fontSize: 30,textAlign:"center" , color:"red"}}>{errorUsuario}</Text>
                    </View>
                </View>
            ):(usuario)?(
                <View style={{flexBasis: '100%'}}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../assets/perfil.png')} style={{width: 200, height: 200, objectFit: 'contain'}}/>
                    </View>
                    <MyRow label="Cedula" value={usuario.cedula}/>
                    <MyRow label="Nombre" value={usuario.nombre+" "+usuario.apellido}/>
                    <MyRow label="Correo" value={usuario.correo}/>
                    <MyRow label="Telefono" value={usuario.telefono}/>
                    <MyRow label="Genero" value={usuario.genero}/>
                    <MyRow label="fecha de contratacion" value={usuario.creado}/>
                    
                </View>
            ):(
                <View style={{alignItems: 'center',flexBasis: '100%',justifyContent: 'center'}}>
                    <View>
                        <Text style={{fontSize: 30}}>Cargando...</Text>
                    </View>
                </View>
            )}
        </View>
    );
}

function MyRow({label,value}){
    return (
        <Row style={{width:"90%"}}>
            <Col style={{borderWidth: 1,alignItems:"center",justifyContent:"center"}}>
                <Text style={styles.textRight}>{label}</Text>
            </Col>
            <Col style={{borderWidth: 1,borderLeftWidth: 0,}}>
                <Text style={styles.textLeft}>{value}</Text>
            </Col>
        </Row>
    )
}

const styles = StyleSheet.create({
    textCenter: {
      textAlign:"center"
    },
    textLeft:{
        textAlign:"left"
    },
    textRight:{
        textAlign:"right"
    }

  });
