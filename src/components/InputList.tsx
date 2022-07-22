import * as React from "react";
import { Image, Platform, Text, TextInput, TouchableOpacity, View } from "react-native";
import { ICON } from "../assets/icons";
// @ts-ignore
import styled from "styled-components/native";
import { memo, useCallback, useState } from "react";

import DateTimePickerModal from "react-native-modal-datetime-picker";


interface InputProps {
  title: string;
  list: string[];
  keyboardType: string;
  setList: (prev: any) => void;
}

export const InputList: React.FC<InputProps> = (props: InputProps) => {
const [num,setNum]=useState(0)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('');
  const [focus, setFocus] = useState(false);
  const { list, keyboardType, setList, title } = props;



  const deleteInputOnpress =useCallback( (index: number) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  },[list]);
  const addInputOnpress = useCallback(() => {
    setList((prev: any) => prev.concat([""]));
    setValue('')
    setFocus(true);

  },[list]);
  const dateOnchange = (text:string  )=> {

    list.splice(num, 1, text);
  };
  const inputOnChange = (index: number, text:string )=> {
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
            {title=='birthday'?(<BirthdayView >
              <DateTimePickerModal

              isVisible={open}
              mode="date"
              onConfirm={(date) => {dateOnchange( date.toDateString());setOpen(false)}}
              onCancel={()=>setOpen(false)}
              />
              <BirthdayTouch onPress={()=>{setOpen(true);setNum(index)}}>
               <BirthdayText hasday={list[index]}>{list[index].length>0?list[index]: 'add birthday'}</BirthdayText>
              </BirthdayTouch>
            </BirthdayView>):(<UserTextInput02
              keyboardType={keyboardType}
              placeholder={`add ${title}`}
              onChangeText={(text:string) => {inputOnChange(index, text);
              }}
              value={list[index]}
              autoFocus={focus}
            />)}

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
const ContainerView = styled.View`
  width: 100%;
  align-items: center;
`;

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
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
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
  color: #333333;
`;
const  BirthdayView=styled.View`
width: 100%;
height: 100%;
`;
const  BirthdayText=styled.Text<{ hasday?:string }>`
color : ${(props:any) => (props.hasday ? '#333333' : "#BDBDBD")}
`;
const  BirthdayTouch=styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
`;




