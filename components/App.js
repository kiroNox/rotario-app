import { Text, SafeAreaView,View, StyleSheet, Image } from 'react-native';
import Button from './components/Button';
import { Provider } from 'react-redux';
import store from './assets/js/store';
// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import Finput from './components/Finput';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>

      <Image style={styles.logo} source={require('./assets/rotario_logo.jpg')} />
        
        <View style={styles.card}>
          <Finput label="correo" placeholder="Escribe tu usuario" name="correo" formid="login"/>
          <Finput label="Contraseña" placeholder="Escribe tu contraseña" name="password" formid="login" />
        </View>
          <Button value="Log in" />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    padding: 10 
  }
  ,logo: {
    height: 200,
    width: 200,
    alignSelf: 'center'
  }
});
