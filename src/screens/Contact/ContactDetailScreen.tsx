import * as React from "react";
import { memo, useCallback, useMemo, useState } from "react";
import { Alert, KeyboardAvoidingView, Linking, Platform, ScrollView, TouchableOpacity } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { statusBarHeight } from "@/themes/styles";
import styled from "styled-components/native";
import { ShowInfo } from "@/components/ShowInfo";
import { ActionItem } from "@/components/ActionItem";
import FastImage from "react-native-fast-image";
import { CustomModal } from "@/components/CustomModal";
import { useContact } from "@/store/contact";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { DetailScreenProps, RawContact } from "@/types";
import {
  goBack,
  navigateToAddEditContactScreen,
  replaceWithMainScreen
} from "@/utils/navigation";
import { removeContact } from "@/store/contact";
import { IC_BACK, IC_CALL, IC_EMAIL, IC_FACETIME, IC_MESSAGE, IMG_DEFAULT_AVATAR } from "@/assets";

const ContactDetailScreen = () => {
  const params = useNavigationParams<DetailScreenProps>()
  const [modalVisible, setModalVisible] = useState(false);
  const contactId = useMemo(() => {
    return params?.id || '';
  }, [params]);

  const contact: RawContact = useContact(contactId);

  const handleDeleteContact = useCallback(() => {
    replaceWithMainScreen();
    removeContact(contactId);
  }, [contactId]);

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
  }, [handleDeleteContact]);

  const sendMessageOnPress = useCallback(() => {
    if (contact?.phones.length > 1) {
      setModalVisible(!modalVisible);
    } else if (contact?.phones.length == 1) {
      Linking.openURL(`sms:${contact?.phones[0]}`);
    }
  }, [contact, modalVisible]);

  const onEditContact = useCallback(() => {
    navigateToAddEditContactScreen({
      id: contactId
    });
  }, [contactId]);



  return (
    <ContainerView behavior={Platform.OS == "ios" ? "padding" : undefined}>
      <UnderView/>
      <Section01View>
        <TouchableOpacity onPress={goBack}>
          <IC_BACKonImage source={IC_BACK} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onEditContact}>
          <EditContactText>Sửa</EditContactText>
        </TouchableOpacity>
      </Section01View>
      <ScrollView>
        <Section02View>
          <AvatarView>
            <AvatarBackground
              source={IMG_DEFAULT_AVATAR}
              resizeMode="cover"
            >
              <AvatarImage source={{ uri: contact.avatar }} />
            </AvatarBackground>
          </AvatarView>
          <ContactNameText>{contact.firstName + " " + contact.lastName}</ContactNameText>
          <ContactPositionText>{contact.company}</ContactPositionText>
          <ActionView>
            <ActionItem
              title="Nhấn gọi điện"
              list={contact.phones}
              itemIcon={IC_CALL}
              link="tel"
            />
            <ActionItem
              title="Nhắn tin"
              list={contact.phones}
              itemIcon={IC_MESSAGE}
              link="sms"
            />
            <ActionItem
              title="Facetime"
              list={contact.phones}
              itemIcon={IC_FACETIME}
              link="tel"
            />
            <ActionItem
              title="Gửi mail"
              list={contact.emails}
              itemIcon={IC_EMAIL}
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
            itemIcon={IC_MESSAGE}
            list={contact.phones}
            link="sms"
            visible={modalVisible}
            setModalVisible={setModalVisible} />
          <ContactActionView onPress={sendMessageOnPress}>
            <ContactChatText> Gửi tin nhắn</ContactChatText>
          </ContactActionView>
          <ContactActionView onPress={ onDeleteOnPress }>
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
const IC_BACKonImage = styled.Image`
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
const ContactNameText = styled.Text`
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
