import * as React from "react";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import {statusBarHeight} from "../themes/styles";
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';
// @ts-ignore
import styled from "styled-components/native";
import ImagePicker from 'react-native-image-crop-picker';

const ContainerView= styled.ScrollView`
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
  color: #F2A54A;
  margin-right: 16px;
`;
const Section02View= styled.View`
 
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
const AvartarImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  
`;
const AvartarBackground = styled.ImageBackground`
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
  
  height: 44px;
  width: 92%;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
`;
const UserTextInput02 = styled.TextInput`
  
  height: 44px;
  width: 100%;
  
`;

const Section03View= styled.View`
  align-items: center;

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
const UserContactInput = styled.TextInput`

`;
const PlusIconImage = styled.Image`
  margin-right: 16px;
`;
const TagNameText = styled.Text`
font-size: 15px;
  font-weight: 400;
  line-height: 22px ;
  
`;
// @ts-ignore
const UserScreen: React.FC = ({navigation,route}) => {
  const firstnameInitial = route.params.item.value
  const nameInitial = route.params.item.lastName
  const list =route.params.list
  const setList=route.params.setList
  const companyInitial ='Base.vn'
  const [avartarlink,setAvartar]=React.useState(route.params.item.avartar);
  const [fistnametext, onChangeFistnameText] = React.useState( firstnameInitial);
  const [nametext, onChangeNameText] = React.useState( nameInitial);
  const [companytext, onChangeCompanyText] = React.useState( companyInitial);
  const [phone, setPhone] = React.useState( route.params.item.phone);
  const [phonetext, onChangePhoneText] = React.useState( '');
  const [emailtext, onChangeEmailText] = React.useState( route.params.item.email);
  const [addresstext, onChangeAddressText] = React.useState( route.params.item.addresses);
  const [birthdaytext, onChangeBirthdayText] = React.useState( route.params.item.birthday);


  const handleEdit = () =>{
    let foundIndex = list.findIndex((element:any) => element.key === route.params.item.key)
    list.splice(foundIndex,1,{key: route.params.item.key, value: fistnametext, lastName:nametext, phone: phone, time: '',position : '',email :emailtext,avartar:avartarlink,birthday:birthdaytext,addresses: addresstext});
    navigation.navigate('BaseScreen');
    setList([...list,
    ]);
  }
  const deletePhoneOnpress= (index) =>{
    const newList = [...phone]
    newList.splice(index,1,)
    setPhone(newList)
  };
  const addPhoneOnpress= () =>{
    setPhone(prev => prev.concat(['']))
  }
  const phoneOnChange= (index,text)=>{
    onChangePhoneText(text)
    phone.splice(index,1,text)
  }
  const chooseImage = () =>{
    ImagePicker.openPicker({
      width: 100,
      height: 100,
      cropping: true
    }).then(image => {
      setAvartar(image.path);
    });
  }

  return (
    <ContainerView>
      <Section01View>
        <TouchableOpacity>
          <CancelText onPress={() => {
            navigation.goBack();
          }}>Hủy</CancelText>
        </TouchableOpacity >
        <TouchableOpacity onPress={handleEdit}>
        <FinishText>Xong</FinishText>
        </TouchableOpacity>
      </Section01View>
      <Section02View>
        <AvatarView>
          <AvartarBackground source={IMAGE.EmptyAvartar} resizeMode="cover">
          <AvartarImage source={{uri:avartarlink}} />
          </AvartarBackground>
          <CamImage onPress={chooseImage}>
            <Image source={ICON.CamAvartarIc}/>
          </CamImage>
        </AvatarView>
        <UserTextInput
          onChangeText={onChangeFistnameText}
          value={fistnametext}
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
      <ScrollView>
      <Section03View>
        {phone.map((item, index) =>{ return(
          <RemoveInfoView key={index}>
            <TouchableOpacity onPress={()=>deletePhoneOnpress(index)}>
              <RemoveIcon>
                <Image source={ICON.RemoveIc}/>
              </RemoveIcon>
            </TouchableOpacity>
            <UserTextInput02
              keyboardType="numeric"
              autoFocus ={true}
              onChangeText={text => phoneOnChange(index, text)}
              value={phone[index]}
            />
          </RemoveInfoView>
        )})}
        <AddInfoView>
          <TouchableOpacity onPress={addPhoneOnpress}>
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <UserContactInput
          value = "thêm số điện thoại"
          />
        </AddInfoView>

        <RemoveInfoView>
          <TouchableOpacity>
            <RemoveIcon>
              <Image source={ICON.RemoveIc}/>
            </RemoveIcon>
          </TouchableOpacity>
          <UserContactInput
            value={emailtext}
            onChangeText ={onChangeEmailText}
          />

        </RemoveInfoView>
        <AddInfoView>
          <TouchableOpacity>
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <UserContactInput
            value = "thêm email"
          />
        </AddInfoView>
        <RemoveInfoView>
          <TouchableOpacity>
            <RemoveIcon>
              <Image source={ICON.RemoveIc}/>
            </RemoveIcon>
          </TouchableOpacity>
          <UserContactInput
            value={addresstext}
            onChangeText ={onChangeAddressText}
          />

        </RemoveInfoView>
        <AddInfoView>
          <TouchableOpacity>
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <UserContactInput
            value = "thêm địa chỉ"
          />
        </AddInfoView>
        <RemoveInfoView>
          <TouchableOpacity>
            <RemoveIcon>
              <Image source={ICON.RemoveIc}/>
            </RemoveIcon>
          </TouchableOpacity>
          <UserContactInput
            value={birthdaytext}
            onChangeText ={onChangeBirthdayText}
          />

        </RemoveInfoView>
        <AddInfoView>
          <TouchableOpacity>
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <UserContactInput
            value = "thêm ngày sinh"
          />
        </AddInfoView>
      </Section03View>
      </ScrollView>
    </ContainerView>
  );
};
export default UserScreen;
