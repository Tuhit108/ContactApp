import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, View } from "react-native";
import { AlphabetList } from "react-native-section-alphabet-list";

import { ICON } from "../assets/icons";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";
import { IMAGE } from "../assets/imgs";


// @ts-ignore
const ContactTab: React.FC = ({ navigation }) => {
  const contactlists = useAppSelector((state: RootState) => state.contact.contactList);
  React.useEffect(() => {
    console.log(contactlists);

  });
  const [text, onChangeText] = React.useState("");
  const removeVietnamese = (str: string) => {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d"); // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
  };


  let contactresults = contactlists.filter(contact => (removeVietnamese(contact.value + " " + contact.lastName) + (contact.value + " " + contact.lastName).toLowerCase()).includes(text.toLowerCase()));
  // @ts-ignore
  return (
    <WraperView
      behavior={Platform.OS == "ios" ? "padding" : null}
    >
      <HeaderView>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}>
          <MenuImage source={ICON.MoreIc} />
        </TouchableOpacity>
        <HeaderText>Liên Hệ</HeaderText>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("NewContactScreen", {
              list: contactlists
            });
          }}>
          <CamImage source={ICON.CamIc} />
        </TouchableOpacity>
      </HeaderView>

      <ContentView>
        <SearchView>
          <SearchChildView>
            <SearchIconImage source={ICON.SearchIc} />
            <SearchTextInput

              onChangeText={onChangeText}
              value={text}
              placeholder="Tìm kiếm danh bạ"
            />
          </SearchChildView>
        </SearchView>
        <MainContentView>
          <TabListView>
            <AlphabetList
              style={{ width: "100%", flex: 1 }}
              // @ts-ignore
              data={contactresults}
              indexLetterStyle={{
                color: "#f2a54a",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 22,
                height: 25

              }}

              indexLetterContainerStyle={{
                margin: 3

              }}
              indexContainerStyle={{
                marginRight: 8


              }}
              renderCustomItem={(item: any) => (

                <ItemListView key={item.key} onPress={() => {

                  navigation.navigate("UserScreen", { item });
                }}>
                  <AvatarView>
                    <AvatarImage source={item.avatar ? { uri: item.avatar } : IMAGE.EmptyAvatar}
                                 avatar={item.avatar}
                    />
                  </AvatarView>
                  <InfoView>
                    <NameText>{item.value + " " + item.lastName}</NameText>
                    <PhoneText numberOfLines={1} >{item.phones.length > 0 ? item.phones.join(' ') : "Không có số điện thoại"}</PhoneText>
                  </InfoView>
                </ItemListView>
              )}
              renderCustomSectionHeader={(section) => (
                <TabListSectionView>
                  <TabListText>{section.title}</TabListText>
                </TabListSectionView>
              )}
            />
          </TabListView>
        </MainContentView>
      </ContentView>
    </WraperView>
  );
};
const WraperView = styled(KeyboardAvoidingView)`
  flex: auto;
  background-color: white;
  font-family: "Roboto";

  padding-top: ${getStatusBarHeight()}px;
`;
const HeaderView = styled.View`

  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  top: 0;



`;
const MenuImage = styled.Image`
  margin-left: 10px;
`;
const CamImage = styled.Image`
  margin-right: 10px;
`;
const HeaderText = styled.Text`
  left: 0;
  font-size: 24px;
  font-weight: 500;
  color: #333333;
`;
const ContentView = styled.View`
  flex: 10;



`;
const SearchView = styled.View`

  height: 44px;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;

`;
const SearchChildView = styled.View`
  background-color: #F9F9F9;
  align-items: center;
  width: 95%;
  height: 36px;
  bottom: 4px;
  flex-direction: row;
  border-radius: 6px;
`;
const SearchIconImage = styled.Image`
  width: 14px;
  height: 14px;
  margin-left: 10px;
  margin-right: 8px;
  tint-color: #333333
`;
const SearchTextInput = styled.TextInput`
  width: 100%;

`;

const MainContentView = styled.View`
  flex: 10;
  align-items: center;
  height: 100%;

`;


const TabListView = styled.View`
  width: 100%;
  height: 100%;
  flex: 10;

`;
const TabListSectionView = styled.View`
  background-color: #F0F0F0;

  height: 36px;
  width: 100%;

`;
const TabListText = styled.Text`
  height: 36px;
  line-height: 36px;
  font-size: 15px;
  font-weight: 500;
  margin-left: 16px;
`;


const ItemListView = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #ffffff;
  align-items: center;
  height: 64px;
`;
const InfoView = styled.View`
  flex: 1;
  border-bottom-color: #f5f5f5;
  border-bottom-width: 1px;
  height: 100%;
  justify-content: center;
  margin-right: 26px;
`;
const AvatarView = styled.View`
  width: 40px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
  align-items: center;
  justify-content: center;
  background-color: #F2F2F2;
  border-radius: 50px;
`;
const AvatarImage = styled.Image<{ avatar?: string }>`
  height: ${props => (props.avatar ? 40 : 30)}px;
  width: ${props => (props.avatar ? 40 : 30)}px;
  border-radius: 50px;

`;
const NameText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333333;

`;
const PhoneText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
  margin-top: 6px;
 
`;

export default ContactTab;
