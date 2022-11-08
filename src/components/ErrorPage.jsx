import { useRouteError } from 'react-router-dom'

export default function ErrorPage(){
    const error = useRouteError();

    return (
        <div className='mt-20 text-center space-y-5'>
            <h1 className='font-black text-6xl text-blue-900'>CRM - Clientes</h1>
            <p className="text-xl">Hubo un error</p>
            <p className='text-xl'>{error.statusText || error.message}</p>
        </div>
    )
}