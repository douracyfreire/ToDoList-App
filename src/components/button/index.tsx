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
    {title && <Styles.ButtonText>{title}</Styles.ButtonText>}
    {icon && <Styles.ButtonIcon>{icon}</Styles.ButtonIcon>}
  </Styles.Button>
 );
}