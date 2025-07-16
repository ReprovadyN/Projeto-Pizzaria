import type { FormEventHandler } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import './index.css'
import { useNavigate } from "react-router";



const Register = () => {

  const navigate = useNavigate()

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    const values = new FormData(event.target as HTMLFormElement)


    //Validações vão aqui

    const body = {
      name: values.get('name'),
      email: values.get('email'),
      password: values.get('password'),
      document: values.get('document'),
    }

    const request = await fetch('http://localhost:8000/auth/register', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }

    });

    if (!request.ok){
      return;
    }

    navigate('/auth/login')

  }
  return (
    <form onSubmit = {onSubmit}>
      <span>
        Cadastre-se!
      </span>
      <div className="register-form">
        <Input
          placeholder=""
          label="Nome"
          name = "name"
        />
        <Input
          placeholder=""
          label="Usuário"
          name = "document"
        />
        <Input
          placeholder=""
          label="Email"
          name = "email"
        />
        <Input
          placeholder="*********"
          label="Senha"
          name = "password"
        />

        <Button
        >
          <p>Cadastrar</p>
        </Button>
        <p>Ou</p>

        <Button variant={"secondary"}>
          <img src='/images/devicon_google.png'></img>
          <p>Entrar com o Google</p>
        </Button>
      </div>
    </form>
  );
};

export default Register;
