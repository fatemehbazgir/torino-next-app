import api from "../configs/api";

const fetcher = async () => {
    const data = await api.get("/tour");
    return data.data;

}

export {fetcher}