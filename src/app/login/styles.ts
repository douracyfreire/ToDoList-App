import styled from "styled-components/native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');

const Container = styled.View`
 flex: 1;
 justify-content: center;
 align-items: center;
 padding: 0 ${width * 0.065}px;
`;

const LoginForm = styled.View`
 width: 100%;
 margin-top: 81px;
 gap: 15px;
`;

const Styles = {
 Container, LoginForm, 
}

export default Styles;