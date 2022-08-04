import * as React from "react";
import { memo, useCallback, useState } from "react";
import styled from "styled-components/native";
import { Linking } from "react-native";
import { CustomModal } from "./CustomModal";

interface ItemProps {
  title: string;
  itemIcon: any;
  list: string[];
  link: string;
}

export const ActionItem = memo((props: ItemProps) => {
  const { list, title, itemIcon, link } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const actionItemOnPress = useCallback(() => {
    if (list?.length > 1) {
      setModalVisible(!modalVisible);
    } else {
      Linking.openURL(`${link}:${list[0]}`);
    }
  }, [list,link,modalVisible]);
  return (
    <>
      <CustomModal itemIcon={itemIcon} list={list} link={link} visible={modalVisible}
                   setModalVisible={setModalVisible} />
      {list?.length > 0 ? (<ActionItemView>
        <ItemViewActive onPress={actionItemOnPress}>
          <ActionIc source={itemIcon} />
        </ItemViewActive>
        <ActionText>{title}</ActionText>
      </ActionItemView>) : (<ActionItemView>
        <ItemViewNone>
          <DisableIc source={itemIcon} />
        </ItemViewNone>
        <ActionDisableText>{title}</ActionDisableText>
      </ActionItemView>)
      }
    </>
  );

});

const ActionItemView = styled.View`
  align-items: center;
  width: 25%;
`;
const ActionText = styled.Text`
  font-size: 11px;
  font-weight: 400;
  color: #F2A54A;
  line-height: 22px;
  margin-top: 4px;
`;
const ActionDisableText = styled.Text`
  font-size: 11px;
  font-weight: 400;
  color: #BDBDBD;
  line-height: 22px;
  margin-top: 4px;
`;
const ItemViewActive = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #F2A54A;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
const ItemViewNone = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #BDBDBD;
  background-color: #fff;
`;

const ActionIc = styled.Image`
  tint-color: #FFFFFF
`;
const DisableIc = styled.Image`
  tint-color: #BDBDBD
`;







