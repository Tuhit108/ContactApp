import 'react-native-gesture-handler';
import * as React from 'react';
import {SafeAreaView, View} from 'react-native';
import LoginScreen from "./src/Screens/LoginScreen";
import BaseScreen  from "./src/Screens/BaseScreen";
import UserScreen from './src/Screens/UserScreen';
import NewContactScreen from './src/Screens/NewContactScreen';
import EditUserScreen from "./src/Screens/EditUserScreen";
import {NavigationContainer} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { statusBarHeight } from "./src/themes/styles";
// @ts-ignore
import styled from 'styled-components/native';
const Container = styled.View`
  flex: 1;
  background-color: #ffffff;


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
       <Stack.Screen name="UserScreen" component={UserScreen}/>
         <Stack.Screen name="NewContactScreen" component={NewContactScreen}/>
         <Stack.Screen name="EditUser" component={EditUserScreen}/>
       </Stack.Navigator>



     </NavigationContainer>


    </Container>
  );
};
export default App;
