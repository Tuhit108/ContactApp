import * as React from "react";
import { Dimensions } from "react-native";
// @ts-ignore
import styled from "styled-components/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ContactScreen from "./ContactScreen";
import MenuDrawer from "./MenuDrawer";
import { KeyboardAvoidingView, Platform } from "react-native";
import { memo } from "react";

const Drawer = createDrawerNavigator();
const windowHeight = Dimensions.get("window").height;
const ContainerView = styled.View`
  height: ${windowHeight}px;

`;

const BaseScreen: React.FC = () => {

  return (
    <ContainerView>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false,
        drawerType: "front"

      }} useLegacyImplementation

        // @ts-ignore
                        drawerContent={(props) => <MenuDrawer {...props} />}>
        <Drawer.Screen name="Home" component={ContactScreen} />
      </Drawer.Navigator>
    </ContainerView>

  );
};
export default memo(BaseScreen);
