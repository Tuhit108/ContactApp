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
const contacts = [
  {id: 1, name: 'Nguyễn Tiến Nam', phone: '0327942405', time: 'Hôm nay'},
  {id: 2, name: 'Vũ Mạnh Linh', phone: '0327942405', time: 'Hôm nay'},
  {id: 3, name: 'Trần Thái Hà', phone: '0327942405', time: 'Hôm nay'},
  {id: 4, name: 'Lê Ngọc Linh', phone: '0327942405', time: 'Hôm nay'},
  {id: 5, name: 'Trần Kiều Vân', phone: '0327942405', time: 'Hôm nay'},
  {id: 6, name: 'Kiều Vân Anh', phone: '0327942405', time: 'Hôm nay'},
  {id: 7, name: 'Thái Thùy Linh', phone: '0327942405', time: 'Hôm nay'},
  {id: 8, name: 'Nguyễn Nam Tuấn', phone: '0327942405', time: 'Hôm nay'},
  {id: 9, name: 'Bùi Trọng Tùng', phone: '0327942405', time: 'Hôm nay'},
  {id: 10, name: 'Bùi Trọng Tùng', phone: '0327942405', time: 'Hôm nay'},
  {id: 11, name: 'Bùi Trọng Tùs', phone: '0327942405', time: 'Hôm nay'},
  {id: 12, name: 'Bùi Trọng T', phone: '0327942405', time: 'Hôm nay'},
];
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
