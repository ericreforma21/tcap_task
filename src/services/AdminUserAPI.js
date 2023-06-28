import { UseGetApi } from "./useApi";

export const getCurrentAdminUser = () => UseGetApi({url: '/AdminUser/Me' });