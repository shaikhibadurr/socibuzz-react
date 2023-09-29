import { useSelector } from 'react-redux'
import { useRoutes } from 'react-router-dom'
import AuthenticatedRoutes from './authenticatedRoutes'
import PublicRoutes from './publicRoutes'

const Router = () => {
  const { token } = useSelector((state) => state.auth)
  return useRoutes(token ? AuthenticatedRoutes : PublicRoutes)
}

export default Router
