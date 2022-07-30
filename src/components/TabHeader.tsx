import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import { memo } from "react";
import { TouchableOpacity } from "react-native";
import { ICON } from "../assets/icons";
import { useNavigation } from "@react-navigation/native";


interface Props {
  title: string;

}

export const TabHeader: React.FC<Props> = memo((props: Props,) => {
  const navigation = useNavigation()
  const { title} = props;

  const OnpressAddContact=()=> {
    // @ts-ignore
    navigation.navigate("AddEditContactScreen", {
      item: {
        key: "",
        value: "",
        lastName: "",
        position: "",
        company: "",
        phones: [],
        emails: [],
        addresses: [],
        birthday: [],
        avatar: ""
      }
    })
  };
  return (
    <HeaderView>
      <TouchableOpacity
        onPress={()=>{ // @ts-ignore
          navigation.openDrawer()}
        }>
        <MenuImage source={ICON.MoreIc} />
      </TouchableOpacity>
      <HeaderText>{title}</HeaderText>
      <TouchableOpacity
        onPress={OnpressAddContact}>
        <CamImage source={ICON.CamIc} />
      </TouchableOpacity>
    </HeaderView>
  );

});
const HeaderView = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  

`;
const MenuImage = styled.Image`
  margin-left: 10px;
`;
const CamImage = styled.Image`
  margin-right: 10px;
`;
const HeaderText = styled.Text`
  left: 0;
  font-size: 24px;
  font-weight: 500;
  color: #333333;
`;
