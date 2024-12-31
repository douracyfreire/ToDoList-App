import styled from "styled-components/native";
import { colors } from "@/styles/theme";

const Button = styled.TouchableOpacity<{ disabled: boolean}>`
 background-color: ${({ disabled }) => disabled ? colors.gray[500] : colors.purple.dark};
 height: 52px;
 flex-direction: row;
 gap: 10px;
 justify-content: center;
 align-items: center;
 border-radius: 8px;
`;

const ButtonText = styled.Text`
 font-family: 'Inter-Regular';
 font-size: 16px;
 color: ${colors.gray[100]}
`;

const ButtonIcon= styled.View`
`;

const Styles = {
 Button, ButtonText, ButtonIcon,
}

export default Styles;