import React from "react";
import Styles from "./styles";
import { ReturnKeyTypeOptions } from "react-native"; 

interface InputFieldProps {
 placeholder: string;
 value: string;
 onChangeText: (text: string) => void;
 isPassword?: boolean;
 errorMessage?: string;
 onSubmitEditing?: () => void;
 returnKeyType?: ReturnKeyTypeOptions;
}

export default function InputField({
  placeholder, value, onChangeText, isPassword = false, errorMessage, onSubmitEditing, returnKeyType = "default"
} : InputFieldProps){

 return(
  <Styles.Container>
    <Styles.Input 
      placeholder={placeholder}
      secureTextEntry={isPassword}
      value={value}
      onChangeText={onChangeText}
      hasError={!!errorMessage}
      onSubmitEditing = {onSubmitEditing}
      returnKeyType={returnKeyType}
    />
    { errorMessage && <Styles.ErrorText>{errorMessage || ''}</Styles.ErrorText> }
  </Styles.Container>
 );
}