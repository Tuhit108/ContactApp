import * as React from 'react';
// @ts-ignore
import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import { AlphabetList } from "react-native-section-alphabet-list";

import {ICON} from '../assets/icons';




const contactlists = [
  {key: 1, value: 'Nguyễn',lastName:'Tiến Nam', phone: ['0327942405','0266338','0266338','0266338'], time: 'Hôm nay',position : 'Mobile',email :['nam@gmail.com'],avartar:'https://source.unsplash.com/random/200x200?sig=incrementingkeyentifier',addresses: ['Hai Ba Trung'],birthday:['10/3'],company:'Google'},
  {key: 2, value: 'Vũ',lastName:'Mạnh Linh', phone: ['0327942405'], time: 'Hôm nay',position : 'UI/UX Design',email :['dautu@gmail.com',] ,avartar:'https://source.unsplash.com/random/200x200?sig=3',addresses:[] ,birthday:[],company:'Google'},
  {key: 3, value: 'Trần',lastName:'Thái Hà', phone: ['0321287805'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=10',addresses: [],birthday:[],company:'Google'},
  {key: 4, value: 'Lê',lastName:'Ngọc Linh', phone: ['8218242405'], time: 'Hôm nay',position : 'Tester',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=9',addresses: [],birthday:[],company:'Google'},
  {key: 5, value: 'Trần',lastName:'Kiều Ván', phone: ['23317942405'], time: 'Hôm nay',position : 'BA',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=5',addresses: [],birthday:[],company:'Google'},
  {key: 6, value: 'Kiều Vân Anh',lastName:'', phone: ['31232405'], time: 'Hôm nay',position : 'HR',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=8',addresses: [],birthday:[],company:'Google'},
  {key: 7, value: 'Thái Thùy Linh',lastName:'', phone:['12342405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=1',addresses: [],birthday:[],company:'Google'},
  {key: 8, value: 'Nguyễn Nam Tuấn',lastName:'', phone: ['3123142405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=1',addresses: [],birthday:[],company:'Google'},
  {key: 9, value: 'Bùi Trọng Tùng',lastName:'', phone: ['123142405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=11',addresses: [],birthday:[],company:'Google'},
  {key: 10, value: 'Bùi Trọng Tùng',lastName:'', phone: ['1231942405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=12',addresses: [],birthday:[],company:'Google'},
  {key: 11, value: 'Bùi Trọng Tùs',lastName:'', phone: ['1231942405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=13',addresses: [],birthday:[],company:'Google'},
  {key: 12, value: 'Bùi Trọng T',lastName:'', phone: ['12312942405'], time: 'Hôm nay',position : 'Mobile',email :[],avartar:'https://source.unsplash.com/random/200x200?sig=19',addresses: [],birthday:[],company:'Google'},
];


const DemoView = styled.View`

  `;
// @ts-ignore
const ContactTab: React.FC = ({navigation}) => {
  const [list, setList]= React.useState(contactlists);
  const [text, onChangeText] = React.useState('');
  const [item, setItem]= React.useState({});
  const removeVietnamese = (str) => {

    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // Huyền sắc hỏi ngã nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // Â, Ê, Ă, Ơ, Ư
    return str;
  };


  let contactresults = list.filter(contact => removeVietnamese(contact.value+' '+contact.lastName).includes(text.toLowerCase()))




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
      <DemoView></DemoView>
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
              style={{width:'100%'}}
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
  font-family: "Roboto";

  padding-top: ${getStatusBarHeight()}px;
`;
const HeaderView = styled.View`
  flex: 1;
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
  tint-color:#333333
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
  flex:1;
  border-bottom-color: #f5f5f5;
  border-bottom-width: 1px;
  height: 100%;
  justify-content: center;
  margin-right: 26px;
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
  
`;
const PhoneText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
  margin-top: 6px;
`;

export default ContactTab;
