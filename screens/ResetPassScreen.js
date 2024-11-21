import { View, Text, StyleSheet, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Finput from '../components/Finput';
import { useState } from 'react';
import { useValidatePassword} from '../assets/js/validaciones';

export default ResetPassScreen = () => {
	const navigation = useNavigation();
	const [email, setEmail] = useState('');// me equivoque de poner la contraseña XD
	const emailError = useValidatePassword(email); // por estar haciendo las cosas en automatico
	const [confirmEmail, setconfirmEmail] = useState('');
	const confirmemailError = useValidatePassword(confirmEmail); // solo cambiare los hooks
	const [sending, setSending] = useState(false);

	const handleLogin = async () => {
		return new Promise(async (resolve, reject) => {
			if(sending){
					return;
				}
			else {
				setSending(true);
			}
			
			if(email=="" || confirmEmail==""){
				reject("campos vacios");
				return;
			}

			if(emailError || confirmemailError){
                reject((emailError ? emailError : confirmemailError));
                return;
            }

			if(email != confirmEmail){
				reject("las contraseñas no coinciden");
				return;
			}

			Alert.alert("","la contraseña fue cambiada con exito (Na mentira XD)",[{text: "OK", onPress: () => {navigation.goBack(); resolve();}}]);

			
		}).catch((err) => Alert.alert("Error de campos",err)).finally(() => setSending(false));
	};

	return (
		<View style={styles.container}>
		<Finput 
			label="Nueva contraseña" 
			placeholder="Escribe tu contraseña" 
			span={((emailError && email != "") ? emailError : "")}
			input={{value: email, onChangeText: setEmail, secureTextEntry: true}}

		/>
		<Finput 
			label="Confirmar contraseña" 
			placeholder="Escribe tu contraseña" 
			span={((confirmemailError && confirmEmail != "") ? confirmemailError : "")}
			input={{value: confirmEmail, onChangeText: setconfirmEmail, secureTextEntry: true}}


		/>
		<Button title="Cambiar contraseña" onPress={handleLogin} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});