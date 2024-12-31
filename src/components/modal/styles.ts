import styled from "styled-components/native";
import { colors } from "@/styles/theme";

const Modal = styled.Modal``;

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const Container = styled.View`
  width: 90%;
  background-color: ${colors.gray[100]};
  border: 1px solid ${colors.gray[400]};
  border-radius: 8px;
  padding: 17px 11px;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const Title = styled.Text`
  font-family: 'Inter-SemiBold';
  font-size: 14px;
  color: ${colors.gray[500]};
`;

const Close = styled.TouchableOpacity`
  width: 27px;
  height: 27px;
`;

const Content = styled.View`
`;

const Styles = {
  Modal, Overlay, Container, Header, Title, Close, Content,
};

export default Styles;
