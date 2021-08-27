import axios from 'axios'

export const api = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.VERCEL_URL ||
    'https://pdi-desafio-quadros.herokuapp.com/public/',
})
