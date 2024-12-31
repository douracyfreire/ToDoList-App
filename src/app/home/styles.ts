import styled from "styled-components/native";
import { colors } from "@/styles/theme";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const Container = styled.View`
 flex: 1;
`;

const Header = styled.View`
  width: 100%;
  height: 173px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.gray[300]};
`;

const Logout = styled.TouchableOpacity`
  position: absolute;
  width: 26px;
  height: 26px;
  justify-content: center;
  align-items: center;
  top: 20px;
  right: 20px;
`;

const Main = styled.View`
  top: -26px;
  padding: 0 ${width * 0.065}px;
`;

const TasksContent = styled.View`
  margin-top: 34px;
  gap: 20px;
`;

const TaskItems = styled.ScrollView`
  height: ${height * 0.65};
`;

const AddTask = styled.View`
  position: absolute;
  width: 110px;
  bottom: ${width * 0.065}px;
  right: ${width * 0.065}px;
`;

const TaskDetails = styled.Text`
  font-family: 'Inter-Regular';
  font-size: 12px;
  color: ${colors.gray[600]}
`;

const ButtonRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 26px;
  gap: 2%;

`;

const ButtonItem = styled.View`
  flex: 1;
`;

const Styles = {
 Container, Header, Logout, Main, TasksContent, TaskItems, AddTask, TaskDetails, ButtonRow, ButtonItem,
}

export default Styles;