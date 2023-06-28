import AuthReducer from './Auth/Auth.slice';
import PageReducer from './Page/Page.slice';
import AdminReducer from './Admin/Admin.slice';

const storeReducer = {
  auth: AuthReducer,
  page: PageReducer,
  admin: AdminReducer
};

export default storeReducer;
