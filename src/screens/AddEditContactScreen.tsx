import React, { memo, useCallback, useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";
import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";
import styled from "styled-components/native";
import ImagePicker from "react-native-image-crop-picker";
import { updateContact } from "../store/contact/contactSlice";
import { InputList } from "../components/InputList";
import FastImage from "react-native-fast-image";
import { useContact } from "../store";
import { statusBarHeight } from "../themes/styles";
import moment from "moment";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";

const ContactDetailScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();
  const contactId = route?.params?.id || "";
  const contact = useContact(contactId);
  const contactItem = contact || {
    id: "",
    firstName: "",
    lastName: "",
    position: "",
    company: "",
    phones: [],
    emails: [],
    addresses: [],
    birthday: [],
    avatar: ""
  };

  const { firstName, lastName, phones, emails, avatar, birthday, addresses, company } = contactItem;
  const [avatarLink, setAvatar] = useState(avatar);
  const [firstnameText, setFirstNameText] = useState(firstName);
  const [nameText, setNameText] = useState(lastName);
  const [companyText, setCompanyText] = useState(company);
  const [listPhones, setPhones] = useState(phones);
  const [listEmails, setEmails] = useState(emails);
  const [listAddresses, setAddresses] = useState(addresses);
  const [listBirthday, setBirthdays] = useState(birthday);

  const handleEdit = useCallback(() => {
    const submitItem = {
      id: route?.params?.id ? route?.params?.id : moment().unix().toString(),
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

    dispatch(updateContact(submitItem));
    navigation.goBack();
    navigation.navigate("ContactDetailScreen", { id: submitItem.id });
  }, [route, firstnameText, nameText, listPhones, listEmails, avatarLink, listBirthday, listAddresses, companyText]);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

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
        <TouchableOpacity onPress={onBack}>
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
            <AvatarBackground source={IMAGE.EmptyAvatar_IMG} resizeMode="cover">
              <AvatarImage source={{ uri: avatarLink }} />
            </AvatarBackground>
            <CamImage onPress={chooseImage}>
              <Image source={ICON.ADD_AVATAR_IC} />
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
