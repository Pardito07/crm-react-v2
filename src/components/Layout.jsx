import { Outlet, Link, useLocation } from 'react-router-dom'

function Layout() {

  const location = useLocation();

  return (
    <div className='md:flex md:min-h-screen'>
      <aside className='bg-blue-900 md:w-1/4 px-5 py-10'>
        <h2 className='text-center font-black text-4xl text-white'>CRM - Clientes</h2>

        <nav className='mt-10'>
          <Link to="/" className={`${location.pathname === '/' ? 'text-blue-300' : ''} text-2xl text-white block hover:text-blue-300 mt-2`}>Clientes</Link>
          <Link to="/clientes/nuevo" className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : ''} text-2xl text-white block hover:text-blue-300 mt-2`}>Nuevo Cliente</Link>
        </nav>
      </aside>

      <main className='md:w-3/4 p-10 md:h-screen overflow-scroll' id='contenedor'>
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout
