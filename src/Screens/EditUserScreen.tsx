import * as React from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";
// @ts-ignore
import styled from "styled-components/native";
import ImagePicker from "react-native-image-crop-picker";
import {useAppDispatch} from "../hooks";
import {updateContact} from "../reducer/contact";
import { InputList } from "../components/InputList";
import { memo, useCallback } from "react";


// @ts-ignore
const UserScreen: React.FC = ({ navigation, route }) => {
  const dispatch=useAppDispatch();
  const firstnameInitial = route.params.item.value;
  const nameInitial = route.params.item.lastName;
  const companyInitial = route.params.item.company;
  const [avatarlink, setAvatar] = React.useState(route.params.item.avatar);
  const [firstnametext, onChangeFistnameText] = React.useState(firstnameInitial);
  const [nametext, onChangeNameText] = React.useState(nameInitial);
  const [companytext, onChangeCompanyText] = React.useState(companyInitial);
  const [phones, setPhones] = React.useState(route.params.item.phones);
  const [emails, setEmails] = React.useState(route.params.item.emails);
  const [addresses, setAddreses] = React.useState(route.params.item.addresses);
  const [birthday, setBirthdays] = React.useState(route.params.item.birthday);
  const handleEdit = () => {
    dispatch(updateContact(
      {
        key: route.params.item.key,
        value: firstnametext,
        lastName: nametext,
        phones: phones,
        position: "",
        emails: emails,
        avatar: avatarlink,
        birthday: birthday,
        addresses: addresses,
        company: companytext
      }));
    navigation.navigate("UserScreen", {
      item:
        {
          key: route.params.item.key,
          value: firstnametext,
          lastName: nametext,
          phones: phones,
          time: "",
          position: "",
          emails: emails,
          avatar: avatarlink,
          birthday: birthday,
          addresses: addresses,
          company: companytext
        }
    });

  };

  const chooseImage = useCallback(() => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true
    }).then(image => {
      setAvatar(image.path);
    });
  },[]);

  return (
    <ContainerView
      behavior={Platform.OS == 'ios' ? 'padding' : null}>
      <Section01View>
        <TouchableOpacity>
          <CancelText onPress={() => {
            navigation.goBack();
          }}>Hủy</CancelText>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEdit}>
          <FinishText>Xong</FinishText>
        </TouchableOpacity>
      </Section01View>
      <ScrollView>
        <Section02View>
          <AvatarView>
            <AvatarBackground source={IMAGE.EmptyAvatar} resizeMode="cover">
              <AvatarImage source={{ uri: avatarlink }} />
            </AvatarBackground>
            <CamImage onPress={chooseImage}>
              <Image source={ICON.CamAvatarIc} />
            </CamImage>
          </AvatarView>
          <UserTextInput
            onChangeText={onChangeFistnameText}
            value={firstnametext}
            placeholder="Họ"
          />
          <UserTextInput
            onChangeText={onChangeNameText}
            value={nametext}
            placeholder="Tên"
          />
          <UserTextInput
            onChangeText={onChangeCompanyText}
            value={companytext}
            placeholder="Công Ty"
          />
        </Section02View>

        <Section03View>
          <InputList
            title="phone"
            list={phones}
            keyboardType="numeric"
            setList={setPhones}
          />
          <InputList
            title="email"
            list={emails}
            keyboardType="numeric"
            setList={setEmails}
          />
          <InputList
            title="address"
            list={addresses}
            keyboardType="numeric"
            setList={setAddreses}
          />
          <InputList
            title="birthday"
            list={birthday}
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
  padding-top: ${getStatusBarHeight()}px;
`;
const Section01View = styled.View`
  flex-direction: row;
  height: 60px;;
  justify-content: space-between;
  align-items: center;
`;
const CancelText = styled.Text`
  margin-left: 16px;
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #F2A54A;

`;
const FinishText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #F2A54A;
  margin-right: 16px;
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
const AvatarImage = styled.Image`
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
  right: 0px;
  bottom: 0px;
`;
const UserTextInput = styled.TextInput`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  /* identical to box height, or 147% */

  letter-spacing: -0.41px;

  /* Gray 1 */

  color: #333333;
  height: 44px;
  width: 92%;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
`;

const Section03View = styled.View`
  align-items: center;

`;


export default memo(UserScreen);
