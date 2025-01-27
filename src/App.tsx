
import { RouterProvider } from 'react-router'
import './App.css'
import { router } from './routes/router'

export default function App(){
  return <RouterProvider router={router} />
}
