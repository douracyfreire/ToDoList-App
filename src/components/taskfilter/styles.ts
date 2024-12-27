import styled from "styled-components/native";
import { colors } from "@/styles/theme";

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const FilterButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FilterText = styled.Text`
  font-size: 14px;
  font-family: 'Inter-SemiBold';
  color: ${colors.gray[500]};
  margin-right: 8px;
`;

const Badge = styled.Text<{ color: string; textColor: string;}>`
  background-color: ${({ color}) => color};
  color: ${({ textColor }) => textColor};
  font-size: 12px;
  font-family: 'Inter-Bold';
  padding: 0 6px;
  border-radius: 11px;
`;

const Styles = {
  Container, FilterButton, FilterText, Badge,
}

export default Styles;