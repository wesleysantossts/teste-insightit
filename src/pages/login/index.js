import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import DefaultLayout from '../../components/global/defaultLayout';
import InputComponent from '../../components/global/input';
import './styles.css';
import { toast } from 'react-toastify';

const Login = () => {
  const regexNome = /^[ a-zA-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/
  const schema = yup.object().shape({
    nome: yup.string().required('Campo obrigatório').matches(regexNome, 'Números não são permitidos'),
    endereco: yup.string().required('Campo obrigatório'),
    telefone: yup.number().typeError('Insira somente números').required('Campo obrigatório').min(11, 'Digite um telefone válido'),
    email: yup.string().email('Digite um e-mail válido').required('Campo obrigatório'),
    data: yup.date().typeError('Insira uma data válida').required('Campo obrigatório')
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data, e) => {
    e.preventDefault();
    if (data) {
      toast.success('Cadastro realizado com sucesso', {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  return (
    <DefaultLayout fluid>
      <div className='container-formulario p-5 rounded-3 border-0'>
        <h1 className='text-center mt-0'>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

          <InputComponent type='text' id='nome' htmlFor='nome' label='Nome' icon='user' {...register('nome')} errors={errors.nome?.message} />    
          <InputComponent type='text' id='endereco' htmlFor='endereco' label='Endereço' icon='home' {...register('endereco')} errors={errors.endereco?.message} />
          <InputComponent type='number' id='telefone' htmlFor='telefone' label='Telefone' placeholder='(99) 99999-9999' icon='phone' {...register('telefone')} errors={errors.telefone?.message} />
          <InputComponent type='email' id='email' htmlFor='email' label='E-mail' icon='envelope' {...register('email')} errors={errors.email?.message} />
          <InputComponent type='date' id='data' htmlFor='data' label='Data de nascimento' icon='calendar' {...register('data')} errors={errors.data?.message} />    
          <button type='submit' className='btn btn-primary w-100 mt-5 fs-3 fw-bold border-0'>ENVIAR</button>

        </form>
      </div>
    </DefaultLayout>
  )
};

export default Login;