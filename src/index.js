import React, { Suspense, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import store from './redux/store'
import { Provider } from 'react-redux'
import ThemeComponent from '@core/theme/ThemeComponent'
import { BrowserRouter } from 'react-router-dom'
import { BASE_URL } from 'router/routeConstants'
import Loader from '@core/components/loading/Loader'

const LazyApp = lazy(() => import('./App'))

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_URL}>
      <Provider store={store}>
        <Suspense fallback={<Loader />}>
          <ThemeComponent>
            <LazyApp />
          </ThemeComponent>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
