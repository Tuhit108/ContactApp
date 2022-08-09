import * as React from "react";
import styled from "styled-components/native";
import { View} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { ICON } from "../assets/icons";
import { memo } from "react";
import { TabHeader } from "../components/TabHeader";

export const contacts = [
  { id: 1, name: "Nguyễn Tiến Nam", phone: "0327942405", time: "Hôm nay" },
  { id: 2, name: "Vũ Mạnh Linh", phone: "0327942405", time: "Hôm nay" },
  { id: 3, name: "Trần Thái Hà", phone: "0327942405", time: "Hôm nay" },
  { id: 4, name: "Lê Ngọc Linh", phone: "0327942405", time: "Hôm nay" },
  { id: 5, name: "Trần Kiều Vân", phone: "0327942405", time: "Hôm nay" },
  { id: 6, name: "Kiều Vân Anh", phone: "0327942405", time: "Hôm nay" },
  { id: 7, name: "Thái Thùy Linh", phone: "0327942405", time: "Hôm nay" },
  { id: 8, name: "Nguyễn Nam Tuấn", phone: "0327942405", time: "Hôm nay" },
  { id: 9, name: "Bùi Trọng Tùng", phone: "0327942405", time: "Hôm nay" },
  { id: 10, name: "Bùi Trọng Tùng", phone: "0327942405", time: "Hôm nay" },
  { id: 11, name: "Bùi Trọng Tùs", phone: "0327942405", time: "Hôm nay" },
  { id: 12, name: "Bùi Trọng T", phone: "0327942405", time: "Hôm nay" }
];
const WrapperView = styled.View`
  flex: auto;
  background-color: white;
  padding-top: ${getStatusBarHeight()}px;
`;
const ContentView = styled.View`
  flex: 10;
  width: 100%;
`;
const ContentScrollView = styled.ScrollView`
  flex: 10;
  width: 100%;
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
  top: 0;
  margin-bottom: 24px;
`;
const IconDetailImage = styled.Image`
  margin-left: 29px;
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
  margin-top: 6px;
`;
const TimeText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #828282;
`;


const HistoryScreen = () => {
  return (
    <WrapperView>
      <TabHeader title="Lịch Sử"/>
      <ContentView>
        <ContentScrollView>
          {contacts.map(({ id , name, phone, time }) => (
            <ListView key={id}>
              <LeftItemView>
                <IconPhoneImage source={ICON.PHONE_IC} />
                <View>
                  <NameText>
                    {name}
                  </NameText>
                  <PhoneText>
                    {phone}
                  </PhoneText>
                </View>
              </LeftItemView>
              <RightItemView>
                <TimeText>
                  {time}
                </TimeText>
                <IconDetailImage
                  source={ICON.DETAIL_IC}
                />
              </RightItemView>
            </ListView>
          ))}
        </ContentScrollView>
      </ContentView>
    </WrapperView>
  );
};

export default memo(HistoryScreen);
