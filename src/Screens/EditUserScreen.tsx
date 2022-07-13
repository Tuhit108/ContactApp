import * as React from "react";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import {statusBarHeight} from "../themes/styles";
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';
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
  const firstnameInitial = route.params.firstName
  const nameInitial = route.params.name

  const companyInitial ='Base.vn'
  const [fistnametext, onChangeFistnameText] = React.useState( firstnameInitial);
  const [nametext, onChangeNameText] = React.useState( nameInitial);
  const [companytext, onChangeCompanyText] = React.useState( companyInitial);



  return (
    <ContainerView>
      <Section01View>
        <TouchableOpacity>
          <CancelText onPress={() => {
            navigation.goBack();
          }}>Hủy</CancelText>
        </TouchableOpacity >
        <TouchableOpacity >
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
          value={companytext}
          placeholder="Công Ty"
        />
      </Section02View>
      <ScrollView>
      <Section03View>
        <RemoveInfoView>
          <TouchableOpacity>
          <RemoveIcon>
            <Image source={ICON.RemoveIc}/>
          </RemoveIcon>
          </TouchableOpacity>
          <UserContactInput
            placeholder={route.params.phoneNum}
          />

        </RemoveInfoView>
        <AddInfoView>
          <TouchableOpacity>
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
            value="tu@gmail.com"
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
            value="0327954"
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
            value="0327954"
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
