import React, { memo, useCallback, useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import ImagePicker from "react-native-image-crop-picker";
import { InputList } from "@/components/InputList";
import FastImage from "react-native-fast-image";
import {  useContact } from "@/store/contact";
import { statusBarHeight } from "@/themes/styles";
import moment from "moment";
import { useNavigationParams } from "@/hooks/useNavigationParams";
import { DetailScreenProps } from "@/types";
import { goBack, navigateToDetailScreen } from "@/utils/navigation";
import { updateContact } from "@/store/contact";
import { IC_ADD_AVATAR, IMG_DEFAULT_AVATAR } from "@/assets";

const ContactDetailScreen = () => {
  const params = useNavigationParams<DetailScreenProps>()
  const contactId = params?.id || "";
  const contact = useContact(contactId)

  const [avatarLink, setAvatar] = useState(contact?.avatar || "");
  const [firstnameText, setFirstNameText] = useState(contact?.firstName || "");
  const [nameText, setNameText] = useState(contact?.lastName || "");
  const [companyText, setCompanyText] = useState(contact?.company || "");
  const [listPhones, setPhones] = useState(contact?.phones || []);
  const [listEmails, setEmails] = useState(contact?.emails || []);
  const [listAddresses, setAddresses] = useState(contact?.addresses || []);
  const [listBirthday, setBirthdays] = useState(contact?.birthday || []);

  const handleEdit = useCallback(() => {
    const submitItem = {
      id: contactId ? contactId : moment().unix().toString(),
      firstName: firstnameText,
      lastName: nameText,
      phones: listPhones.filter((listValue: string) => listValue !== ""),
      position: "",
      emails: listEmails.filter((listValue: string) => listValue !== ""),
      avatar: avatarLink,
      birthday: listBirthday.filter((listValue: string) => listValue !== ""),
      addresses: listAddresses.filter((listValue: string) => listValue !== ""),
      company: companyText
    };
    updateContact([submitItem]);
    goBack();
    navigateToDetailScreen( { id: submitItem.id });
  }, [contactId, firstnameText, nameText, listPhones, listEmails, avatarLink, listBirthday, listAddresses, companyText]);

  const chooseImage = useCallback(() => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true
    }).then(image => {
      setAvatar(image.path);
    });
  }, [avatarLink]);

  return (
    <ContainerView behavior={Platform.OS == "ios" ? "padding" : undefined}>
      <Section01View>
        <TouchableOpacity onPress={goBack}>
          <AvailableText>Hủy</AvailableText>
        </TouchableOpacity>
        {firstnameText?.length > 0 || nameText?.length > 0 ? (
          <TouchableOpacity onPress={handleEdit}>
            <AvailableText>Xong</AvailableText>
          </TouchableOpacity>
        ) : (
          <DisableText>Xong</DisableText>
        )}
      </Section01View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Section02View>
          <AvatarView>
            <AvatarBackground source={IMG_DEFAULT_AVATAR} resizeMode="cover">
              <AvatarImage source={{ uri: avatarLink }} />
            </AvatarBackground>
            <CamImage onPress={chooseImage}>
              <Image source={IC_ADD_AVATAR} />
            </CamImage>
          </AvatarView>
          <ContactTextInput
            onChangeText={setFirstNameText}
            value={firstnameText}
            placeholder="Họ"
          />
          <ContactTextInput
            onChangeText={setNameText}
            value={nameText}
            placeholder="Tên"
          />
          <ContactTextInput
            onChangeText={setCompanyText}
            value={companyText}
            placeholder="Công Ty"
          />
        </Section02View>
        <Section03View>
          <InputList
            title="phone"
            list={listPhones}
            keyboardType="numeric"
            setList={setPhones}
          />
          <InputList
            title="email"
            list={listEmails}
            keyboardType="email-address"
            setList={setEmails}
          />
          <InputList
            title="address"
            list={listAddresses}
            keyboardType="default"
            setList={setAddresses}
          />
          <InputList
            title="birthday"
            list={listBirthday}
            keyboardType="numeric"
            setList={setBirthdays}
          />
        </Section03View>
      </ScrollView>
    </ContainerView>
  );
};
const ContainerView = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${statusBarHeight}px;
`;
const Section01View = styled.View`
  flex-direction: row;
  height: 60px;;
  justify-content: space-between;
  align-items: center;
`;
const AvailableText = styled.Text`
  margin: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #f2a54a;
`;
const DisableText = styled(AvailableText)`
  color: #828282;
`;
const Section02View = styled.View`
  align-items: center;
  margin-bottom: 24px;
`;
const AvatarView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
  margin-top: 24px;
  margin-bottom: 32px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
const AvatarImage = styled(FastImage)`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
const AvatarBackground = styled.ImageBackground`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center`
;
const CamImage = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
`;
const ContactTextInput = styled.TextInput`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  letter-spacing: -0.41px;
  color: #333333;
  height: 44px;
  width: 92%;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
`;
const Section03View = styled.View`
  align-items: center;
`;
export default memo(ContactDetailScreen);
