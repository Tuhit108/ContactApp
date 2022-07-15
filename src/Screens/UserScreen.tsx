import * as React from "react";
import { ScrollView, TouchableOpacity, Linking,View,Alert } from "react-native";
import { statusBarHeight } from "../themes/styles";

import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";
// @ts-ignore
import styled from "styled-components/native";

const ContainerView = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
const Section01View = styled.View`
  flex-direction: row;
  //height: 48px;;
  justify-content: space-between;
  align-items: center;
  background-color: #F2A54A08;
  padding-top: ${statusBarHeight + 20}px;


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
const Section02View = styled.View`
  align-items: center;
  background-color: #F2A54A08;
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
const AvartarBackground = styled.ImageBackground`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
`
;
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
const ActionDisableText = styled.Text`
  font-size: 11px;
  font-weight: 400;
  color: #BDBDBD;
  line-height: 22px;
  margin-top: 4px;
`;
const ItemViewAtive = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #F2A54A;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
const ItemViewNone = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #BDBDBD;
  background-color: #fff;
`;

const ActionIc = styled.Image`
  tint-color: #FFFFFF
`;
const DisableIc = styled.Image`
  tint-color: #BDBDBD
`;
const Section03View = styled.View`
  align-items: center;

`;
const UserContactView = styled.View`

  width: 92%;
  justify-content: center;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
`;
const UserContactBabel = styled.Text`
  font-size: 13px;
  font-weight: 400;
  line-height: 22px;
  color: #333333;
  margin-top: 5px;
`;
const UserContactText = styled.Text`
  flex-direction: row;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  margin-top: 2px;
  margin-bottom: 10px;
  color: #2F80ED;
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
const UserScreen: React.FC = ({ navigation, route }) => {


  const list = route.params.list;
  const setList = route.params.setList;
  const phonelist= route.params.item.phone
  const DeleteOnpress = () => {
    Alert.alert(
      "Xoá Liên Hệ",
      "Xác Nhận Xoá",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => handleDeleteContact() }
      ]
    );
  };
  const handleDeleteContact = () => {
    let foundIndex = list.findIndex((element:any) => element.key === route.params.item.key)
    list.splice(foundIndex,1);

    setList([...list,
    ]);
    navigation.navigate('BaseScreen');
  };

  //
  return (
    <ContainerView>
      <Section01View>
        <TouchableOpacity onPress={() => {
          navigation.goBack();
        }}>
          <BackIconImage source={ICON.BackIc} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate("EditUser", {
            item: route.params.item,
            list: route.params.list,
            setList: route.params.setList
          });
        }}>
          <EditUserText>Sửa</EditUserText>
        </TouchableOpacity>
      </Section01View>
      <Section02View>
        <AvatarView>
          <AvartarBackground source={IMAGE.EmptyAvartar} resizeMode="cover">
          <AvartarImage source={{ uri: route.params.item.avartar }} />
          </AvartarBackground>
          <CamImage source={ICON.CamAvartarIc} />
        </AvatarView>
        <UsernameText>{route.params.item.value + " " + route.params.item.lastName}</UsernameText>
        <UserPositionText>{route.params.item.position}</UserPositionText>
        <ActionView>

          {route.params.item.phone.length > 0 ? (<ActionItemView>
            <ItemViewAtive >
              <ActionIc source={ICON.CallIc} />

            </ItemViewAtive>
            <ActionText>Nhấn gọi điện</ActionText>
          </ActionItemView>) : (<ActionItemView>
            <ItemViewNone >
              <DisableIc source={ICON.CallIc} />

            </ItemViewNone>
            <ActionDisableText>Nhấn gọi điện</ActionDisableText>
          </ActionItemView>)}


          {route.params.item.phone.length > 0 ? (<ActionItemView>
            <ItemViewAtive >
              <ActionIc source={ICON.ChatIc} />

            </ItemViewAtive>
            <ActionText>Nhắn tin</ActionText>
          </ActionItemView>) : (<ActionItemView>
            <ItemViewNone >
              <DisableIc source={ICON.ChatIc} />

            </ItemViewNone>
            <ActionDisableText>Nhắn tin</ActionDisableText>
          </ActionItemView>)}
          {route.params.item.phone.length > 0 ? (<ActionItemView>
            <ItemViewAtive >
              <ActionIc source={ICON.FacetimeIc} />

            </ItemViewAtive>
            <ActionText>Facetime</ActionText>
          </ActionItemView>) : (<ActionItemView>
            <ItemViewNone >
              <DisableIc source={ICON.FacetimeIc} />

            </ItemViewNone>
            <ActionDisableText>Facetime</ActionDisableText>
          </ActionItemView>)}
          {route.params.item.email.length > 0 ? (<ActionItemView>
            <ItemViewAtive >
              <ActionIc source={ICON.EmailIc} />

            </ItemViewAtive>
            <ActionText>Gửi email</ActionText>
          </ActionItemView>) : (<ActionItemView>
            <ItemViewNone >
              <DisableIc source={ICON.EmailIc} />

            </ItemViewNone>
            <ActionDisableText>Gửi Email</ActionDisableText>
          </ActionItemView>)}
        </ActionView>

      </Section02View>
      <ScrollView>
      <Section03View>
        <UserContactView>
          <UserContactBabel> Điện thoại</UserContactBabel>
          {phonelist.map((item) =>(<UserContactText> {item}</UserContactText>))}

        </UserContactView>
        <UserContactView>
          <UserContactBabel> Email</UserContactBabel>
          <UserContactText> {route.params.item.email}</UserContactText>
        </UserContactView>
        <UserContactView>
          <UserContactBabel> Ghi chú</UserContactBabel>
          <UserContactText> {route.params.item.birthday}</UserContactText>
        </UserContactView>
        <UserActionView>
          <UserChatText> Gửi tin nhắn</UserChatText>
        </UserActionView>
        <UserActionView>
          <TouchableOpacity onPress={DeleteOnpress}>
          <UserDeleteText> Xoá người gọi</UserDeleteText>
          </TouchableOpacity>
        </UserActionView>

      </Section03View>
      </ScrollView>
    </ContainerView>
  );
};
export default UserScreen;
