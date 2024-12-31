import styled from "styled-components/native";
import { colors } from "@/styles/theme";

const Container = styled.View<{ completed: boolean }>`
  flex-direction: row;
  background-color: ${({ completed }) => (completed ? colors.gray[100] : colors.gray[300])};
  border: 1px solid ${colors.gray[400]};
  border-radius: 8px;
  align-item: flex-start;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 12px;
`;

const Toggle = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`;

const TaskText = styled.Text<{ completed: boolean }>`
  font-family: 'Inter-Regular';
  font-size: 12px;
  width: 80%;
  color: ${({ completed }) => (completed ? colors.gray[500] : colors.gray[600])};
  text-align: justify;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  margin: 0;
  padding: 0;
`;

const Delete = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
`;

const Styles = {
  Container, Toggle, TaskText, Delete,
}

export default Styles;