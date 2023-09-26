import Dashboard from 'views/Dashboard'
import { PUBLIC_URLS } from './routeConstants'

const PublicRoutes = [
  {
    path: PUBLIC_URLS.BASE,
    element: <Dashboard />,
  },
]

export default PublicRoutes
