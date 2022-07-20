import * as React from "react";
import { Image, TouchableOpacity, View } from "react-native";

import { ICON } from "../assets/icons";
import { IMAGE } from "../assets/imgs";


// @ts-ignore
import styled from "styled-components/native";
import { useState } from "react";

interface InputProps {
  title :string;
  list: string[];
  keyboardType: string;
  setList: (prev: any) => void;
}

export const InputList: React.FC<InputProps> = (props: InputProps) => {
  const [value, setValue] = useState();
  const { list, keyboardType, setList ,title} = props;
  const deleteInputOnpress = (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };
  const addInputOnpress = () => {
    setList((prev:any) => prev.concat([""]));
  };
  const inputOnChange = (index: number, text) => {
    setValue(text);
    list.splice(index, 1, text);
  };
  return (
    <ContainerView>
      {list.map((item, index) => {
        return (
          <RemoveInfoView key={index}>
            <TouchableOpacity onPress={() => deleteInputOnpress(index)}>
              <RemoveIcon>
                <Image source={ICON.RemoveIc} />
              </RemoveIcon>
            </TouchableOpacity>
            <UserTextInput02
              keyboardType={keyboardType}
              placeholder={`add ${title}`}
              onChangeText={text => inputOnChange(index, text)}
              value={list[index]}
              autoFocus={true}

            />
          </RemoveInfoView>
        );
      })
      }
      <AddInfoView onPress={addInputOnpress}>
        <PlusIconImage source={ICON.BluePlusIc} />

        <AddText>add {title}</AddText>
      </AddInfoView>
    </ContainerView>
  );

};
const ContainerView=styled.View`
width: 100%;
  align-items: center;
`

const UserTextInput02 = styled.TextInput`
  height: 44px;
  width: 100%;
`;

const AddInfoView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 92%;
  margin-bottom: 24px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-width: 0.5px;
`;
const PlusIconImage = styled.Image`
  margin-right: 16px;
  margin-right: 16px;
`;
const RemoveInfoView = styled(AddInfoView)`
  margin-bottom: 0px;
`;
const RemoveIcon = styled.View`
  width: 24px;
  height: 24px;
  border-radius: 50px;
  background-color: red;
  margin-right: 17px;
`;
const AddText = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 22px;
`;


