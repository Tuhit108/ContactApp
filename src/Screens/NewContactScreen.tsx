import * as React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import {statusBarHeight} from "../themes/styles";
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';
import {contacts} from "../components/HistoryTab";
// @ts-ignore
import styled from "styled-components/native";

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
  
`;
const CamImage = styled.Image`
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


const Section03View= styled.View`
  align-items: center;

`;
const AddInfoView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 92%;
  margin-top: 24px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
`;
const PlusIconImage = styled.Image`
  margin-right: 16px;
  margin-right: 16px;
`;
const TagNameText = styled.Text`
font-size: 15px;
  font-weight: 400;
  line-height: 22px ;
  
`;
// @ts-ignore
const UserScreen: React.FC = ({navigation, route}) => {
  console.log(route.params.params);
  const {list, setList} = route.params.params;
  const [fistnametext, onChangeFistnameText] = React.useState( '');
  const [nametext, onChangeNameText] = React.useState( '');
  const [companytext, onChangeCompanyText] = React.useState( '');
  const [info, setInfo] = React.useState({
    id: '',
    firstName: '',
    lastName: '',
    organization: '',
    avatar: '',
    phones: [],
    emails: [],
    addresses: [],
    birthday: [],
  });
 const arraylist= [
   {id :1, value : 'Nam'}
 ]


  const handleAddContact = () =>{
    setList([...list,   {key: 16, value: fistnametext, phone: '12312942405', time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=19'},
   ]);
    console.log(fistnametext);
  }

  return (

    <ContainerView>
      <Section01View>
        <TouchableOpacity>
        <CancelText onPress={() => {
          navigation.navigate('BaseScreen');
        }}>Hủy</CancelText>
        </TouchableOpacity >
        <TouchableOpacity onPress={()=> handleAddContact()}>
        <FinishText>Xong</FinishText>
        </TouchableOpacity>
      </Section01View>
      <Section02View>

          

        <AvatarView>
          <AvartarImage source={IMAGE.EmptyAvartar} />
          <CamImage source={ICON.CamAvartarIc}/>
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
          value={companytext}anh
          placeholder="Công Ty"
        />
      </Section02View>
      <Section03View>
        <AddInfoView>
          <TouchableOpacity>
          <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <TagNameText> Thêm số điện thoại</TagNameText>
        </AddInfoView>
        <AddInfoView>
          <TouchableOpacity>
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <TagNameText> Thêm email</TagNameText>
        </AddInfoView>
        <AddInfoView>
          <TouchableOpacity>
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <TagNameText> Thêm địa chỉ</TagNameText>
        </AddInfoView>
        <AddInfoView>
          <TouchableOpacity>
            <PlusIconImage source={ICON.BluePlusIc}/>
          </TouchableOpacity>
          <TagNameText> Thêm ngày sinh</TagNameText>
        </AddInfoView>
      </Section03View>
    </ContainerView>
  );
};
export default UserScreen;
