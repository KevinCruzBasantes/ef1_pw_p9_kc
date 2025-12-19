import axios from "axios";

const consultarApi = async () => {
    const respuesta = await axios.get("https://randomuser.me/api/").then(r => r.data)
    return respuesta;
}
export async function consultarApiFacade() {
    return await consultarApi();
}