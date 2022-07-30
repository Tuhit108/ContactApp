import * as React from "react";


// @ts-ignore
import styled from "styled-components/native";
import { memo } from "react";
import {

  Linking,
  Modal,
  TouchableWithoutFeedback,
  Dimensions
} from "react-native";

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

interface ItemProps {

  itemIcon: any;
  list: string[];
  link: string;
  visible: boolean;
  setModalVisible: (prev: any) => void;

}

export const CutomModal: React.FC<ItemProps> = memo((props: ItemProps) => {
  const { list, itemIcon, link, visible, setModalVisible } = props;
  return (
    <>
      <Modal
        animationType="none"
        transparent={true}
        visible={visible}
      >
        <ModalView>
          <ListModalView>
            <ListItemView>
              {list.map((item: any, index: number) => (
                <TouchItem
                  key={index}
                  onPress={() => Linking.openURL(`${link}:${item}`)}>
                  <ListItemIcon source={itemIcon} />
                  <ListItem> {item} </ListItem>
                </TouchItem>
              ))}
            </ListItemView>
          </ListModalView>
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <CloseModalView></CloseModalView>
          </TouchableWithoutFeedback>
        </ModalView>
      </Modal>

    </>
  );

});

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
  background-color: #33333370;

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






