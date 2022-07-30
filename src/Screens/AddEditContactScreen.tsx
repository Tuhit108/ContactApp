import * as React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from "react-native";

import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";
// @ts-ignore
import styled from "styled-components/native";
import ImagePicker from "react-native-image-crop-picker";
import { useAppDispatch, useAppSelector } from "../hooks";
import { updateContact } from "../store/contact/contactSlice";
import { InputList } from "../components/InputList";
import { memo, useCallback } from "react";
import FastImage from "react-native-fast-image";
import { RootState, useSelectContacts } from "../store";
import { statusBarHeight } from "../themes/styles";


// @ts-ignore
const ContactDetailScreen: React.FC = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const contacts = useSelectContacts()
  // @ts-ignore
  let contactLists =contacts.query['all'].map(key => contacts.byKey[key])
  const { value, lastName, phones, emails, avatar, birthday, addresses, company } = route.params.item;
  const [avatarLink, setAvatar] = React.useState(avatar);
  const [firstnameText, setFirstNameText] = React.useState(value);
  const [nameText, setNameText] = React.useState(lastName);
  const [companyText, setCompanyText] = React.useState(company);
  const [listPhones, setPhones] = React.useState(phones);
  const [listEmails, setEmails] = React.useState(emails);
  const [listAddresses, setAddresses] = React.useState(addresses);
  const [listBirthday, setBirthdays] = React.useState(birthday);


  const maxId = contactLists.reduce(
    (max: number, selectItem: any) =>
      selectItem.key > max ? selectItem.key : max,
    0
  );
  const submitItem={
    key: route.params.item.key ? route.params.item.key : maxId + 1,
    value: firstnameText,
    lastName: nameText,
    phones: listPhones.filter((listValue:string) => listValue !== ''),
    position: "",
    emails: listEmails.filter((listValue:string) => listValue !== ''),
    avatar: avatarLink,
    birthday: listBirthday,
    addresses: listAddresses.filter((listValue:string) => listValue !== ''),
    company: companyText
  }
  const handleEdit =useCallback (() => {
    dispatch(updateContact(
      submitItem));
      navigation.navigate("ContactDetailScreen",
      {
        key:submitItem.key
      });

  },[submitItem]);

  const chooseImage = useCallback(() => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true
    }).then(image => {
      setAvatar(image.path);
    });
  }, []);
  return (
    <ContainerView
      behavior={Platform.OS == "ios" ? "padding" : null}>
      <Section01View>
        <TouchableOpacity>
          <AvailableText onPress={() => {
            navigation.goBack();
          }}>Hủy</AvailableText>
        </TouchableOpacity>
        {firstnameText.length > 0 || nameText.length > 0 ? (
          <TouchableOpacity onPress={() => handleEdit()}>
            <AvailableText>Xong</AvailableText>
          </TouchableOpacity>
        ) : (
          <DisableText>Xong</DisableText>
        )}
      </Section01View>
      <ScrollView>
        <Section02View>
          <AvatarView>
            <AvatarBackground source={IMAGE.EmptyAvatar} resizeMode="cover">
              <AvatarImage source={{ uri: avatarLink }} />
            </AvatarBackground>
            <CamImage onPress={chooseImage}>
              <Image source={ICON.CamAvatarIc} />
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
  margin-left: 16px;
  margin-right: 16px;
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
          align-items: center;
  `
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
