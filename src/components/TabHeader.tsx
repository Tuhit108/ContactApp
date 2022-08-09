import * as React from "react";
import { memo, useCallback } from "react";
// @ts-ignore
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ICON } from "../assets/icons";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
}

export const TabHeader = memo((props: Props) => {
  const navigation = useNavigation<any>();
  const { title } = props;
  const onPressAddContact = useCallback(() => {
    navigation.navigate("AddEditContactScreen", { id: "" });
  }, []);
  const onOpenDrawer = useCallback(() => {navigation.openDrawer()},[])
  return (
    <HeaderView>
      <TouchableOpacity
        onPress={onOpenDrawer}>
        <MenuImage source={ICON.MENU_IC} />
      </TouchableOpacity>
      <HeaderText>{title}</HeaderText>
      <TouchableOpacity
        onPress={onPressAddContact}>
        <CameraImage source={ICON.CAMERA_ICON} />
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
  height: 24px;
  width: 24px;
  margin: 18px 18px 18px 10px;
`;
const CameraImage = styled.Image`
  margin: 18px 10px 18px 18px;
`;
const HeaderText = styled.Text`
  left: 0;
  font-size: 24px;
  font-weight: 500;
  color: #333333;
`;
