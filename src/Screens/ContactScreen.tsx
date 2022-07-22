import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import ContactTab from "../components/ContactTab";
import HistoryTab from "../components/HistoryTab";
import  { ICON } from "../assets/icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { KeyboardAvoidingView, Platform } from "react-native";
import { memo } from "react";
const Tab = createBottomTabNavigator();

const TabBarView = styled.View<{focused : boolean}>`
  align-items: center;
  opacity: ${(props:any) => (props.focused ? 1 : 0.5)};
`;
const TabBarText = styled.Text`
  font-size: 10px;
  color: #FFFFFF;
  margin-top: 8px
`;
const ContactImg = styled.Image`

`;
const ClockImg = styled.Image``;
const ContactScreen: React.FC = () => {
  return (

    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#F2A54A',
            height: 44+getStatusBarHeight(),
          },
        }}
        initialRouteName='Contact'>

        <Tab.Screen
          name="Contact"
          component={ContactTab}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarView focused={focused}>
                    <ContactImg source={ICON.CONTACT_IC}></ContactImg>
                <TabBarText > Danh bạ</TabBarText>
              </TabBarView>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryTab}
          options={{
            tabBarIcon: ({focused}) => (
              <TabBarView focused={focused}>
                    <ClockImg source={ICON.CLOCK_IC}></ClockImg>
                <TabBarText > Gần đây</TabBarText>
              </TabBarView>
            ),
          }}
        />
      </Tab.Navigator>

  );
};
export default memo(ContactScreen);
