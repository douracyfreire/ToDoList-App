import React from "react";
import Styles from "./styles";
import Icons from "@/assets/icons";

interface ModalProps{
  visible: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  visible, title, onClose, children
} : ModalProps){
  return(
    <Styles.Modal visible={visible} transparent animationType="fade">
      <Styles.Overlay>
        <Styles.Container>

          <Styles.Header>
            <Styles.Title>{title}</Styles.Title>
            <Styles.Close onPress={onClose}>
              <Icons.Close />
            </Styles.Close>
          </Styles.Header>

          <Styles.Content>{children}</Styles.Content>
        </Styles.Container>
      </Styles.Overlay>
    </Styles.Modal>
  );
}