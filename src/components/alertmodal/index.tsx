import React from "react";
import Styles from "./styles";

interface AlertModalProps {
  visible: boolean;
  title: string;
  message: string;
  buttonLabel: string;
  onButtonPress: () => void;
}

export default function AlertModal({
  visible, title, message, buttonLabel, onButtonPress
} : AlertModalProps){

  return(
    <Styles.Modal visible={visible} transparent animationType="fade">
      <Styles.Overlay>
        <Styles.Container>
          <Styles.Title>{title}</Styles.Title>
          <Styles.Message>{message}</Styles.Message>

          <Styles.TryAgain onPress={onButtonPress}>
            <Styles.Title>{buttonLabel}</Styles.Title>
          </Styles.TryAgain>
        </Styles.Container>
      </Styles.Overlay>
    </Styles.Modal>
  );
}