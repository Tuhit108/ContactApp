import * as React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';
import {useAppDispatch, useAppSelector} from '../hooks';
import {addNewContact} from '../reducer/contact';



// @ts-ignore
import styled from 'styled-components/native';
import ImagePicker from 'react-native-image-crop-picker';
import {useEffect} from 'react';
import { ContactState } from '../types';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const ContainerView = styled.View`
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
const AvartarImage = styled.Image`
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
const AvartarBackground = styled.ImageBackground`
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
// @ts-ignore
const UserScreen: React.FC = ({navigation, route}) => {
  const dispatch = useAppDispatch();
  
 
  const [avartarlink, setAvartar] = React.useState(null);
  const [firstnametext, onChangeFirstnameText] = React.useState('');
  const [nametext, onChangeNameText] = React.useState('');
  const [companytext, onChangeCompanyText] = React.useState('');
  const [emailtext, onChangeEmailText] = React.useState('');
  const [addresstext, onChangeAddressText] = React.useState('');
  const [birthdaytext, onChangeBirthdayText] = React.useState('');
  const [phone, setPhone] = React.useState([]);
  const [phonetext, onChangePhoneText] = React.useState('');
  const [input, setInput] = React.useState({
    firstName: '',
    lastName: '',
    company: '',
    avatar: '',
    phone: [],
    emails: [],
    addresses: [],
    birthday: [],
  });

  const [shouldShowEmail, setshouldShowEmail] = React.useState(false);
  const [shouldShowAddress, setshouldShowAddress] = React.useState(false);
  const [shouldShowBirthday, setshouldShowBirthday] = React.useState(false);

  const chooseImage = () => {
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true,
    }).then(image => {
      setAvartar(image.path);
    });
  };
  const deletePhoneOnpress = (index: number) => {
    const newList = [...phone];
    newList.splice(index, 1);
    setPhone(newList);
  };
  const addPhoneOnpress = () => {
    setPhone(prev => prev.concat(['']));
  };
  const phoneOnChange = (index: number, text) => {
    onChangePhoneText(text);
    phone.splice(index, 1, text);
  };
  const maxId = route.params.list.reduce(
    (max: number, selectItem: object) =>
      selectItem.key > max ? selectItem.key : max,
    route.params.list[0].key,
  );
  const handleAddContact = () => {
    dispatch(
      addNewContact({
        key: 99,
        value: firstnametext,
        lastName: nametext,
        phone: phone,
        position: '',
        email: [emailtext],
        avatar: avartarlink,
        addresses: [addresstext],
        company: companytext,
        birthday: [birthdaytext],
      }),
    );
    
    navigation.navigate('BaseScreen');
    
  };

  return (
    <ContainerView>
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
            <AvartarBackground source={IMAGE.EmptyAvartar} resizeMode="cover">
              <AvartarImage source={{uri: avartarlink}} />
            </AvartarBackground>

            <CamImage onPress={chooseImage}>
              <Image source={ICON.CamAvartarIc} />
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
          {phone.map((item, index) => {
            return (
              <RemoveInfoView key={index}>
                <TouchableOpacity onPress={() => deletePhoneOnpress(index)}>
                  <RemoveIcon>
                    <Image source={ICON.RemoveIc} />
                  </RemoveIcon>
                </TouchableOpacity>
                <UserTextInput02
                  keyboardType="numeric"
                  autoFocus={true}
                  onChangeText={text => phoneOnChange(index, text)}
                  value={phone[index]}
                  placehoder={'add phone'}
                />
              </RemoveInfoView>
            );
          })}
          <AddInfoView onPress={addPhoneOnpress}>
            <PlusIconImage source={ICON.BluePlusIc} />

            <AddText>Thêm số điện thoại</AddText>
          </AddInfoView>

          {shouldShowEmail ? (
            <RemoveInfoView>
              <TouchableOpacity onPress={() => setshouldShowEmail(false)}>
                <RemoveIcon>
                  <Image source={ICON.RemoveIc} />
                </RemoveIcon>
              </TouchableOpacity>
              <UserTextInput02
                autoFocus={true}
                onChangeText={onChangeEmailText}
                value={emailtext}
              />
            </RemoveInfoView>
          ) : null}
          <AddInfoView>
            <TouchableOpacity onPress={() => setshouldShowEmail(true)}>
              <PlusIconImage source={ICON.BluePlusIc} />
            </TouchableOpacity>
            <AddText>Thêm email</AddText>
          </AddInfoView>
          {shouldShowAddress ? (
            <RemoveInfoView>
              <TouchableOpacity onPress={() => setshouldShowAddress(false)}>
                <RemoveIcon>
                  <Image source={ICON.RemoveIc} />
                </RemoveIcon>
              </TouchableOpacity>
              <UserTextInput02
                autoFocus={true}
                onChangeText={onChangeAddressText}
                value={addresstext}
              />
            </RemoveInfoView>
          ) : null}
          <AddInfoView>
            <TouchableOpacity onPress={() => setshouldShowAddress(true)}>
              <PlusIconImage source={ICON.BluePlusIc} />
            </TouchableOpacity>
            <AddText>Thêm dia chi</AddText>
          </AddInfoView>

          {shouldShowBirthday ? (
            <RemoveInfoView>
              <TouchableOpacity onPress={() => setshouldShowBirthday(false)}>
                <RemoveIcon>
                  <Image source={ICON.RemoveIc} />
                </RemoveIcon>
              </TouchableOpacity>
              <UserTextInput02
                autoFocus={true}
                onChangeText={onChangeBirthdayText}
                value={birthdaytext}
              />
            </RemoveInfoView>
          ) : null}
          <AddInfoView>
            <TouchableOpacity onPress={() => setshouldShowBirthday(true)}>
              <PlusIconImage source={ICON.BluePlusIc} />
            </TouchableOpacity>
            <AddText>Thêm ngay sinh</AddText>
          </AddInfoView>
        </Section03View>
      </ScrollView>
    </ContainerView>
  );
};
export default UserScreen;
