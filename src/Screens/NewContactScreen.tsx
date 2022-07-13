import * as React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {statusBarHeight} from "../themes/styles";
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';

// @ts-ignore
import styled from "styled-components/native";
import ImagePicker from 'react-native-image-crop-picker';

const ContainerView= styled.View`
  flex: 1;
  background-color: #ffffff;
  padding-top: ${statusBarHeight}px;
`;
const Section01View= styled.View`
  flex-direction: row;
  height: 48px;;
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
  color: #828282;
  margin-right: 16px;
`;
const Section02View= styled.View`
 
  align-items: center;
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
`
;
const Section03View= styled.View`
  align-items: center;

`;
const Section03ScrollView= styled.ScrollView`
  width: 100%;

`;
const AddInfoView = styled.View`
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
const RemoveInfoView = styled (AddInfoView)`
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
  line-height: 22px ;
  
`;
// @ts-ignore
const UserScreen: React.FC = ({navigation,route}) => {
  const {list, setList} = route.params.listitem;
  const [avartarlink,setAvartar]=React.useState('')
  const [firstnametext, onChangeFirstnameText] = React.useState( '');
  const [nametext, onChangeNameText] = React.useState( '');
  const [companytext, onChangeCompanyText] = React.useState( '');
  const [phonetext, onChangePhoneText] = React.useState( '');
  const [emailtext, onChangeEmailText] = React.useState( '');
  const [addresstext, onChangeAddressText] = React.useState( '');
  const [birthdaytext, onChangeBirthdayText] = React.useState( '');
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

  const [shouldShowPhone, setshouldShowPhone] = React.useState(false);
  const [shouldShowEmail, setshouldShowEmail] = React.useState(false);
  const [shouldShowAddress, setshouldShowAddress] = React.useState(false);
  const [shouldShowBirthday, setshouldShowBirthday] = React.useState(false);


  const chooseImage = () =>{
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true
      }).then(image => {
      setAvartar(image.path);
    });
  }


  const handleAddContact = () =>{
    setList([...list,   {key: list.length + 1, value: firstnametext, lastName:nametext, phone: phonetext, time: '',position : '',email :emailtext,avartar:avartarlink,birthday: [birthdaytext],addresses: [addresstext]},
    ]);
    navigation.navigate('BaseScreen')

  }

  return (

    <ContainerView>
      <Section01View>
        <TouchableOpacity>
        <CancelText onPress={() => {
          navigation.navigate('BaseScreen');
        }}>Hủy</CancelText>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> handleAddContact()}>
          <FinishText>Xong</FinishText>
        </TouchableOpacity>
      </Section01View>
      <Section02View>



        <AvatarView>
          <AvartarBackground source={IMAGE.EmptyAvartar} resizeMode="cover" ><AvartarImage source={{ uri:avartarlink }} /></AvartarBackground>

          <CamImage onPress={chooseImage}>
          <Image source={ICON.CamAvartarIc}/>
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
      <Section03ScrollView>
      <Section03View>

        {shouldShowPhone ?
          (<RemoveInfoView>
              <TouchableOpacity onPress={() => setshouldShowPhone(false)}>
                <RemoveIcon>
                  <Image source={ICON.RemoveIc}/>
                </RemoveIcon>
              </TouchableOpacity>
              <UserTextInput02
                autoFocus ={true}
                onChangeText={onChangePhoneText}
                value={phonetext}
              />

            </RemoveInfoView>
          ) : null}
        <AddInfoView>
          <TouchableOpacity onPress={() => setshouldShowPhone(true)}
          >
          <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <AddText>Thêm số điện thoại</AddText>
        </AddInfoView>

        {shouldShowEmail ?
          (<RemoveInfoView>
              <TouchableOpacity onPress={() => setshouldShowEmail(false)}>
                <RemoveIcon>
                  <Image source={ICON.RemoveIc}/>
                </RemoveIcon>
              </TouchableOpacity>
              <UserTextInput02
                autoFocus ={true}
                onChangeText={onChangeEmailText}
                value={emailtext}
              />

            </RemoveInfoView>
          ) : null}
        <AddInfoView>
          <TouchableOpacity onPress={() => setshouldShowEmail(true)}
          >
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <AddText>Thêm email</AddText>
        </AddInfoView>
        {shouldShowAddress ?
          (<RemoveInfoView>
              <TouchableOpacity onPress={() => setshouldShowAddress(false)}>
                <RemoveIcon>
                  <Image source={ICON.RemoveIc}/>
                </RemoveIcon>
              </TouchableOpacity>
              <UserTextInput02
                autoFocus ={true}
                onChangeText={onChangeAddressText}
                value={addresstext}
              />

            </RemoveInfoView>
          ) : null}
        <AddInfoView>
          <TouchableOpacity onPress={() => setshouldShowAddress(true)}
          >
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <AddText>Thêm dia chi</AddText>
        </AddInfoView>

        {shouldShowBirthday ?
          (<RemoveInfoView>
              <TouchableOpacity onPress={() => setshouldShowBirthday(false)}>
                <RemoveIcon>
                  <Image source={ICON.RemoveIc}/>
                </RemoveIcon>
              </TouchableOpacity>
              <UserTextInput02
                autoFocus ={true}
                onChangeText={onChangeBirthdayText}
                value={birthdaytext}
              />

            </RemoveInfoView>
          ) : null}
        <AddInfoView>
          <TouchableOpacity onPress={() => setshouldShowBirthday(true)}
          >
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <AddText>Thêm ngay sinh</AddText>
        </AddInfoView>

      </Section03View>
    </Section03ScrollView>
    </ContainerView>
  );
};
export default UserScreen;
