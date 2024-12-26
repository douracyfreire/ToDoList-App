import React from "react";
import Styles from "./styles";

interface InputFieldProps {
 placeholder: string;
 value: string;
 onChangeText: (text: string) => void;
 isPassword?: boolean;
 errorMessage?: string;
}

export default function InputField({
  placeholder, value, onChangeText, isPassword = false, errorMessage,
} : InputFieldProps){

 return(
  <Styles.Container>
    <Styles.Input 
      placeholder={placeholder}
      secureTextEntry={isPassword}
      value={value}
      onChangeText={onChangeText}
      hasError={!!errorMessage}
    />
    { errorMessage && <Styles.ErrorText>{errorMessage || ''}</Styles.ErrorText> }
  </Styles.Container>
 );
}