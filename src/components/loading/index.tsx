import { ActivityIndicator } from "react-native";
import Styles from "./styles";
import { colors } from "@/styles/theme";

export default function Loading(){
 return(
  <Styles.Container>
   <ActivityIndicator color={colors.gray[600]}/>
  </Styles.Container>
 );
}
