import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";

import { statusBarHeight} from "../themes/styles";
import { KeyboardAvoidingView, Platform, TouchableOpacity, StyleSheet } from "react-native";
import { AlphabetList } from "react-native-section-alphabet-list";
import FastImage from "react-native-fast-image";
import { ICON } from "../assets/icons";
import { useAppSelector } from "../hooks";
import { RootState } from "../store";
import { IMAGE } from "../assets/imgs";
import { memo } from "react";
import { removeVietnamese } from "../helper";
import { TabHeader } from "./TabHeader";


// @ts-ignore
const ContactList: React.FC = ({ navigation }) => {
  const customIndex = [
    "a",
    "ă",
    "â",
    "b",
    "c",
    "d",
    "đ",
    "e",
    "ê",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",

    "n",
    "o",
    "ô",
    "ơ",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "ư",
    "v",
    "w",
    "x",
    "y",
    "z"

  ];
  const contactlists = useAppSelector((state: RootState) => state.contact.contactList);
  const [text, onChangeText] = React.useState("");
  let contactresults = contactlists.filter(contact => (removeVietnamese(contact.value + " " + contact.lastName) + (contact.value + " " + contact.lastName).toLowerCase()).includes(text.toLowerCase()));


  return (
    <WraperView
      behavior={Platform.OS == "ios" ? "padding" : "padding"}
    >
      <TabHeader title="Liên hệ"/>

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
            <AlphabetListContact

              // @ts-ignore
              data={contactresults}
              indexLetterStyle={styles.indexLetterStyle}
              indexLetterContainerStyle={styles.indexLetterContainerStyle}
              indexContainerStyle={styles.indexContainerStyle}
              index={customIndex}
              renderCustomItem={(item: any) => (
                <ItemListView key={item.key} onPress={() => {
                  navigation.navigate("ContactDetailScreen", { item });
                }}>
                  <AvatarView>
                    <AvatarImage source={item.avatar ? { uri: item.avatar } : IMAGE.EmptyAvatar}
                                 avatar={item.avatar}
                    />
                  </AvatarView>
                  <InfoView>
                    <NameText>{item.value + " " + item.lastName}</NameText>
                    <PhoneText
                      numberOfLines={1}>{item.phones.length > 0 ? item.phones.join(", ") : "Không có số điện thoại"}</PhoneText>
                  </InfoView>
                </ItemListView>
              )}
              renderCustomSectionHeader={(section: any) => (
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

const styles = StyleSheet.create({
  indexLetterStyle: {
    color: "#f2a54a",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 22,
    height: 25

  },
  indexLetterContainerStyle: {
    margin: 4,

    width: 16

  },
  indexContainerStyle: {
    marginRight: 8,
    width: 16
  }
});
const WraperView = styled(KeyboardAvoidingView)`
  flex: auto;
  background-color: white;


  padding-top: ${statusBarHeight}px;
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
const AlphabetListContact = styled(AlphabetList)`
  flex: 1

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
const AvatarImage = styled(FastImage)<{ avatar?: string }>`
  height: ${(props: any) => (props.avatar ? 40 : 30)}px;
  width: ${(props: any) => (props.avatar ? 40 : 30)}px;
  border-radius: 50px;

`;
const NameText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  line-height: 18px;
  letter-spacing: 0.12px;

`;
const PhoneText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
  margin-top: 6px;
  line-height: 16px;
  letter-spacing: 0.12px;

`;

export default memo(ContactList);
