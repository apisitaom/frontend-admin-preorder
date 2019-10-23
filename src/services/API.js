import { Fetch } from './Fetch'
//------------------ ADMIN -------------------
export const login = async(data) => {
    const res = await Fetch("POST", '', '/admin/login', data)
    return res
}
//------------------ SELLER -------------------
export const sellersGet = async (data, token = "") => {
    const res = await Fetch("GET", token, `/seller/all`, data);
    return res;
};

export const sellerRole = async (data, token = "") => {
    const res = await Fetch("POST", token, `/seller/role`, data);
    return res;
};
//------------------ ORDER -------------------
export const getOrder = async (data, token = "") => {
    const res = await Fetch("GET", token, `/admin/order`, data);
    return res;
};
//------------------ SHIPPING -------------------
export const shippigGet = async (data, token = "") => {
    const res = await Fetch("GET", token, `/shipping/lists`, data);
    return res;
};
//------------------ PAYMENT -------------------
export const paymentPaid = async (data, token = "") => {
    const res = await Fetch("GET", token, `/payment/all`, data);
    return res;
};
export const paymentCheck = async (data, token = "") => {
    const res = await Fetch("GET", token, `/payment/admin/check`, data);
    return res;
};
export const paymentRole = async (data, token = "") => {
    const res = await Fetch("POST", token, `/payment/pay`, data);
    return res;
};
//------------------ RECIEVE -------------------
export const shippingRecieve = async (data, token = "") => {
    const res = await Fetch("GET", token, `/shipping/recieve`, data);
    return res;
};

//DASHBOARD-DASHBOARD-DASHBOARD-DASHBOARD-DASHBOARD-DASHBOARD-DASHBOARD

//------------------ CardFrom -------------------
export const totalSale = async (data, token = "") => {
    const res = await Fetch("GET", token, `/admin/sales`, data);
    return res;
};
export const totalSeller = async (data, token = "") => {
    const res = await Fetch("GET", token, `/admin/seller`, data);
    return res;
};
export const totalCustomer = async (data, token = "") => {
    const res = await Fetch("GET", token, `/admin/customer`, data);
    return res;
};
//------------------ LineChart -------------------
export const LineCharts = async (data, token = "") => {
    const res = await Fetch("POST", token, `/admin/graph`, data);
    return res;
};
//------------------ PieChart -------------------
export const PieCharts = async (data, token = "") => {
    const res = await Fetch("POST", token, `/admin/user`, data);
    return res;
};
//------------------ TopReionFrom -------------------
export const topRegion = async (data, token = "") => {
    const res = await Fetch("GET", token, `/admin/provinces`, data);
    return res;
};
//------------------ TopSellerFrom -------------------
export const topSeller = async (data, token = "") => {
    const res = await Fetch("GET", token, `/admin/sellerstop/10`, data);
    return res;
};
//------------------ TopReionPieChart -------------------
export const topPieChart = async (data, token = "") => {
    const res = await Fetch("POST", token, `/admin/customerGroup`, data);
    return res;
};