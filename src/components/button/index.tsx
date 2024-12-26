import React from "react";
import Styles from "./styles";

interface ButtonProps {
 title?: string;
 icon?: React.ReactNode;
 onPress: () => void;
}

export default function Button({
  title, icon, onPress
} : ButtonProps){
 return(
  <Styles.Button onPress={onPress}>
    {icon && <Styles.ButtonIcon>{icon}</Styles.ButtonIcon>}
    {title && <Styles.ButtonText>{title}</Styles.ButtonText>}
  </Styles.Button>
 );
}