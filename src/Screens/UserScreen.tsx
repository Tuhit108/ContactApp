import * as React from "react";
import { memo } from "react";
import { ScrollView, TouchableOpacity, Alert, Linking, Platform, KeyboardAvoidingView } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { useAppDispatch } from "../hooks";
import { deleteContact } from "../reducer/contact";

import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";
// @ts-ignore
import styled from "styled-components/native";
import { ShowInfo } from "../components/ShowInfo";


// @ts-ignore
const UserScreen: React.FC = ({ navigation, route }) => {
  const dispatch = useAppDispatch();
  const contactitem = route.params.item;
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
    dispatch(deleteContact({ key: contactitem.key }));
    navigation.navigate("BaseScreen");
  };

  //
  return (
    <ContainerView behavior={Platform.OS == "ios" ? "padding" : null}>
      <Section01View>
        <TouchableOpacity onPress={() => {
          navigation.navigate("BaseScreen");
        }}>
          <BackIconImage source={ICON.BackIc} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate("EditUser", {
            item: contactitem
          });
        }}>
          <EditUserText>Sửa</EditUserText>
        </TouchableOpacity>
      </Section01View>
      <ScrollView>
        <Section02View>
          <AvatarView>
            <AvatarBackground source={IMAGE.EmptyAvatar} resizeMode="cover">
              <AvatarImage source={{ uri: contactitem.avatar }} />
            </AvatarBackground>
            <CamImage source={ICON.CamAvatarIc} />
          </AvatarView>
          <UsernameText>{contactitem.value + " " + contactitem.lastName}</UsernameText>
          <UserPositionText>{contactitem.company}</UserPositionText>
          <ActionView>

            {contactitem.phones.length > 0 ? (<ActionItemView>
              <ItemViewAtive onPress={() => {
                Linking.openURL(`tel:${contactitem.phones[0]}`);
              }}>
                <ActionIc source={ICON.CallIc} />

              </ItemViewAtive>
              <ActionText>Nhấn gọi điện</ActionText>
            </ActionItemView>) : (<ActionItemView>
              <ItemViewNone>
                <DisableIc source={ICON.CallIc} />

              </ItemViewNone>
              <ActionDisableText>Nhấn gọi điện</ActionDisableText>
            </ActionItemView>)}


            {contactitem.phones.length > 0 ? (<ActionItemView>
              <ItemViewAtive onPress={() => {
                Linking.openURL(`sms:${contactitem.phones[0]}`);
              }}>
                <ActionIc source={ICON.ChatIc} />

              </ItemViewAtive>
              <ActionText>Nhắn tin</ActionText>
            </ActionItemView>) : (<ActionItemView>
              <ItemViewNone>
                <DisableIc source={ICON.ChatIc} />

              </ItemViewNone>
              <ActionDisableText>Nhắn tin</ActionDisableText>
            </ActionItemView>)}
            {contactitem.phones.length > 0 ? (<ActionItemView>
              <ItemViewAtive>
                <ActionIc source={ICON.FacetimeIc} />

              </ItemViewAtive>
              <ActionText>Facetime</ActionText>
            </ActionItemView>) : (<ActionItemView>
              <ItemViewNone>
                <DisableIc source={ICON.FacetimeIc} />
              </ItemViewNone>
              <ActionDisableText>Facetime</ActionDisableText>
            </ActionItemView>)}
            {contactitem.emails.length > 0 ? (<ActionItemView>
              <ItemViewAtive onPress={() => {
                Linking.openURL(`mailto:${contactitem.emails[0]}`);
                console.log(contactitem.emails.length);
              }}>
                <ActionIc source={ICON.EmailIc} />

              </ItemViewAtive>
              <ActionText>Gửi email</ActionText>
            </ActionItemView>) : (<ActionItemView>
              <ItemViewNone>
                <DisableIc source={ICON.EmailIc} />

              </ItemViewNone>
              <ActionDisableText>Gửi Email</ActionDisableText>
            </ActionItemView>)}
          </ActionView>

        </Section02View>

        <Section03View>
          <ShowInfo
            title="Phones"
            list={contactitem.phones}
          />
          <ShowInfo
            title="Emails"
            list={contactitem.emails}
          />
          <ShowInfo
            title="Addresses"
            list={contactitem.addresses}
          />
          <UserContactView>
            <UserContactBabel> Ghi chú</UserContactBabel>
            <UserContactText> {contactitem.birthday}</UserContactText>
          </UserContactView>
          <UserActionView>
            <UserChatText> Gửi tin nhắn</UserChatText>
          </UserActionView>
          <UserActionView onPress={DeleteOnpress}>

            <UserDeleteText> Xoá người gọi</UserDeleteText>
          </UserActionView>

        </Section03View>
      </ScrollView>
    </ContainerView>
  );
};
const ContainerView = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: #ffffff;
`;
const Section01View = styled.View`
  flex-direction: row;
  height: ${getStatusBarHeight() + 60}px;
  justify-content: space-between;
  align-items: center;
  background-color: #FEFBF6;
  padding-top: ${getStatusBarHeight()}px;;
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
  background-color: #FEFBF6;
`;
const AvatarView = styled.View`
  justify-content: center;
  align-items: center;
  background-color: #F2F2F2;
  margin-top: 10px;
  margin-bottom: 20px;
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
const AvatarImage = styled.Image`
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
  line-height: 22px;

  letter-spacing: -0.41px;
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
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;


  letter-spacing: -0.41px;
  color: #828282;

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
const ItemViewNone = styled.TouchableOpacity`
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

  min-height: 64px;
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
  margin-top: 9px;
  margin-bottom: 3px;
`;
const UserContactText = styled.Text`
  flex-direction: row;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 6px;
  color: #2F80ED;
`;
const UserActionView = styled.TouchableOpacity`
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
export default memo(UserScreen);
