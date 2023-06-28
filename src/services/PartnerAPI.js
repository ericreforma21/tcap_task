import { UseGetApi } from "./useApi";

export const getPartnerNumberBlockList = ({ partnerId, signal }) => UseGetApi({url: `/partner/${partnerId}/numberblocks`, signal })