import { Route, Routes as RoutesPrimitive } from 'react-router'
import App from '@/App'
import HomePage from '@/pages/home/HomePage'
import SettingsPage from '@/pages/settings/SettingsPage'

const Routes = () => {
  return (
    <RoutesPrimitive>
      <Route path='/' element={<HomePage />} />
      <Route path='/settings' element={<SettingsPage />} />
      <Route path='/counter' element={<App />} />
      <Route path='*' element={<div>404</div>} />
    </RoutesPrimitive>
  )
}

export default Routes
