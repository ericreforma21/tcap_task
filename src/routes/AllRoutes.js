import { useRoutes } from "react-router-dom";
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AllRoutes = () => useRoutes([...PublicRoutes, ...PrivateRoutes]);

export default AllRoutes;
