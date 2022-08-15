import * as React from "react";
import LoginScreen from "./screens/Login/LoginScreen";
import ContactDetailScreen from "./screens/Contact/ContactDetailScreen";
import AddEditContactScreen from "./screens/Contact/AddEditContactScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Dimensions } from "react-native";
import DrawerScreen from "./screens/Drawer/DrawerScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getStatusBarHeight } from "react-native-status-bar-height";
import ContactScreen from "./screens/Contact/ContactScreen";
import HistoryScreen from "./screens/HistoryScreen";
import { memo, useCallback } from "react";
import {  navigationRef } from "./utils/navigation";
import { createStackNavigator } from "@react-navigation/stack";
import { IC_CLOCK, IC_CONTACT } from "./assets";



const MainStack = createStackNavigator();
const TabStack = createBottomTabNavigator();
const DrawerStack = createDrawerNavigator();
const RootStack = createNativeStackNavigator();


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
const TabStackComponent = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#F2A54A",
          height: 44 + getStatusBarHeight()
        }
      }}
      initialRouteName="ContactScreen">
      <TabStack.Screen
        name="ContactScreen"
        component={ContactScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarView focused={focused}>
              <ContactImg source={IC_CONTACT}></ContactImg>
              <TabBarText>Danh bạ</TabBarText>
            </TabBarView>
          )
        }}
      />
      <TabStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarView focused={focused}>
              <ClockImg source={IC_CLOCK}></ClockImg>
              <TabBarText> Gần đây</TabBarText>
            </TabBarView>
          )
        }}
      />
    </TabStack.Navigator>

  );
};
const DrawerStackComponent = () => {

  return (
    <ContainerView>
      <DrawerStack.Navigator
        initialRouteName="TabNavigation"
        screenOptions={{
          headerShown: false,
          drawerType: "front",
          swipeEdgeWidth: 0
        }} useLegacyImplementation
        // @ts-ignore
        drawerContent={(props) => <DrawerScreen {...props} />}>
        <DrawerStack.Screen name="TabNavigation" component={TabStackComponent} />
      </DrawerStack.Navigator>
    </ContainerView>
  );
};
const MainStackComponent = memo(function MainStackComponent() {
  return (
    <MainStack.Navigator
      screenOptions={{
      headerShown:false}}
      initialRouteName="Drawer"
    >
      <MainStack.Screen name="Drawer" component={DrawerStackComponent} />
      <MainStack.Screen name="ContactDetailScreen" component={ContactDetailScreen} />
      <MainStack.Screen name="AddEditContactScreen" component={AddEditContactScreen} />
    </MainStack.Navigator>
  );
});
const Routes =memo(function Routes ()  {
  const routeNameRef = React.useRef<string>('');
  const onStateChange = useCallback(() => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
    if (currentRouteName && previousRouteName !== currentRouteName) {
      routeNameRef.current = currentRouteName;
    }
  }, []);
  return (
    <NavigationContainer  ref={navigationRef} onStateChange={onStateChange}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="LoginScreen"
      >
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />

        <RootStack.Screen name="MainNavigation" component={MainStackComponent} />

      </RootStack.Navigator>
    </NavigationContainer>
  );
});
export default Routes;
