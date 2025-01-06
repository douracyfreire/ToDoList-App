import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { colors, loadFonts } from "@/styles/theme";
import Loading from "@/components/loading";


export default function Layout(){
 const [fontsLoaded, setFontsLoaded] = useState(false);

 useEffect(() => {
  load();
 });

 const load = async () => {
  await loadFonts();
  setFontsLoaded(true);
 }

 if(!fontsLoaded){
  return <Loading />
 }

 return <Stack 
  screenOptions={{
   headerShown: false,
   contentStyle: { backgroundColor: colors.gray[100] }
 }}/>;
}