import * as React from "react";
// @ts-ignore
import styled from "styled-components/native";
import {StyleSheet, View,  Image, SafeAreaView} from 'react-native';

import {ICON} from "../assets/icons";
import {IMAGE} from "../assets/imgs";

const collections = [
  {id: 1, name: 'All'},
  {id: 2, name: 'General'},
  {id: 3, name: 'Investors'},
  {id: 4, name: 'Lead'},
  {id: 5, name: 'VIP'},
];
const WraperView = styled.View`
  flex: 1;
  
`;
const DrawewHeaderView = styled.View`
  background-color:#F2A54A ;
  height: 85px;

`;
const ChildView = styled.View`
  flex-direction: row ;
  position: absolute;
  bottom: 0px;
`;
const AvartarImage = styled.Image`
margin-left: 20px;
  margin-right: 12px;
  margin-bottom: 12px;
`;
const UserView = styled.View`
  flex-direction: column ;
`;
const UserNameText = styled.Text`
  font-size:  16px;
  font-weight: 500;
  color :#FFFFFF;
`;
const UserPhoneText = styled.Text`
  font-size:  14px;
  font-weight: 400;
  color :#FFFFFF;
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
`;
const ItemIconImage = styled.Image`
margin-left: 20px;
  margin-right: 20px;
  
`;
const ItemNameText = styled.Text`
  font-size:  15px;
  font-weight: 500;
  color :#333333;
  align-self: center;
`;
const ColectionView = styled.View`
  height: 40px;
  justify-content: center;
  background-color: rgba(242, 165, 74, 0.1);
`;
const DownIconImage = styled.Image`
margin-left: 16px;
  margin-right: 16px;
  top :8px;
`;
const ColectionText = styled.Text`
  font-size:  14px;
  font-weight: 700;
  color :#333333;
`;
const ColectionChildText = styled.Text`
  position: absolute;
  font-size:  13px;
  font-weight: 500;
  color :#F2A54A;
  right: 12px;
`;
const ColectionItemView = styled.View`
  height: 40px;
  justify-content: center;

`;
const Text = styled.Text`
  
`;
const MenuDrawer: React.FC = () => {
  return (
      <WraperView >

        <DrawewHeaderView  >
          <ChildView >
            <AvartarImage
                source={IMAGE.Avartar}

            />
            <UserView >
              <UserNameText >
                {' '}
                Nguyễn Tiến Nam
              </UserNameText>
              <UserPhoneText >
                {' '}
                Admin
              </UserPhoneText>
            </UserView>
          </ChildView>
        </DrawewHeaderView >
        <DrawewContentView >
          <NewColectionView
              >
            <ChildColectionView>
              <ItemIconImage source={ICON.NewIc} />
              <ItemNameText > New collection</ItemNameText>
            </ChildColectionView>
          </NewColectionView>
          <ColectionView
              >
            <ChildColectionView>
              <DownIconImage
                  source={ICON.PlayIc}
              />
              <ColectionText >
                COLLECTIONS
              </ColectionText>
              <ColectionChildText >
                edit
              </ColectionChildText>

            </ChildColectionView>
          </ColectionView>
          <View>
            {collections.map(({id, name}) => (
                <ColectionItemView key={id} >
                  <ChildColectionView style={{flexDirection: 'row'}}>
                    <ItemIconImage source={ICON.ContactIc}  />
                    <ItemNameText > {name} </ItemNameText>
                  </ChildColectionView>
                </ColectionItemView>
            ))}
          </View>
        </DrawewContentView>
      </WraperView>
  );
};


export default MenuDrawer;
