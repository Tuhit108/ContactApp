import * as React from "react";
import styled from "styled-components/native";
import { memo, useCallback } from "react";
import { Linking, TouchableOpacity } from "react-native";

interface Props {
  title: string;
  list: string[];
}

export const ShowInfo= memo((props: Props) => {
  const { list, title } = props;
  const onPressItem = useCallback((item: any) => {
    if (title === "Phones") {
      Linking.openURL(`tel:${item}`);
    }
    if (title === "Emails") {
      Linking.openURL(`mailto:${item}`);
    }
  },[title])

  return (
    <UserContactView>
      <UserContactBabel> {title}</UserContactBabel>{
      list?.length > 0 ?
        list?.map((item: any, index: number) => (
          <TouchableOpacity key={index} onPress = {onPressItem}>
            <UserContactText> {item}</UserContactText>
          </TouchableOpacity>))
        : (<InfoEmptyText> Empty </InfoEmptyText>)}
    </UserContactView>
  );
});
const UserContactView = styled.View`
  min-height: 64px;
  width: 92%;
  justify-content: center;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
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
const InfoEmptyText = styled(UserContactText)`
  color: #828282;
`


