import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar} from "react-native";
import {Provider} from 'react-redux';
import {store} from './src/store'

import Router from "./src/Router"



import SplashScreen from 'react-native-splash-screen'
// @ts-ignore
import styled from 'styled-components/native';
import { useEffect } from "react";
const Container = styled.View`
  flex: 1;
  background-color: #ffffff;


`;

const App: React.FC = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
    <Provider store={store}>
    <Container>
      <StatusBar
        translucent={true}
        //Bo header trong phien ban Android
        backgroundColor='transparent'
        barStyle='dark-content'
      />
     <Router/>
    </Container>
</Provider>
  );
};
export default App;
