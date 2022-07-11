import * as React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import { AlphabetList } from "react-native-section-alphabet-list";
import {statusBarHeight} from "../themes/styles";
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';

const contactlists = [
  {key: 1, value: 'Nguyễn Tiến Nam', phone: '0327942405', time: 'Hôm nay',position : 'Mobile',email :'nam@gmail.com',avartar:'https://source.unsplash.com/random/200x200?sig=incrementingkeyentifier'},
  {key: 2, value: 'Vũ Mạnh Linh', phone: '0327942405', time: 'Hôm nay',position : 'UI/UX Design',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=3'},
  {key: 3, value: 'Trần Thái Hà', phone: '0321287805', time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=10'},
  {key: 4, value: 'Lê Ngọc Linh', phone: '8218242405', time: 'Hôm nay',position : 'Tester',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=9'},
  {key: 5, value: 'Trần Kiều Vân', phone: '23317942405', time: 'Hôm nay',position : 'BA',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=5'},
  {key: 6, value: 'Kiều Vân Anh', phone: '31232405', time: 'Hôm nay',position : 'HR',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=8'},
  {key: 7, value: 'Thái Thùy Linh', phone: '12342405', time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=1'},
  {key: 8, value: 'Nguyễn Nam Tuấn', phone: '3123142405', time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=1'},
  {key: 9, value: 'Bùi Trọng Tùng', phone: '123142405', time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=11'},
  {key: 10, value: 'Bùi Trọng Tùng', phone: '1231942405', time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=12'},
  {key: 11, value: 'Bùi Trọng Tùs', phone: '1231942405', time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=13'},
  {key: 12, value: 'Bùi Trọng T', phone: '12312942405', time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=19'},
];


const Text = styled.Text``;
// @ts-ignore
const ContactTab: React.FC = ({navigation}) => {
  const [text, onChangeText] = React.useState('');
  let contactresults = contactlists.filter(contact => contact.value.includes(text));
  // @ts-ignore
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
            navigation.navigate('NewContactScreen',{contactlists});
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
              // @ts-ignore
              data={contactresults}
              indexLetterStyle={{
                color: '#f2a54a',
                fontSize: 14,
                fontWeight :'400',
                lineHeight: 22,
                height: 500,
              }}

              indexLetterContainerStyle={{
                margin :3
              }}
              indexContainerStyle={{
                marginRight :8

              }}
              renderCustomItem={(item:any) => (
                <ItemListView key={item.key} onPress={() => {
                  navigation.navigate('UserScreen',{item} );
                }}>

                  <AvartarImage source={{uri:item.avartar}} />
                  <InfoView>
                    <NameText>{item.value}</NameText>
                    <PhoneText>{item.phone}</PhoneText>
                  </InfoView>
                </ItemListView>
              )}
              renderCustomSectionHeader={(section) => (
                <TabListSectionView >
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
  margin-bottom: 60px;
 
`;
const TabListSectionView = styled.View`
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
  width: 40px;
  height: 40px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 50px;
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

export default ContactTab;
