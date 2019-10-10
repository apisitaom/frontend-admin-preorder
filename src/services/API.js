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
export const sellerRole = async (data, token = "") => {
    const res = await Fetch("POST", token, `/seller/role`, data);
    return res;
};
//------------------ SHIPPING -------------------//
export const shippigGet = async (data, token = "") => {
    const res = await Fetch("GET", token, `/shipping/lists`, data);
    return res;
};
//------------------ PAYMENT -------------------//
export const paymentGet = async (data, token = "") => {
    const res = await Fetch("GET", token, `/payment/all`, data);
    return res;
};
export const paymentCheck = async (data, token = "") => {
    const res = await Fetch("GET", token, `/admin/check`, data);
    return res;
};
export const paymentPay = async (data, token = "") => {
    const res = await Fetch("POST", token, `/payment/pay`, data);
    return res;
};
//------------------ RECIEVE -------------------//
export const paymentRecieve = async (data, token = "") => {
    const res = await Fetch("GET", token, `/shipping/recieve`, data);
    return res;
};