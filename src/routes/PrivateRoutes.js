import React from 'react';
import PathsURL from '../constants/PathsURL';
import ProtectedRoute from './ProtectedRoute';

const NumberBlockList = React.lazy(() => import("../pages/NumberBlock/NumberBlockList") );

const PublicRoutes = [
  {
    path: PathsURL?.numberBlockList,
    element: <ProtectedRoute><NumberBlockList/></ProtectedRoute>,
  },
]

export default PublicRoutes;