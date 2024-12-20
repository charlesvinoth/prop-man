import { Route, Routes as RoutesPrimitive } from 'react-router'
import App from '@/App'
import AuthLayout from '@/layouts/auth/AuthLayout'
import NotFoundPage from '@/pages/404/NotFoundPage'
import ForgotPasswordPage from '@/pages/forgot-password/ForgotPasswordPage'
import HomePage from '@/pages/home/HomePage'
import LoginPage from '@/pages/login/LoginPage'
import SettingsPage from '@/pages/settings/SettingsPage'
import SignUpPage from '@/pages/sign-up/SignUpPage'

const Routes = () => {
  return (
    <RoutesPrimitive>
      <Route path='/' element={<HomePage />} />
      <Route path='/settings' element={<SettingsPage />} />
      <Route path='/counter' element={<App />} />

      <Route element={<AuthLayout />}>
        <Route index path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      </Route>

      <Route path='*' element={<NotFoundPage />} />
    </RoutesPrimitive>
  )
}

export default Routes
