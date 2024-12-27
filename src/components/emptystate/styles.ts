import styled from "styled-components/native";
import { colors } from "@/styles/theme";

const Container = styled.View`
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: ${colors.gray[300]};
  height: 185px;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-family: 'Inter-SemiBold';
  font-size: 14px;
  text-align: center;
  color: ${colors.gray[500]};
  margin-top: 16px;
`;

const Subtitle = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 14px;
  text-align: center;
  color: ${colors.gray[500]};
`;

const Styles = {
  Container, Title, Subtitle,
}

export default Styles;