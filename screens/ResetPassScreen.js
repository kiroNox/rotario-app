import { View, Text, StyleSheet, Button, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Finput from '../components/Finput';
export default ResetPassScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Finput label="Nueva contraseña" placeholder="Escribe tu contraseña" />
        <Finput label="Confirmar contraseña" placeholder="Escribe tu contraseña" />
        <Button title="Cambiar contraseña" onPress={() => {
            Alert.alert("","la contraseña fue cambiada con exito (Na mentira XD)",[{text: "OK", onPress: () => navigation.goBack()}]);
        }} />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });