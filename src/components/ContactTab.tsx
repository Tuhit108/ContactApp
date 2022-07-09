import * as React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import {ScrollView, TouchableOpacity, View} from 'react-native';

import {statusBarHeight} from "../themes/styles";
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';


const WraperView = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-top: ${statusBarHeight}px;
`;
const HeaderView = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  width: 100%;
  top: 0;
  height: 100%;
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
  width: 100%;
`;
const SearchView = styled.View`
  height: 60px;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const SearchChildView = styled.View`
  background-color: #f2f2f2;
  align-items: center;
  width: 95%;
  height: 70%;
  flex-direction: row;
  border-radius: 6px;
`;
const SearchIconImage = styled.Image`
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 8px;
`;
const SearchTextInput = styled.TextInput``;

const MainContentView = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
`;

const AlphabetView = styled.View`
  position: absolute;
  width: 40px;
  height: 100%;
  right: 0px;
`;
const AlphabetText = styled.Text`
  color: #f2a54a;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.12px;
  text-align: center;
  margin-top: 2px;
  margin-bottom: 2px;
`;

const TabListView = styled.View`
  background-color: #e0e0e0;
  width: 100%;
`;
const TabListText = styled.Text`
  height: 42px;
  line-height: 42px;
  font-size: 15px;
  font-weight: 500;
  margin-left: 16px;
`;
const TabListContentView = styled.View``;

const ItemListView = styled.TouchableOpacity`
  flex-direction: row;
  background-color: #ffffff;
  align-items: center;
  width: 100%;
  height: 64px;
`;
const InfoView = styled.View`
  border-bottom-color: #f5f5f5;
  border-bottom-width: 1px;
  height: 100%;
  justify-content: center;
  width: 100%;
  margin-right: 40px;
`;

const AvartarImage = styled.Image`
  margin-left: 15px;
  margin-right: 15px;
`;
const NameText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333333;
  margin-bottom: 2px;
`;
const PhoneText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
  margin-bottom: 2px;
`;

const Text = styled.Text``;
// @ts-ignore
const ContactTab: React.FC = ({navigation}) => {
  const [text, onChangeText] = React.useState('');

  return (
    <WraperView>
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
            navigation.navigate('NewContactScreen');
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
          <ScrollView>
          <TabListView>
            <TabListText>A</TabListText>
            <TabListContentView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Nguyen Tien Nam</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Nguyen Tien Nam</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Nguyen Tien Nam</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Nguyen Tien Nam</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
            </TabListContentView>
          </TabListView>
          <TabListView>
            <TabListText>B</TabListText>
            <TabListContentView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Bui Trong Tung</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Bui Trong Tung</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Bui Trong Tung</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Bui Trong Tung</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
              <ItemListView onPress={() => {
                navigation.navigate('UserScreen');
              }}>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Bui Trong Tung</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
              <ItemListView>
                <AvartarImage source={IMAGE.Avartar} />
                <InfoView>
                  <NameText>Bui Trong Tung</NameText>
                  <PhoneText>0327942405</PhoneText>
                </InfoView>
              </ItemListView>
            </TabListContentView>
          </TabListView>
          </ScrollView>

          <AlphabetView>
            <AlphabetText>A</AlphabetText>
            <AlphabetText>B</AlphabetText>
            <AlphabetText>C</AlphabetText>
            <AlphabetText>D</AlphabetText>
            <AlphabetText>E</AlphabetText>
            <AlphabetText>F</AlphabetText>
            <AlphabetText>G</AlphabetText>
            <AlphabetText>H</AlphabetText>
          </AlphabetView>
        </MainContentView>
      </ContentView>
    </WraperView>
  );
};

export default ContactTab;
