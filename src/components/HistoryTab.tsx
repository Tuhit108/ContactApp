import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import { View,TouchableOpacity,ScrollView} from 'react-native';
import {statusBarHeight} from "../themes/styles";
import {ICON} from "../assets/icons";
import {IMAGE} from "../assets/imgs";

const contacts = [
    {id: 1, name: 'Nguyễn Tiến Nam', phone: '0327942405', time: 'Hôm nay'},
    {id: 2, name: 'Vũ Mạnh Linh', phone: '0327942405', time: 'Hôm nay'},
    {id: 3, name: 'Trần Thái Hà', phone: '0327942405', time: 'Hôm nay'},
    {id: 4, name: 'Lê Ngọc Linh', phone: '0327942405', time: 'Hôm nay'},
    {id: 5, name: 'Trần Kiều Vân', phone: '0327942405', time: 'Hôm nay'},
    {id: 6, name: 'Kiều Vân Anh', phone: '0327942405', time: 'Hôm nay'},
    {id: 7, name: 'Thái Thùy Linh', phone: '0327942405', time: 'Hôm nay'},
    {id: 8, name: 'Nguyễn Nam Tuấn', phone: '0327942405', time: 'Hôm nay'},
    {id: 9, name: 'Bùi Trọng Tùng', phone: '0327942405', time: 'Hôm nay'},
    {id: 10, name: 'Bùi Trọng Tùng', phone: '0327942405', time: 'Hôm nay'},
    {id: 11, name: 'Bùi Trọng Tùs', phone: '0327942405', time: 'Hôm nay'},
    {id: 12, name: 'Bùi Trọng T', phone: '0327942405', time: 'Hôm nay'},
];
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
  background-color: #FFFFFF ;
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
const ContentScrollView = styled.ScrollView`
  flex: 10;
  width: 100%;
`;
const Text = styled.Text`

`;
const ListView = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  height: 64px;
  justify-content: space-between;
  border-bottom-color: #F5F5F5;
  border-bottom-width: 1px;
`;
const LeftItemView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const RightItemView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const IconPhoneImage = styled.Image`
  margin-left: 15px;
  margin-right: 15px;
`;
const IconDetailImage = styled.Image`
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
const TimeText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
`;

// @ts-ignore
const HistoryTab: React.FC = ({navigation}) => {
    return (
        <WraperView>
            <HeaderView>
                <TouchableOpacity
                    onPress={() => {
                        navigation.openDrawer();
                    }}>
                    <MenuImage source={ICON.MoreIc}/>
                </TouchableOpacity>
                <HeaderText
                >
                    Lịch Sử
                </HeaderText>
                <TouchableOpacity onPress={() => {
                    navigation.navigate('NewContactScreen');
                }}>
                    <CamImage source={ICON.CamIc}/>
                </TouchableOpacity>
            </HeaderView>
            <ContentView>
              <ContentScrollView>
                {contacts.map(({id, name, phone, time}) => (
                    <ListView key={id}
                    >
                        <LeftItemView>
                            <IconPhoneImage source={ICON.PhoneIc}/>
                            <View>
                                <NameText>
                                    {name}
                                </NameText>
                                <PhoneText>
                                    {phone}
                                </PhoneText>
                            </View>
                        </LeftItemView>
                        <RightItemView
                        >
                            <TimeText>
                                {time}
                            </TimeText>
                            <IconDetailImage
                                source={ICON.DetailIc}
                            />
                        </RightItemView>
                    </ListView>
                ))}
                </ContentScrollView>
            </ContentView>
        </WraperView>
    );
};

export default HistoryTab;
