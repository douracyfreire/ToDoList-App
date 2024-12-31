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
 disabledButton?: boolean;
}

export default function ActionInput({
 value, onChangeText, placeholder, isSecure = false, errorMessage, buttonIcon, onButtonPress, disabledButton,
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
      disabled={disabledButton}
    />
   </Styles.ButtonContainer>
  </Styles.Container>
 );
}