import * as React from "react";
import { memo, useCallback } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { navigateToAddEditContactScreen, openDrawer } from "@/utils/navigation";
import { IC_CAMERA, IC_MENU } from "@/assets";

interface Props {
  title: string;
}

export const TabHeader = memo((props: Props) => {

  const { title } = props;
  const onPressAddContact = useCallback(() => {
    navigateToAddEditContactScreen( { id: "" });
  }, []);

  return (
    <HeaderView>
      <TouchableOpacity
        onPress={openDrawer}>
        <MenuImage source={IC_MENU} />
      </TouchableOpacity>
      <HeaderText>{title}</HeaderText>
      <TouchableOpacity
        onPress={onPressAddContact}>
        <CameraImage source={IC_CAMERA} />
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
