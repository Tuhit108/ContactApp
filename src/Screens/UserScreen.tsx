import * as React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import {statusBarHeight} from "../themes/styles";

import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';
// @ts-ignore
import styled from "styled-components/native";

const ContainerView= styled.View`
  flex: 1;
  background-color: #ffffff;
`;
const Section01View= styled.View`
  flex-direction: row;
  //height: 48px;;
  justify-content: space-between;
  align-items: center;
  background-color:#FFFAF3;
  padding-top: ${statusBarHeight+20}px;

  
`;

const BackIconImage = styled.Image`
  margin-left: 16px;
`;
const EditUserText = styled.Text`
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  color: #F2A54A;
  margin-right: 16px;
`;
const Section02View= styled.View`
  align-items: center;
  background-color: #FFFAF3;
`;
const AvatarView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
const AvartarImage = styled.Image`
  width: 100px;
  height: 100px; 
  border-radius: 50px;
  
`;
const CamImage = styled.Image`
  position: absolute;
  right: 0px;
  bottom: 0px;
`;
const UsernameText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #333333;
`;
const ActionView = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
const ActionItemView = styled.View`
  align-items: center;
  width: 25%;
  
`;
const UserPositionText = styled.Text`
  font-size: 13px;
  font-weight: 400;
  color: #828282;
  line-height: 22px;
`;
const ActionText = styled.Text`
  font-size: 11px;
  font-weight: 400;
  color: #F2A54A;
  line-height: 22px;
  margin-top: 4px;
`;
const ItemView = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #F2A54A;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
const ItemViewEmail = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #BDBDBD;
  background-color: #fff;
`;
const CallIc =styled.Image`

`;


const Section03View= styled.View`
  align-items: center;
  
`;
const UserContactView = styled .View`
  height: 64px;
  width: 92%;
  justify-content: center;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
`
const UserContactBabel = styled .Text`
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  
  color :#333333;
  
`
const UserContactText = styled .Text`
  flex-direction: row;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;

  color :#2F80ED;
  `;
const UserActionView = styled.View`
  height: 44px;
  width: 92%;
  justify-content: center;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
`;
const UserChatText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
`;
const UserDeleteText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
  color: #FF4A4A;
`;

// @ts-ignore
const UserScreen: React.FC = ({navigation, route}) => {


    return (
      <ContainerView>
          <Section01View>
              <TouchableOpacity onPress={() => {
                navigation.goBack();
              }}>
                  <BackIconImage source={ICON.BackIc}/>
              </TouchableOpacity >
            <TouchableOpacity onPress={() => {
              navigation.navigate('EditUser',{
                name : route.params.item.value,
                phoneNum : route.params.item.phone,
              });
            }}>
              <EditUserText>Sửa</EditUserText>
            </TouchableOpacity >
          </Section01View>
          <Section02View>
              <AvatarView>
                  <AvartarImage source={{uri: route.params.item.avartar}}/>
                  <CamImage source={ICON.CamAvartarIc}/>
              </AvatarView>
            <UsernameText>{route.params.item.value}</UsernameText>
            <UserPositionText>{route.params.item.position}</UserPositionText>
            <ActionView>
              <ActionItemView>

              <ItemView>
                <CallIc source={ICON.CallIc}/>

              </ItemView>

                <ActionText>Nhấn gọi điện</ActionText>
              </ActionItemView>
              <ActionItemView>

                  <ItemView>
                    <CallIc source={ICON.ChatIc}/>

                  </ItemView>

                <ActionText>Nhan tin</ActionText>
              </ActionItemView>
              <ActionItemView>

                  <ItemView>
                    <CallIc source={ICON.FacetimeIc}/>

                  </ItemView>

                <ActionText>Facetime</ActionText>
              </ActionItemView>
              <ActionItemView>

                  <ItemViewEmail>
                    <CallIc source={ICON.EmailIc}/>

                  </ItemViewEmail>

                <ActionText>Gui mail</ActionText>
              </ActionItemView>

            </ActionView>

          </Section02View>
          <Section03View>
            <UserContactView>
              <UserContactBabel> Điện thoại</UserContactBabel>
              <UserContactText> {route.params.item.phone}</UserContactText>
            </UserContactView>
            <UserContactView>
              <UserContactBabel> Email</UserContactBabel>
              <UserContactText> {route.params.item.email}</UserContactText>
            </UserContactView>
            <UserContactView>
              <UserContactBabel> Ghi chú</UserContactBabel>
              <UserContactText> </UserContactText>
            </UserContactView>
            <UserActionView>
              <UserChatText> Gửi tin nhắn</UserChatText>
            </UserActionView>
            <UserActionView>
              <UserDeleteText> Xoá người gọi</UserDeleteText>
            </UserActionView>

          </Section03View>
      </ContainerView>
    );
};
export default UserScreen;
