import HomePage from '@/app/pages/Home/home'
import NotFoundPage from '@/app/pages/not-found'
import { createBrowserRouter } from 'react-router'


export const router = createBrowserRouter([
     {
          path: '/',
          Component: HomePage
     },
     {
          path: '*',
          Component: NotFoundPage
     }
])