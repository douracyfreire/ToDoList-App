import React, { useState } from "react";
import { useRouter } from "expo-router";
import Styles from "./styles";
import Icons from "@/assets/icons";
import InputField from "@/components/inputfield";
import Button from "@/components/button";
import ActionInput from "@/components/actioninput";
import { login } from "@/services/taskServices";


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

  async function handleLogin(){
    if(!validate()) return;

    try{
      await login(username, password);
      router.push("/home");
    }  
    catch(error: any){
      if(error.message === "USERNAME_INVALID"){
        setErrors((prev) => ({
          ...prev,
          username: "Username inválido",
          password: undefined,
        }));
      }
      else if(error.message === "PASSWORD_INVALID"){
        setErrors((prev) => ({
          ...prev,
          username: undefined,
          password: "Senha inválida",
        }));
      }
      else{
        setErrors((prev) => ({
          ...prev,
          username: "Erro desconhecido",
          password: "Erro desconhecido",
        }));
      }
    }
  }

 return(
  <Styles.Container>
   <Icons.Logo />
   
   <Styles.LoginForm>
    <InputField 
      placeholder="Username"
      value={username}
      onChangeText={(text) => { 
        setUsername(text);
        setErrors((prev) => ({ ...prev, username: undefined }));
      }}
      errorMessage={errors.username}
    />

    <ActionInput 
      placeholder="Password"
      value={password}
      onChangeText={(text) => { 
        setPassword(text);
        setErrors((prev) => ({ ...prev, password: undefined }));
      }}
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