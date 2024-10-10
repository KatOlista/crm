import { Outlet } from 'react-router-dom'

import { Dashboard, Header } from './components'

export const App = () => {
  return (
    <div className='app'>
      <Dashboard />

      <main className='main'>
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
