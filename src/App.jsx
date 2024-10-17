import { Outlet } from 'react-router-dom'

import { Menu, Header } from './components'

export const App = () => {
  return (
    <div className='app'>
      <Menu />

      <main className='main'>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
