import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";


// @ts-ignore
import styled from "styled-components/native";
import { useState } from "react";

interface Props {
  title :string;
  list: string[];
}

export const ShowInfo: React.FC<Props> = (props: Props) => {
  const {list,title}=props

  return (
    <UserContactView>
      <UserContactBabel> {title}</UserContactBabel>{
      list.length>0 ?
        list.map((item: any) => (<UserContactText> {item}</UserContactText>))
        :(<UserContactText> empty </UserContactText>)}
    </UserContactView>
  );

};
const UserContactView = styled.View`

min-height: 64px;
  width: 92%;
  justify-content: center;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
  
`;
const UserContactBabel = styled.Text`
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
  margin-top: 9px;
  margin-bottom: 3px;
`;
const UserContactText = styled.Text`
  flex-direction: row;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 6px;
  color: #2F80ED;
`;
