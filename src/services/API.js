import { Fetch, FetchForm } from './Fetch'

export const login = async(data) => {
    const res = await Fetch("POST", '', '/admin/login', data)
    return res
}