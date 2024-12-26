import React, { useState } from "react";
import { useRouter } from "expo-router";
import Styles from "./styles";
import Icons from "@/assets/icons";
import InputField from "@/components/inputfield";
import Button from "@/components/button";
import ActionInput from "@/components/actioninput";


export default function LoginScreen(){
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string}>({});

  function validate(){
    const newErrors: typeof errors = {};
    if(!username || username.trim() === '') newErrors.username = "Username é obrigatório";
    if(!password || password.trim() === '') newErrors.password = "Senha é obrigatória";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleLogin(){
    if(validate()){
      router.push('/home');
    }
  }

 return(
  <Styles.Container>
   <Icons.Logo />
   
   <Styles.LoginForm>
    <InputField 
      placeholder="Username"
      value={username}
      onChangeText={setUsername}
      errorMessage={errors.username}
    />

    <ActionInput 
      placeholder="Password"
      value={password}
      onChangeText={setPassword}
      isSecure={!passwordVisible}
      buttonIcon={passwordVisible ? <Icons.Eye /> : <Icons.EyeOff />}
      onButtonPress={() => setPasswordVisible(!passwordVisible)}
      errorMessage={errors.password}
    />

    <Button title="Login" onPress={handleLogin}/>
   </Styles.LoginForm>
  </Styles.Container>
 );
}