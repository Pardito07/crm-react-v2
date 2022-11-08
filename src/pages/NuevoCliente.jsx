import { useNavigate, Form, useActionData, redirect } from 'react-router-dom'
import Formulario from '../components/Formulario'
import Error from '../components/Error'
import { agregarCliente } from '../data/clientes'

export async function action({request}){
  const formData = await request.formData();
  
  const datos = Object.fromEntries(formData);

  const errores = [];

  const email = formData.get('email');
  
  if(Object.values(datos).includes('')){
    errores.push('Todos los campos son obligatorios');
  }

  let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

  if(!regex.test(email)){
    errores.push('Email no válido');
  }

  if(Object.keys(errores).length){
    return errores;
  }

  await agregarCliente(datos);
  return redirect('/');
}

const NuevoCliente = () => {

  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h1 className='text-4xl font-black text-blue-900'>Nuevo Cliente</h1>
      <p className='mt-3'>Llena todos los campos para registrar un nuevo cliente</p>

      <div className="flex justify-end">
        <button
          type="button" 
          className="bg-blue-800 text-white uppercase font-bold px-3 py-1"
          onClick={() => navigate(-1)}
        >
          Volver
        </button>
      </div>

      <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
        {errores?.length && errores.map( (error, i) => <Error key={i}>{error}</Error>)}
        <Form
          method='POST'
        >
          <Formulario/>
          <input
            type="submit"
            className='bg-blue-800 text-white text-center text-lg font-bold w-full p-3 mt-5 cursor-pointer'
            value="Registrar Cliente" />
        </Form>
      </div>
    </>
  )
}

export default NuevoCliente