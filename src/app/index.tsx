import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";

export default function Redirect(){
 const router = useRouter();
 const [isReady, setIsReady] = useState(false);

 useEffect(() => {
  setIsReady(true);
 })

 useEffect(() => {
  if(isReady){
   router.replace('/login');
  }
 }, [isReady]);

 return null;
}