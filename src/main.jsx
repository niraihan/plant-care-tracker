import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer} from 'react-toastify';

import {
  RouterProvider,
} from "react-router";
import { router } from './routes/Router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
      <Toaster></Toaster>
    </AuthProvider>
  </StrictMode>,
)
