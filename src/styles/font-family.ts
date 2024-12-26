import * as Font from "expo-font";

export const loadFonts = () => {
 return Font.loadAsync({
  'Inter-Bold': require('../assets/fonts/Inter_18pt-Bold.ttf'),
  'Inter-SemiBold': require('../assets/fonts/Inter_18pt-SemiBold.ttf'),
  'Inter-Regular': require('../assets/fonts/Inter_18pt-Regular.ttf'),
 });
}