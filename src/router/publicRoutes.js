import Dashboard from 'views/Dashboard'
import { PUBLIC_URLS } from './routeConstants'
import Layout from '@core/layout'

const PublicRoutes = [
  {
    path: PUBLIC_URLS.BASE,
    element: <Layout />,
    children: [
      {
        path: PUBLIC_URLS.BASE,
        element: <Dashboard />,
      },
    ],
  },
]

export default PublicRoutes
