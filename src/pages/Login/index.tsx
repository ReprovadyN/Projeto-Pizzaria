import type { FormEventHandler } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import './index.css'
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate()
  
    const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
      event.preventDefault()
      const values = new FormData(event.target as HTMLFormElement)
  
  
      //Validações vão aqui
  
      const body = {
        email: values.get('email'),
        password: values.get('password'),
      }
  
      const request = await fetch('http://localhost:8000/auth/login', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
  
      });
      const { token } = await request.json();

      localStorage.setItem('token', token);

      const profileRequest = await fetch('http://localhost:8000/auth/profile', {
        headers: {
          "Authorization": "Bearer " + token
        }
      })
      const jsonProfileResponse = await profileRequest.json()

      console.log(jsonProfileResponse)
  
      //navigate('/')
  
    }

  return (
    <form onSubmit = {onSubmit}>
    <div className="login-form">
      <Input 
        placeholder="Email" 
        label=""
        name = "email"
        type = "email"
      />
      <Input 
        placeholder="*********"
        label=""
        name = "password"
        type = "password"
      />

      <div className="actions">
        <a href="/forgot-password">
          Esqueci minha senha
        </a>

        <Button type={'submit'}>
          <p>Acessar</p>
        </Button>
      </div>

      <Button
        variant={"secondary"}
      >
        <p>Não possui conta? Registre-se.</p>
      </Button>
      <p>Ou</p>

      <Button variant={"secondary"}>
        <img src='/images/devicon_google.png'></img><p> </p>
        <p>Entrar com o Google</p>
      </Button>
    </div>
    </form>
  );
};

export default Login;
