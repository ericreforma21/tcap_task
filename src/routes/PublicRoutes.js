import React from 'react';
import { Navigate } from 'react-router-dom';
import PathsURL from '../constants/PathsURL';

const AuthPage = React.lazy(() => import('../pages/AuthPage/AuthPage'));

const PublicRoutes = [
  {
    path: '/',
    element: <Navigate to='/login' />,
  },
  {
    path: PathsURL?.login,
    element: <AuthPage />,
  },
  {
    path: PathsURL?.register,
    element: <AuthPage />,
  },

]

export default PublicRoutes;