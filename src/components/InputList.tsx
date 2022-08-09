import * as React from "react";
import { memo, useCallback, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { ICON } from "../assets/icons";
import styled from "styled-components/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface InputProps {
  title: string;
  list: string[];
  keyboardType: string;
  setList: (prev: any) => void;
}

export const InputList = memo((props: InputProps) => {

  const [num, setNum] = useState(0);
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const { list, keyboardType, setList, title } = props;


  const deleteInputOnPress = useCallback((index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  }, [list]);
  const addInputOnPress = useCallback(() => {
    setList((prev: any) => prev.concat([""]));
    setFocus(true);

  }, [list,focus]);
  const dateOnchange = useCallback((text: string) => {
    const newList = [...list];
    newList.splice(num, 1, text);
    setList(newList);
    setOpen(false);
    setFocus(false);
  }, [list, num,open,focus]);
  const inputOnChange = useCallback((index: number, text: string) => {
    const newList = [...list];
    newList.splice(index, 1, text);
    setList(newList);
  }, [list]);
  const openDateModal = useCallback((index:number) => {
    setOpen(true);
    setNum(index);
  },[open,num]);

  return (
    <ContainerView>
      {list?.map((item, index) => {
        return (
          <RemoveInfoView key={index}>
            <TouchableOpacity onPress={() => deleteInputOnPress(index)}>
              <REMOVE_ICon>
                <Image source={ICON.REMOVE_IC} />
              </REMOVE_ICon>
            </TouchableOpacity>
            {title == "birthday" ? (<BirthdayView>
              <DateTimePickerModal
                isVisible={open}
                mode="date"
                onConfirm={(date) => {
                  dateOnchange(date.toLocaleDateString());
                }}
                onCancel={() => setOpen(false)}
              />
              <BirthdayTouch onPress={() => openDateModal(index)}>
                <BirthdayText hasDay={list[index]}>
                  {list[index]?.length > 0 ? list[index] : "add birthday"}
                </BirthdayText>
              </BirthdayTouch>
            </BirthdayView>) : (<ContactTextInput
              keyboardType={keyboardType}
              placeholder={`add ${title}`}
              onChangeText={(text: string) => {
                inputOnChange(index, text);
              }}
              value={list[index]}
              autoFocus={focus}
            />)}
          </RemoveInfoView>
        );
      })}
      <AddInfoView onPress={addInputOnPress}>
        <PlusIconImage source={ICON.PLUS_IC} />
        <AddText>add {title}</AddText>
      </AddInfoView>
    </ContainerView>
  );

});
const ContainerView = styled.View`
  width: 100%;
  align-items: center;
`;

const ContactTextInput = styled.TextInput`
  height: 44px;
  width: 100%;
`;

const AddInfoView = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  height: 44px;
  width: 92%;
  margin-bottom: 24px;
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
`;
const PlusIconImage = styled.Image`
  margin-right: 16px;

`;
const RemoveInfoView = styled(AddInfoView)`
  margin-bottom: 0;
`;
const REMOVE_ICon = styled.View`
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
  color: #333333;
`;
const BirthdayView = styled.View`
  width: 100%;
  height: 100%;
`;
const BirthdayText = styled.Text<{ hasDay?: string }>`
  color: ${(props: any) => (props.hasDay ? "#333333" : "#BDBDBD")}
`;
const BirthdayTouch = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
`;




