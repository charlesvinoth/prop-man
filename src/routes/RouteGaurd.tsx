import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { RootState } from '@/stores'

const RouteGaurd = () => {
  const user = useSelector((state: RootState) => state.session.user)
  return user ? <Outlet /> : <Navigate to='/login' />
}

export default RouteGaurd
