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
 multiline?: boolean;
}

export default function InputField({
  placeholder, value, onChangeText, isPassword = false, errorMessage, onSubmitEditing, returnKeyType = "default", multiline = false
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
      multiline={multiline}
    />
    { errorMessage && <Styles.ErrorText>{errorMessage || ''}</Styles.ErrorText> }
  </Styles.Container>
 );
}