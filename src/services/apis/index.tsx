import axios from "axios"

// const BASE_URL = 'http://localhost:3000'
const BASE_URL = 'http://10.0.2.2:3000'

export const getProductApi = async () =>{
    return await axios.get(`${BASE_URL}/items`)
}

export const createProductApi = async (payload:{name:string; price:string; id:number; img:string}) =>{
    return await axios.post(`${BASE_URL}/items`, payload)
}

export const deleteProductApi = async (id:number) =>{
    return await axios.delete(`${BASE_URL}/items/${id}`)
}