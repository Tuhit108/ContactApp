import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContactScreen from "./ContactScreen";
import MenuDrawer from "./MenuDrawer";
const Drawer = createDrawerNavigator();
const Text = styled.Text`
  
`;
const BaseScreen: React.FC = () => {

    return (
      <Drawer.Navigator initialRouteName="Home"  screenOptions={{
        headerShown: false,
        drawerType: "front"

      }}  useLegacyImplementation

          // @ts-ignore
                        drawerContent={(props) => <MenuDrawer {...props} />}>
        <Drawer.Screen name="Home" component={ContactScreen} />
      </Drawer.Navigator>
  );
};
export default BaseScreen;
