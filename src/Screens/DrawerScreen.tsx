import * as React from "react";
import { memo } from "react";
// @ts-ignore
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";
import { statusBarHeight } from "../themes/styles";

const collections = [
  { id: 1, name: "All" },
  { id: 2, name: "General" },
  { id: 3, name: "Investors" },
  { id: 4, name: "Lead" },
  { id: 5, name: "VIP" }
];
const WraperView = styled.View`
  flex: 1;
`;
const DrawewHeaderView = styled.View`
  background-color: #F2A54A;
  height: ${statusBarHeight + 60}px;
`;
const ChildView = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;
const AvatarImage = styled.Image`
  margin-left: 20px;
  margin-right: 12px;
  margin-bottom: 12px;
`;
const UserView = styled.View`
  flex-direction: column;
`;
const UserNameText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  letter-spacing: 0.12px;
  color: #FFFFFF;
`;
const UserPhoneText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.12px;
  color: #FFFFFF;
  margin-top: 3px;
`;
const DrawewContentView = styled.View`

`;
const NewColectionView = styled.View`
  height: 60px;
  justify-content: center;
  background-color: #FFFFFF;
`;
const ChildColectionView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 44px;
`;
const ItemIconImage = styled.Image`
  margin-left: 20px;
  margin-right: 20px;

`;
const ItemNameText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #333333;
  align-self: center;
  line-height: 16px;
  letter-spacing: 0.12px;
`;
const ColectionView = styled.View`
  height: 44px;
  justify-content: center;
  background-color: rgba(242, 165, 74, 0.1);
`;

const DownIconImage = styled.Image`
  margin-left: 20px;
  margin-right: 16px;

`;
const ColectionText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: #333333;
  line-height: 16px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
`;
const ColectionChildText = styled.Text`
  position: absolute;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: #F2A54A;
  right: 12px;
`;
const ColectionItemView = styled.View`
  height: 40px;
  justify-content: center;

`;

const DrawerScreen: React.FC = () => {
  const [showColection, setShowColection] = React.useState(false);
  return (
    <WraperView>
      <DrawewHeaderView>
        <ChildView>
          <AvatarImage
            source={IMAGE.Avatar}
          />
          <UserView>
            <UserNameText>

              Nguyễn Tiến Nam
            </UserNameText>
            <UserPhoneText>

              Admin
            </UserPhoneText>
          </UserView>
        </ChildView>
      </DrawewHeaderView>
      <ScrollView>
        <DrawewContentView>
          <NewColectionView
          >
            <ChildColectionView>
              <ItemIconImage source={ICON.NewIc} />
              <ItemNameText> New collection</ItemNameText>
            </ChildColectionView>
          </NewColectionView>
          <ColectionView
          >
            <TouchableOpacity onPress={() => setShowColection(!showColection)}>
              <ChildColectionView>
                <DownIconImage
                  style={{ transform: [{ scaleY: showColection ? 1 : -1 }] }}
                  source={ICON.PlayIc}
                />
                <ColectionText>
                  COLLECTIONS
                </ColectionText>
              </ChildColectionView>
            </TouchableOpacity>
            <ColectionChildText>
              Edit
            </ColectionChildText>
          </ColectionView>
          {showColection ? (
            <View>
              {collections.map(({ id, name }) => (
                <ColectionItemView key={id}>
                  <ChildColectionView style={{ flexDirection: "row" }}>
                    <ItemIconImage source={ICON.ContactIc} />
                    <ItemNameText> {name} </ItemNameText>
                  </ChildColectionView>
                </ColectionItemView>
              ))}
            </View>
          ) : null}
        </DrawewContentView>
      </ScrollView>
    </WraperView>
  );
};


export default memo(DrawerScreen);
