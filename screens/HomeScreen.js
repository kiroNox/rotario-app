import { View, Text, TextInput, Button, Image } from 'react-native';
import { useNavigation,  } from '@react-navigation/native';
import { baseUrl } from '../assets/js/config';
import { setItem, getItem, removeItem } from '../utils/storage';
import ButtonFooter from '../components/ButtonFooter';


import axios from 'axios';


const LoginScreen = () => {
    const navigation = useNavigation();
    const closeSession = async () => {
        if(await getItem('SERVER',false)){// si estubiera en el server del sistema
            let resp = await axios.post(baseUrl+'?p=out&APP-REQUEST=1');// cierra la sesion en el servidor
        }
        await removeItem('user');
        navigation.reset({index: 0, routes: [{name: 'Login'}]})
    };
    return (
        <View style={{flex: 1}}>
            <View style={{flexGrow: 1}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Bienvenido al sistema</Text>
                <Image source={require('../assets/rotario_logo.jpg')}/>
            </View>
            <ButtonFooter />
        </View>
    );
};

export default LoginScreen;
