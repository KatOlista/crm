import {
  Route,
  Routes,
  Navigate,
  HashRouter as Router,
} from 'react-router-dom'

import {
  CustomersPage,
  DashboardPage,
  HelpPage,
  IncomePage,
  NotFoundPage,
  ProductPage,
  PromotePage
} from './pages'

import { App } from './App'

export const Root = () => (
  <Router>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<CustomersPage />} />

        <Route path='dashboard' element={<DashboardPage />} />

        <Route path='product' element={<ProductPage />} />

        <Route path='income' element={<IncomePage />} />

        <Route path='promote' element={<PromotePage />} />

        <Route path='help' element={<HelpPage />} />

        <Route path='/home' element={<Navigate to="/" replace />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
)
