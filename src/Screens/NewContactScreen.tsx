import * as React from 'react';
import { Image, KeyboardAvoidingView, Platform, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';
import {useAppDispatch} from '../hooks';
import {addNewContact} from '../reducer/contact';
// @ts-ignore
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-crop-picker';

import {InputList} from "../components/InputList";


// @ts-ignore
const UserScreen: React.FC = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  const [avatarlink, setAvatar] = React.useState(null);
  const [firstnametext, onChangeFirstnameText] = React.useState('');
  const [nametext, onChangeNameText] = React.useState('');
  const [companytext, onChangeCompanyText] = React.useState('');
  const [phones, setPhones] = React.useState([]);
  const [emails, setEmails] = React.useState([]);
  const [addresses, setAddreses] = React.useState([]);
  const [birthday, setBirthdays] = React.useState([]);

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      setAvatar(image.path);
    });
  };
  const maxId = route.params.list.reduce(
    (max: number, selectItem :any) =>
      selectItem.key > max ? selectItem.key : max,
    route.params.list[0].key,
  );
  const handleAddContact = () => {

    dispatch(
      addNewContact({
        key: maxId +1,
        value: firstnametext,
        lastName: nametext,
        phones: phones,
        position: '',
        emails: emails,
        // @ts-ignore
        avatar: avatarlink,
        addresses: addresses,
        company: companytext,
        birthday: birthday,
      }),
    );


    navigation.navigate('UserScreen',{
      item:
        {
          key: maxId +1,
          value: firstnametext,
          lastName: nametext,
          phones: phones,
          position: '',
          emails: emails,
          // @ts-ignore
          avatar: avatarlink,
          addresses: addresses,
          company: companytext,
          birthday: birthday,
        }
    });

  };

  return (
    <ContainerView behavior={Platform.OS == 'ios' ? 'padding' : null}>
      <Section01View>
        <TouchableOpacity>
          <AvailableText
            onPress={() => {
              navigation.navigate('BaseScreen');
            }}>
            Hủy
          </AvailableText>
        </TouchableOpacity>
        {firstnametext.length > 0 || nametext.length > 0 ? (
          <TouchableOpacity onPress={() => handleAddContact()}>
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
              <AvatarImage source={{uri: avatarlink}} />
            </AvatarBackground>

            <CamImage onPress={chooseImage}>
              <Image source={ICON.CamAvatarIc} />
            </CamImage>
          </AvatarView>
          <UserTextInput
            onChangeText={onChangeFirstnameText}
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
  height: 48px;
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
  background-color: #f2f2f2;
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
const CamImage = styled.TouchableOpacity`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
const UserTextInput = styled.TextInput`
  height: 44px;
  width: 92%;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
`;
const UserTextInput02 = styled.TextInput`
  height: 44px;
  width: 100%;
`;
const AvatarBackground = styled.ImageBackground`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;
const Section03View = styled.View`
  align-items: center;
`;
const Section03ScrollView = styled.ScrollView`
  width: 100%;
`;
const AddInfoView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 92%;
  margin-bottom: 24px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
`;
const PlusIconImage = styled.Image`
  margin-right: 16px;
  margin-right: 16px;
`;
const RemoveInfoView = styled(AddInfoView)`
  margin-bottom: 0px;
`;
const RemoveIcon = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: red;
  margin-right: 17px;
`;
const AddText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
`;
export default UserScreen;
