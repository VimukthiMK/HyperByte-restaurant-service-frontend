import axios from "axios"

const ApiRequest = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export default ApiRequest