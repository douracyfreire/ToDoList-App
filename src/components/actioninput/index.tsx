import React from "react";
import Styles from "./styles";
import InputField from "../inputfield";
import Button from "../button";

interface ActionInputProps{
 value: string;
 onChangeText: (text: string) => void;
 placeholder: string;
 isSecure?: boolean;
 errorMessage?: string;
 buttonIcon: React.ReactNode;
 onButtonPress: () => void;
}

export default function ActionInput({
 value, onChangeText, placeholder, isSecure = false, errorMessage, buttonIcon, onButtonPress,
} : ActionInputProps){

 return(
  <Styles.Container>
   <Styles.InputContainer>
    <InputField 
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      isPassword={isSecure}
      errorMessage={errorMessage}
    />
   </Styles.InputContainer>

   <Styles.ButtonContainer>
    <Button 
      icon={buttonIcon} 
      onPress={onButtonPress}
    />
   </Styles.ButtonContainer>
  </Styles.Container>
 );
}