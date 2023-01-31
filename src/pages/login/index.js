import React from 'react';
import DefaultLayout from '../../components/global/defaultLayout';
import Input from '../../components/global/input';
import './styles.css'

const Login = (props) => {
  const handleSubmit = () => {

  }

  return (
    <DefaultLayout fluid>
      <div className='container-formulario p-5 rounded-3 border-0'>
        <h1 className='text-center mt-0'>Contato</h1>
        <form onSubmit={() => handleSubmit()}>
          <Input type='text' label='Nome' icon='user' />
          <Input type='text' label='Endereço' icon='home' />
          <Input type='number' label='Telefone' placeholder='(99) 9999-9999' icon='phone' />
          <Input type='email' label='E-mail' icon='envelope' />
          <Input type='date' label='Data de nascimento' icon='calendar' />
          <button type='submit' className='btn btn-primary w-100 mt-4 fs-3 fw-bold border-0'>ENVIAR</button>
        </form>
      </div>
    </DefaultLayout>
  )
};

export default Login;