import styled from "styled-components/native";
import { colors } from "@/styles/theme";

const Container = styled.View`
`;

const Input = styled.TextInput<{ hasError: boolean }>`
 height: 52px;
 border: 2px solid ${({ hasError }) => (hasError ? colors.danger : colors.gray[300])};
 background-color: ${colors.gray[100]};
 border-radius: 8px;
 padding: 0 18px;
 font-family: 'Inter-Regular';
 font-size: 16px;
 color: ${colors.gray[500]};
`;

const ErrorText = styled.Text`
  margin-top: 8px;
  font-family: 'Inter-Bold';
  font-size: 12px;
  color: ${colors.danger};
`;

const Styles = {
 Container, Input, ErrorText,
};

export default Styles;