import * as React from "react";


// @ts-ignore
import styled from "styled-components/native";
import { memo, useCallback, useState } from "react";
import {

  Linking,


  Dimensions
} from "react-native";
import { CutomModal } from "./Modal";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

interface ItemProps {
  title: string;
  itemIcon: any;
  list: string[];
  link: string;

}

export const ActionItem: React.FC<ItemProps> = memo((props: ItemProps) => {
  const { list, title, itemIcon, link } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const ActionItemOnpress =useCallback( () => {
    if (list.length > 1) {
      setModalVisible(!modalVisible);
    } else {
      Linking.openURL(`${link}:${list[0]}`);
    }

  },[]);
  return (
    <>
      <CutomModal itemIcon={itemIcon} list={list} link={link} visible={modalVisible}
                  setModalVisible={setModalVisible} />
      {list.length > 0 ? (<ActionItemView>
        <ItemViewAtive onPress={ActionItemOnpress}>
          <ActionIc source={itemIcon} />
        </ItemViewAtive>
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
const ItemViewAtive = styled.TouchableOpacity`
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
const CloseModalView = styled.View`
  height: ${windowHeight}px;
  width: ${windowWidth}px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`;
const ModalView = styled.View`
  justify-content: center;
  align-items: center;

  height: ${windowHeight}px;
`;
const ListModalView = styled.View`
  position: relative;
  z-index: 2;
  background-color: #ffffff;
  width: 90%;
  max-height: 250px;
  border-width: 1px;
  border-color: #F2A54A;
  border-radius: 10px;
`;
const ListItemView = styled.ScrollView`

`;
const TouchItem = styled.TouchableOpacity`
  flex-direction: row;
  height: 44px;
  align-items: center;



`;
const ListItem = styled.Text`
  line-height: 20px;
  margin: 8px;
  font-size: 16px;

`;
const ListItemIcon = styled.Image`
  width: 20px;
  height: 20px;
  tint-color: #F2A54A;

  margin-top: 8px;
  margin-left: 10px;
  margin-bottom: 8px;
`;






