import { getCookie } from "@/app/utils/cookie"
import api from "../configs/api";

const getNewTokens = async () => {
    const refreshToken = getCookie("refreshToken");
    console.log(refreshToken);
    if (!refreshToken) return;

    try {
        const response = await api.post("/auth/refresh-token", { refreshToken })
        return { response }
    } catch (error) {
        return { error };
    }
}
export { getNewTokens }