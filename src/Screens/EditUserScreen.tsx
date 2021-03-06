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
  const nameInitial = route.params.name

  const companyInitial ='Base.vn'
  const [fistnametext, onChangeFistnameText] = React.useState( nameInitial);
  const [nametext, onChangeNameText] = React.useState( '');
  const [companytext, onChangeCompanyText] = React.useState( companyInitial);

function AlertDM (){
   route.params.name=fistnametext
   alert (route.params.name)
  return route.params.name
}


  return (
    <ContainerView>
      <Section01View>
        <TouchableOpacity>
          <CancelText onPress={() => {
            navigation.goBack();
          }}>H???y</CancelText>
        </TouchableOpacity >
        <TouchableOpacity onPress={AlertDM}>
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
          placeholder="H???"
        />
        <UserTextInput
          onChangeText={onChangeNameText}
          value={nametext}
          placeholder="T??n"
        />
        <UserTextInput
          onChangeText={onChangeCompanyText}
          value={companytext}
          placeholder="C??ng Ty"
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
          value = "th??m s??? ??i???n tho???i"
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
            value = "th??m email"
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
            value = "th??m ?????a ch???"
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
            value = "th??m ng??y sinh"
          />
        </AddInfoView>
      </Section03View>
      </ScrollView>
    </ContainerView>
  );
};
export default UserScreen;
