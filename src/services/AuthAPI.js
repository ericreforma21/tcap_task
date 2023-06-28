import { UsePostApi } from "../services/useApi";

export const authLogin = (data) => UsePostApi({ url: "/auth", data });
