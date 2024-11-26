import { AntDesign as Icon } from "@expo/vector-icons";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { baseUrl } from '../assets/js/config';
import { getItem, removeItem } from '../utils/storage';
import axios from 'axios';

import { useNavigation,  } from '@react-navigation/native';



function Btn ({name, size, onPress, value, first, last,active}){
    return (
        <Pressable onPress={onPress}>

        {({pressed}) => (
            <View style={[styles.container, first && styles.containerFirst, last && styles.containerLast, ((pressed && !active)||(!pressed && active)) && styles.pressed]}>
                <Icon style={(pressed && !active)||(!pressed && active) ? styles.textPressed : null} name={name} size={size}/>
                <Text style={(pressed && !active)||(!pressed && active) ? styles.textPressed : null}>{value}</Text>
            </View>
        )}
                
        </Pressable>
    );
}



export default function ButtonFooter({activado}) {
    const navigation = useNavigation();
    const closeSession = async () => {
        if(await getItem('SERVER',false)){// si estubiera en el server del sistema
            let resp = await axios.post(baseUrl+'?p=out&APP-REQUEST=1');// cierra la sesion en el servidor
        }
        await removeItem('user');
        navigation.reset({index: 0, routes: [{name: 'Login'}]})
    };
    console.log("activado",activado);
    return (
        <View style={styles.footerContainer}>
            <Btn active={activado=="Perfil"} name="idcard" size={30} value={"Perfil"} first onPress={() => navigation.reset({index: 1, routes: [{name: 'Home'},{name: 'Perfil'}]})}/>
            <Btn active={activado=="Registro"} name="edit" size={30} value={"Registro"} onPress={() => navigation.reset({index: 1, routes: [{name: 'Home'},{name: 'Registro'}]})}/>
            <Btn active={activado=="Log out"} name="poweroff" size={30} value={"Log out"} last onPress={closeSession}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        //borderRadius: 10,
        borderColor: '#c8c6c6',
        padding: 10,
        height: 90,
        width: 90
    },
    pressed: {
        backgroundColor: '#2196F3',
    },
    containerFirst: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    containerLast: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderRightWidth: 1,
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    textPressed: {
        color: 'white',
    }
});