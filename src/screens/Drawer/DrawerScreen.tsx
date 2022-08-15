import * as React from "react";
import { memo, useCallback, useState } from "react";
import styled from "styled-components/native";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { statusBarHeight } from "@/themes/styles";
import { IC_CONTACT, IC_DROPDOWN, IC_NEW_COLLECTION, IMG_USER_AVATAR } from "@/assets";


const DrawerScreen = () => {
  const [showCollection, setShowCollection] = useState(false);
  const onShowCollection = useCallback(() => {
    setShowCollection(!showCollection);
  }, [showCollection]);
  return (
    <WrapperView>
      <DrawerHeaderView>
        <ChildView>
          <AvatarImage
            source={IMG_USER_AVATAR}
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
      </DrawerHeaderView>
      <ScrollView>
        <DrawerContentView>
          <NewCollectionView>
            <ChildCollectionView>
              <AddCollectionIcon source={IC_NEW_COLLECTION} />
              <ItemNameText> New collection </ItemNameText>
            </ChildCollectionView>
          </NewCollectionView>
          <CollectionView>
            <TouchableOpacity onPress={onShowCollection}>
              <ChildCollectionView>
                <DownIconImage
                  style={{ transform: [{ rotate: showCollection ? "0deg" : "-90deg" }] }}
                  source={IC_DROPDOWN}
                />
                <CollectionText>
                  COLLECTIONS
                </CollectionText>
              </ChildCollectionView>
            </TouchableOpacity>
            <CollectionChildText>
              Edit
            </CollectionChildText>
          </CollectionView>
          {showCollection ? (
            <View>
              {collections.map(({ id, name }) => (
                <CollectionItemView key={id}>
                  <ChildCollectionView>
                    <ItemIconImage source={IC_CONTACT} />
                    <ItemNameText> {name} </ItemNameText>
                  </ChildCollectionView>
                </CollectionItemView>
              ))}
            </View>
          ) : null}
        </DrawerContentView>
      </ScrollView>
    </WrapperView>
  );
};
const collections = [
  { id: 1, name: "All" },
  { id: 2, name: "General" },
  { id: 3, name: "Investors" },
  { id: 4, name: "Lead" },
  { id: 5, name: "VIP" }
];
const WrapperView = styled.View`
  flex: 1;
`;
const DrawerHeaderView = styled.View`
  background-color: #F2A54A;
  height: ${statusBarHeight + 60}px;
`;
const ChildView = styled.View`
  flex-direction: row;
  position: absolute;
  bottom: 0;
`;
const AvatarImage = styled.Image`
  width: 40px;
  height: 40px;
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
const DrawerContentView = styled.View`

`;
const NewCollectionView = styled.View`
  height: 60px;
  justify-content: center;
  background-color: #FFFFFF;
`;
const ChildCollectionView = styled.View`
  flex-direction: row;
  align-items: center;
  height: 44px;
`;
const ItemIconImage = styled.Image`
  margin-left: 20px;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  tint-color : #F2A54A
`;
const AddCollectionIcon = styled(ItemIconImage)`
  width: 16px;
  height: 16px
`
const ItemNameText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #333333;
  align-self: center;
  line-height: 16px;
  letter-spacing: 0.12px;
`;
const CollectionView = styled.View`
  height: 44px;
  justify-content: center;
  background-color: rgba(242, 165, 74, 0.1);
`;

const DownIconImage = styled.Image`
  margin-left: 20px;
  margin-right: 16px;

`;
const CollectionText = styled.Text`
  font-size: 13px;
  font-weight: 700;
  color: #333333;
  line-height: 16px;
  letter-spacing: 0.12px;
  text-transform: uppercase;
`;
const CollectionChildText = styled.Text`
  position: absolute;
  font-style: normal;
  font-size: 13px;
  line-height: 16px;
  font-weight: 500;
  color: #F2A54A;
  right: 12px;
`;
const CollectionItemView = styled.View`
  height: 40px;
  justify-content: center;

`;

export default memo(DrawerScreen);
