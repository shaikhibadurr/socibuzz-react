import Dashboard from '../views/Dashboard'
import { AUTHENTICATED_URLS } from './routeConstants'
const AuthenticatedRoutes = [
  {
    path: AUTHENTICATED_URLS.DASHBOARD,
    element: <Dashboard />,
  },
]

export default AuthenticatedRoutes
