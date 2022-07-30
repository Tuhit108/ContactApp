import * as React from "react";
import LoginScreen from "./Screens/LoginScreen";
import ContactDetailScreen from "./Screens/ContactDetailScreen";
import AddEditContactScreen from "./Screens/AddEditContactScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// @ts-ignore
import styled from "styled-components/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import DrawerScreen from "./Screens/DrawerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ContactList from "./components/ContactList";
import HistoryList from "./components/HistoryList";
import { ICON } from "./assets/icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const windowHeight = Dimensions.get("window").height;
const ContainerView = styled.View`
  height: ${windowHeight}px;
`;
const TabBarView = styled.View<{ focused: boolean }>`
  align-items: center;
  opacity: ${(props: any) => (props.focused ? 1 : 0.5)};
`;
const TabBarText = styled.Text`
  font-size: 10px;
  color: #FFFFFF;
  margin-top: 8px
`;
const ContactImg = styled.Image`

`;
const ClockImg = styled.Image``;
const HomeStack: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F2A54A",
          height: 44 + getStatusBarHeight()
        }
      }}
      initialRouteName="ContactList">

      <Tab.Screen
        name="ContactList"
        component={ContactList}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarView focused={focused}>
              <ContactImg source={ICON.CONTACT_IC}></ContactImg>
              <TabBarText>Danh bạ</TabBarText>
            </TabBarView>
          )
        }}
      />
      <Tab.Screen
        name="HistoryList"
        component={HistoryList}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarView focused={focused}>
              <ClockImg source={ICON.CLOCK_IC}></ClockImg>
              <TabBarText> Gần đây</TabBarText>
            </TabBarView>
          )
        }}
      />
    </Tab.Navigator>

  );
};
const MenuDrawerStack: React.FC = () => {

  return (
    <ContainerView>
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          drawerType: "front"
        }} useLegacyImplementation
        // @ts-ignore
        drawerContent={(props) => <DrawerScreen {...props} />}>
        <Drawer.Screen name="HomeSceen" component={HomeStack} />
      </Drawer.Navigator>
    </ContainerView>
  );
};
const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="LoginScreen"
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeStack} />
        <Stack.Screen name="MenuDrawerScreen" component={MenuDrawerStack} />
        <Stack.Screen name="ContactDetailScreen" component={ContactDetailScreen} />
        <Stack.Screen name="AddEditContactScreen" component={AddEditContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
