import * as React from "react";
import { memo, useCallback, useMemo, useState } from "react";
import { Alert, KeyboardAvoidingView, Linking, Platform, ScrollView, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useAppDispatch } from "../hooks";
import { deleteContact } from "../store/contact/contactSlice";
import { statusBarHeight } from "../themes/styles";
import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";
import styled from "styled-components/native";
import { ShowInfo } from "../components/ShowInfo";
import { ActionItem } from "../components/ActionItem";
import FastImage from "react-native-fast-image";
import { CustomModal } from "../components/CustomModal";
import { useContact } from "../store";

const ContactDetailScreen = ({ navigation, route } :any) => {
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const contactId = useMemo(() => {
    return route?.params?.id || '';
  }, [route]);
  const contact = useContact(contactId);
  const onDeleteOnPress = useCallback(() => {
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
    navigation.navigate("MenuDrawerScreen");
    dispatch(deleteContact({ id: contact.id }));
  }, [contact]);

  const ActionItemOnPress = useCallback(() => {
    if (contact.phones.length > 1) {
      setModalVisible(!modalVisible);
    } else if (contact.phones.length == 1) {
      Linking.openURL(`sms:${contact.phones[0]}`);
    }
  }, [contact, modalVisible]);

  const onEditContact = useCallback(() => {
    navigation.navigate("AddEditContactScreen", {
      id: contactId
    });
  }, [contactId]);
  const onBack = useCallback(() => {
    navigation.navigate("MenuDrawerScreen");
  },[navigation])
  return (
    <ContainerView behavior={Platform.OS == "ios" ? "padding" : undefined}>
      <UnderView />
      <Section01View>
        <TouchableOpacity onPress={onBack}>
          <BackIconImage source={ICON.BackIc} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEditContact}>
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
              <AvatarImage source={{ uri: contact.avatar }} />
            </AvatarBackground>
          </AvatarView>
          <ContactnameText>{contact.firstName + " " + contact.lastName}</ContactnameText>
          <ContactPositionText>{contact.company}</ContactPositionText>
          <ActionView>
            <ActionItem
              title="Nhấn gọi điện"
              list={contact.phones}
              itemIcon={ICON.CallIc}
              link="tel"
            />
            <ActionItem
              title="Nhắn tin"
              list={contact.phones}
              itemIcon={ICON.ChatIc}
              link="sms"
            />
            <ActionItem
              title="Facetime"
              list={contact.phones}
              itemIcon={ICON.FacetimeIc}
              link="tel"
            />
            <ActionItem
              title="Gửi mail"
              list={contact.emails}
              itemIcon={ICON.EmailIc}
              link="mailto"
            />
          </ActionView>
        </Section02View>
        <Section03View>
          <ShowInfo
            title="Phones"
            list={contact.phones}
          />
          <ShowInfo
            title="Emails"
            list={contact.emails}
          />
          <ShowInfo
            title="Addresses"
            list={contact.addresses}
          />
          <ShowInfo
            title="Birthday"
            list={contact.birthday}
          />
          <ContactContactView>
            <ContactContactBabel> Ghi chú</ContactContactBabel>
            <ContactContactText> </ContactContactText>
          </ContactContactView>
          <CustomModal
            itemIcon={ICON.ChatIc}
            list={contact.phones}
            link="sms"
            visible={modalVisible}
            setModalVisible={setModalVisible} />
          <ContactActionView onPress={ActionItemOnPress}>
            <ContactChatText> Gửi tin nhắn</ContactChatText>
          </ContactActionView>
          <ContactActionView onPress={onDeleteOnPress}>
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
  margin: 16px;
`;
const EditContactText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #F2A54A;
  margin: 16px;
`;
const UnderView = styled.View`
  height: 45%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: #FEFBF6;
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
  `;
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
  background-color: white;
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
