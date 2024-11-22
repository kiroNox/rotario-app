import { View, Text, TextInput, Button, Image } from 'react-native';
import { useNavigation,  } from '@react-navigation/native';
import { baseUrl } from '../assets/js/config';

import axios from 'axios';


const LoginScreen = () => {
    const navigation = useNavigation();
    const closeSession = async () => {
        let resp = await axios.post(baseUrl+'?p=out&APP-REQUEST=1');
        navigation.reset({index: 0, routes: [{name: 'Login'}]})
    };
    return (
        <View style={{flex: 1}}>
            <View style={{flexGrow: 1}}>
                <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>Bienvenido al sistema</Text>
                <Image source={require('../assets/rotario_logo.jpg')}/>
            </View>
            <View style={{flexGrow: 1,justifyContent: 'space-around'}}>
                <Button title="Ir a Perfil" onPress={() => navigation.navigate('Perfil')} />
                <Button title='Ir a Registro' onPress={() => navigation.navigate('Registro')} />
                <Button title="Log out" onPress={closeSession } />
            </View>
        </View>
    );
};

export default LoginScreen;
