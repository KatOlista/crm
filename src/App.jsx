import { Outlet } from 'react-router-dom'

import { Dashboard } from './components'

export const App = () => {
  return (
    <div className='app'>
      <Dashboard />

      <main>
        <Outlet />
      </main>
    </div>
  )
}
