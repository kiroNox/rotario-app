import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import ResetPassScreen from './screens/ResetPassScreen';
import PerfilScreen from './screens/PerfilScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();


function App_old() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Home" component={HomeScreen}  />
            <Stack.Screen name="Perfil" component={PerfilScreen} />
            <Stack.Screen name="ResetPass" component={ResetPassScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
