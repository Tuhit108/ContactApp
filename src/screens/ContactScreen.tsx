import * as React from "react";
import { memo, useCallback, useMemo, useState } from "react";
import styled from "styled-components/native";
import { statusBarHeight } from "../themes/styles";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { AlphabetList } from "react-native-section-alphabet-list";
import FastImage from "react-native-fast-image";
import { ICON } from "../assets/icons";
import { useContacts } from "../store";
import { IMAGE } from "../assets/imgs";
import { removeVietnamese } from "../helper";
import { TabHeader } from "../components/TabHeader";
import { NavigationContainer } from "@react-navigation/native";

const customIndex = [
  "a", "ă", "â", "b", "c", "d", "đ", "e", "ê", "g", "h", "i", "k", "l", "m", "n", "o", "ô", "ơ", "p", "q", "r", "s", "t", "u", "ư", "v", "w", "x", "y", "z"
];

const ContactScreen = ( {navigation}:any ) => {
  const [searchText, onChangeSearchText] = useState("");
  const contacts = useContacts();
  const contactRenderLists = useMemo(() => {
    return contacts.query["all"]?.map(key => {
      return {
        ...contacts.byKey[key],
        key: key,
        value: removeVietnamese(contacts.byKey[key].firstName + contacts.byKey[key].lastName)
      };
    });
  }, [contacts]);

  let contactResults = contactRenderLists.filter(contact => (removeVietnamese(contact.firstName + " " + contact.lastName) + (contact.firstName + " " + contact.lastName).toLowerCase()).includes(searchText.toLowerCase()));

  const onPressContact = useCallback((id: string) => {
    navigation.navigate("ContactDetailScreen", { id: id });
  }, []);

  const _render = useCallback((item: any) => {
    return <ItemListView onPress={() => onPressContact(item.id)}>
      <AvatarView>
        <AvatarImage
          source={item.avatar ? { uri: item.avatar } : IMAGE.EmptyAvatar}
          avatar={item.avatar}
        />
      </AvatarView>
      <InfoView>
        <NameText>{item.firstName + " " + item.lastName}</NameText>
        <PhoneText numberOfLines={1}>
          {item.phones.length > 0 ? item.phones.join(", ") : "Không có số điện thoại"}
        </PhoneText>
      </InfoView>
    </ItemListView>;
  }, []);
  return (
    <WrapperView
      behavior={Platform.OS == "ios" ? "padding" : "padding"}
    >
      <TabHeader title="Liên hệ" />
      <ContentView>
        <SearchView>
          <SearchChildView>
            <SearchIconImage source={ICON.SearchIc} />
            <SearchTextInput
              onChangeText={onChangeSearchText}
              value={searchText}
              placeholder="Tìm kiếm danh bạ"
            />
          </SearchChildView>
        </SearchView>
        <MainContentView>
          <TabListView>
            <AlphabetListContact
              data={contactResults}
              indexLetterStyle={styles.indexLetterStyle}
              indexLetterContainerStyle={styles.indexLetterContainerStyle}
              indexContainerStyle={styles.indexContainerStyle}
              index={customIndex}
              renderCustomItem={_render}
              renderCustomSectionHeader={(section: any) => (
                <TabListSectionView>
                  <TabListText>{section.title}</TabListText>
                </TabListSectionView>
              )}
            />
          </TabListView>
        </MainContentView>
      </ContentView>
    </WrapperView>
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
const WrapperView = styled(KeyboardAvoidingView)`
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

export default memo(ContactScreen);
