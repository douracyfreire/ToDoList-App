import styled from "styled-components/native";
import { colors } from "@/styles/theme";

const Container = styled.View`
 flex-direction: row;
 gap: 2%;
`;

const InputContainer = styled.View`
 flex: 82;
`;

const ButtonContainer = styled.View`
 flex: 16;
`;

const Styles = {
 Container, InputContainer, ButtonContainer,
}

export default Styles;