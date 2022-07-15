import * as React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import { AlphabetList } from "react-native-section-alphabet-list";
import {statusBarHeight} from "../themes/styles";
import {ICON} from '../assets/icons';
import {IMAGE} from '../assets/imgs';

const contactlists = [
  {key: 1, value: 'Nguyễn',lastName:'Tiến Nam', phone: ['0327942405','0266338','0266338','0266338'], time: 'Hôm nay',position : 'Mobile',email :['nam@gmail.com'],avartar:'https://source.unsplash.com/random/200x200?sig=incrementingkeyentifier',addresses: ['Hai Ba Trung'],birthday:['10/3']},
  {key: 2, value: 'Vũ',lastName:'Mạnh Linh', phone: ['0327942405'], time: 'Hôm nay',position : 'UI/UX Design',email :['dautu@gmail.com',] ,avartar:'https://source.unsplash.com/random/200x200?sig=3',addresses:[] ,birthday:[]},
  {key: 3, value: 'Trần',lastName:'Thái Hà', phone: ['0321287805'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=10',addresses: [],birthday:[]},
  {key: 4, value: 'Lê',lastName:'Ngọc Linh', phone: ['8218242405'], time: 'Hôm nay',position : 'Tester',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=9',addresses: [],birthday:[]},
  {key: 5, value: 'Trần',lastName:'Kiều Ván', phone: ['23317942405'], time: 'Hôm nay',position : 'BA',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=5',addresses: [],birthday:[]},
  {key: 6, value: 'Kiều Vân Anh',lastName:'', phone: ['31232405'], time: 'Hôm nay',position : 'HR',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=8',addresses: [],birthday:[]},
  {key: 7, value: 'Thái Thùy Linh',lastName:'', phone:['12342405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=1',addresses: [],birthday:[]},
  {key: 8, value: 'Nguyễn Nam Tuấn',lastName:'', phone: ['3123142405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=1',addresses: [],birthday:[]},
  {key: 9, value: 'Bùi Trọng Tùng',lastName:'', phone: ['123142405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=11',addresses: [],birthday:[]},
  {key: 10, value: 'Bùi Trọng Tùng',lastName:'', phone: ['1231942405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=12',addresses: [],birthday:[]},
  {key: 11, value: 'Bùi Trọng Tùs',lastName:'', phone: ['1231942405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=13',addresses: [],birthday:[]},
  {key: 12, value: 'Bùi Trọng T',lastName:'', phone: ['12312942405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=19',addresses: [],birthday:[]},
];


const Text = styled.Text``;
// @ts-ignore
const ContactTab: React.FC = ({navigation}) => {
  const [list, setList]= React.useState(contactlists);
  const [text, onChangeText] = React.useState('');
  const [item, setItem]= React.useState({});
  let contactresults = list.filter(contact => (contact.value+' '+contact.lastName).includes(text))

  React.useEffect(() => {
    // Update the document title using the browser API
    console.log(list)
  });


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
            navigation.navigate('NewContactScreen',{
              listitem: {
                list: list,
                setList: setList,
              }
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
              // @ts-ignore
              data={contactresults}
              indexLetterStyle={{
                color: '#f2a54a',
                fontSize: 14,
                fontWeight :'400',
                lineHeight: 22,
                height: 25,

              }}

              indexLetterContainerStyle={{
                margin :3,

              }}
              indexContainerStyle={{
                marginRight :8,


              }}
              renderCustomItem={(item:any) => (

                <ItemListView key={item.key} onPress={() => {

                  navigation.navigate('UserScreen',{item,list,setList})
                }}>

                  <AvartarImage source={{uri:item.avartar}} />
                  <InfoView>
                    <NameText>{item.value+' '+item.lastName}</NameText>
                    <PhoneText>{item.phone[0]}</PhoneText>
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
 flex:1;
  background-color: white;

  padding-top: ${statusBarHeight+10}px;
`;
const HeaderView = styled.View`
  height: 44px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
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
  width: 100%;
  margin-bottom: 44px;
`;
const SearchView = styled.View`
  height: 44px;
  background-color: #FFFFFF;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const SearchChildView = styled.View`
  background-color: #f2f2f250;
  
  align-items: center;
  width: 95%;
  height: 36px;
  flex-direction: row;
  border-radius: 6px;
`;
const SearchIconImage = styled.Image`
  width: 14px;
  height: 14px;
  margin-left: 10px;
  margin-right: 8px;
  tint-color:#333333
`;
const SearchTextInput = styled.TextInput`
width: 100%;
`;

const MainContentView = styled.View`
  align-items: center;
  width: 100%;
`;


const TabListView = styled.View`
  width: 100%;

`;
const TabListSectionView = styled.View`
  background-color: #EBEBEB;
  
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
