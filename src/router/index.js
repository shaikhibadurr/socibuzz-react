import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import AuthenticatedRoutes from './AuthenticatedRoutes'
import PublicRoutes from './PublicRoutes'

const Router = () => {
  const { token } = useSelector((state) => state.auth)
  return useRoutes(token ? AuthenticatedRoutes : PublicRoutes)
}

export default Router
