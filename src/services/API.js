import { Fetch, FetchForm } from './Fetch'
//------------------ ADMIN -------------------//
export const login = async(data) => {
    const res = await Fetch("POST", '', '/admin/login', data)
    return res
}
//------------------ SELLER -------------------//
export const sellersGet = async (data, token = "") => {
    const res = await Fetch("GET", token, `/seller/all`, data);
    return res;
};
export const sellerGet = async (data) => {
    console.log(data);
    const res = await Fetch("GET", `/seller/list/`, `${data.id}`);
    return res;
};
