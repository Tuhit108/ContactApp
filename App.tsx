import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import LoginScreen from './src/Screens/LoginScreen';
import BaseScreen  from "./src/Screens/BaseScreen";
import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
// @ts-ignore
import styled from 'styled-components/native';
const Container = styled.SafeAreaView`
  flex: 1;
`;
const Stack = createNativeStackNavigator();
const App: React.FC = () => {
  return (
    <Container>
     <NavigationContainer>
       <Stack.Navigator screenOptions={{
        headerShown: false,
       }}
       initialRouteName='Login'
       >
       <Stack.Screen  name="Login" component={LoginScreen} />
       <Stack.Screen  name="BaseScreen" component={BaseScreen} />
       </Stack.Navigator>



     </NavigationContainer>


    </Container>
  );
};
export default App;
