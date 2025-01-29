import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from './config/ReactThemeProvider.tsx'
import { Toaster } from 'sonner'
import ReactQueryClientProvider from './config/ReactQueryClientProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactQueryClientProvider>
      <ThemeProvider>
        <App />
        <Toaster richColors />
      </ThemeProvider>
    </ReactQueryClientProvider>
  </StrictMode>
)
