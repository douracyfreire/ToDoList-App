import styled from "styled-components/native";
import { colors } from "@/styles/theme";

const Modal = styled.Modal``;

const Overlay = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Container = styled.View`
  width: 90%;
  padding: 33px;
  border-radius: 8px;
  background-color: ${colors.gray[300]};
  align-items:  flex-end;
`;

const Title = styled.Text`
  width: 100%;
  font-family: 'Inter-SemiBold';
  font-size: 14px;
  color: ${colors.gray[500]};
  text-align: center;
`;

const Message = styled.Text`
  width: 100%;
  font-family: 'Inter-Regular';
  font-size: 16px;
  color: ${colors.gray[500]};
  margin-top: 30px;
  text-align: center;
`;

const TryAgain = styled.TouchableOpacity`
  margin-top: 43px;
`;

const Styles = {
  Modal, Overlay, Container, Title, Message, TryAgain,
}

export default Styles;