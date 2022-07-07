import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import ContactTab from "../components/ContactTab";
import HistoryTab from "../components/HistoryTab";
import  { ICON } from "../assets/icons";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
const Text = styled.Text`
  
`;
const View = styled.View`
  
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
            height: '10%',
          },
        }}
        initialRouteName='History'>
        
        <Tab.Screen
          name="Contact"
          component={ContactTab}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 30,
                  paddingBottom: 30,
                }}>
                    <ContactImg source={ICON.CONTACT_IC}></ContactImg>
                <Text style={{fontSize: 10, color: '#FFFFFF'}}> Danh bạ</Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryTab}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  alignItems: 'center',
                  paddingTop: 30,
                  paddingBottom: 30,
                }}>
                    <ClockImg source={ICON.CLOCK_IC}></ClockImg>
                <Text style={{fontSize: 10, color: '#FFFFFF'}}> Gần đây</Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
  );
};
export default ContactScreen;
