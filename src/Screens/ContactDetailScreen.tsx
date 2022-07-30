import * as React from "react";
import { memo, useCallback, useState } from "react";
import { Alert, KeyboardAvoidingView, Linking, Platform, ScrollView, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useAppDispatch } from "../hooks";
import { deleteContact } from "../store/contact/contactSlice";
import { statusBarHeight } from "../themes/styles";

import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";
// @ts-ignore
import styled from "styled-components/native";
import { ShowInfo } from "../components/ShowInfo";
import { ActionItem } from "../components/ActionItem";
import FastImage from "react-native-fast-image";
import { CutomModal } from "../components/Modal";


// @ts-ignore
const ContactDetailScreen: React.FC = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const contactItem = route.params.item;
  const DeleteOnpress = useCallback(() => {
    Alert.alert(
      "Xoá Liên Hệ",
      "Xác Nhận Xoá",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => handleDeleteContact() }
      ]
    );
  }, []);
  const handleDeleteContact = useCallback(() => {
    dispatch(deleteContact({ key: contactItem.key }));
    navigation.navigate("MenuDrawerScreen");
  }, []);

  const [modalVisible, setModalVisible] = useState(false);
  const ActionItemOnpress = useCallback(() => {
    if (contactItem.phones.length > 1) {
      setModalVisible(!modalVisible);
    } else {
      Linking.openURL(`sms:${contactItem.phones[0]}`);
    }

  }, []);
  //
  return (
    <ContainerView behavior={Platform.OS == "ios" ? "padding" : null}>
      <Section01View>
        <TouchableOpacity onPress={() => {
          navigation.navigate("MenuDrawerScreen");
        }}>
          <BackIconImage source={ICON.BackIc} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate("AddEditContactScreen", {
            item: contactItem
          });
        }}>
          <EditContactText>Sửa</EditContactText>
        </TouchableOpacity>
      </Section01View>
      <ScrollView>
        <Section02View>
          <AvatarView>
            <AvatarBackground
              source={IMAGE.EmptyAvatar}
              resizeMode="cover"
            >
              <AvatarImage source={{ uri: contactItem.avatar }} />
            </AvatarBackground>

          </AvatarView>
          <ContactnameText>{contactItem.value + " " + contactItem.lastName}</ContactnameText>
          <ContactPositionText>{contactItem.company}</ContactPositionText>
          <ActionView>
            <ActionItem
              title="Nhấn gọi điện"
              list={contactItem.phones}
              itemIcon={ICON.CallIc}
              link="tel"
            />
            <ActionItem
              title="Nhắn tin"
              list={contactItem.phones}
              itemIcon={ICON.ChatIc}
              link="sms"
            />
            <ActionItem
              title="Facetime"
              list={contactItem.phones}
              itemIcon={ICON.FacetimeIc}
              link="tel"
            />
            <ActionItem
              title="Gửi mail"
              list={contactItem.emails}
              itemIcon={ICON.EmailIc}
              link="mailto"
            />

          </ActionView>

        </Section02View>

        <Section03View>
          <ShowInfo
            title="Phones"
            list={contactItem.phones}
          />
          <ShowInfo
            title="Emails"
            list={contactItem.emails}
          />
          <ShowInfo
            title="Addresses"
            list={contactItem.addresses}
          />
          <ShowInfo
            title="Birthday"
            list={contactItem.birthday}
          />
          <ContactContactView>
            <ContactContactBabel> Ghi chú</ContactContactBabel>
            <ContactContactText> </ContactContactText>
          </ContactContactView>
          <CutomModal
            itemIcon={ICON.ChatIc}
            list={contactItem.phones}
            link="sms"
            visible={modalVisible}
            setModalVisible={setModalVisible} />
          <ContactActionView onPress={ActionItemOnpress}>
            <ContactChatText> Gửi tin nhắn</ContactChatText>
          </ContactActionView>
          <ContactActionView onPress={DeleteOnpress}>

            <ContactDeleteText> Xoá người gọi</ContactDeleteText>
          </ContactActionView>

        </Section03View>
      </ScrollView>
    </ContainerView>
  );
};
const ContainerView = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: #ffffff;
`;

const Section01View = styled.View`
  flex-direction: row;
  height: ${statusBarHeight + 60}px;
  justify-content: space-between;
  align-items: center;
  background-color: #FEFBF6;
  padding-top: ${statusBarHeight}px;
`;


const BackIconImage = styled.Image`
  margin-left: 16px;
`;
const EditContactText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #F2A54A;
  margin-right: 16px;
`;
const Section02View = styled.View`
  align-items: center;
  background-color: #FEFBF6;
`;
const AvatarView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;

  margin-bottom: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
const AvatarBackground = styled.ImageBackground`
          width: 80px;
          height: 80px;
          justify-content: center;
          align-items: center;
  `
;
const AvatarImage = styled(FastImage)`
  width: 100px;
  height: 100px;
  border-radius: 50px;

`;

const ContactnameText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;

  letter-spacing: -0.41px;
  color: #333333;
`;
const ActionView = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const ContactPositionText = styled.Text`
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #828282;
`;
const Section03View = styled.View`
  align-items: center;
  padding-bottom: ${getStatusBarHeight()}px;

`;
const ContactContactView = styled.View`

  min-height: 64px;
  width: 92%;
  justify-content: center;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 1px;

`;
const ContactContactBabel = styled.Text`
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
  margin-top: 9px;
  margin-bottom: 3px;
`;
const ContactContactText = styled.Text`
  flex-direction: row;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 6px;
  color: #2F80ED;
`;
const ContactActionView = styled.TouchableOpacity`
  height: 44px;
  width: 92%;
  justify-content: center;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
`;
const ContactChatText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
`;
const ContactDeleteText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #FF4A4A;
`;
export default memo(ContactDetailScreen);
