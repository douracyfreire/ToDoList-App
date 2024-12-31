import React from "react";
import Styles from "./styles";

interface ButtonProps {
 title?: string;
 icon?: React.ReactNode;
 onPress: () => void;
 disabled?: boolean;
}

export default function Button({
  title, icon, onPress, disabled,
} : ButtonProps){
 return(
  <Styles.Button 
    onPress={onPress}
    disabled={disabled}
  >
    {title && <Styles.ButtonText>{title}</Styles.ButtonText>}
    {icon && <Styles.ButtonIcon>{icon}</Styles.ButtonIcon>}
  </Styles.Button>
 );
}