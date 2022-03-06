import axios, { AxiosInstance } from 'axios'

import storage from './storage'

interface CustomAxiosInstance extends AxiosInstance {
    [key: string]: any
}

interface APIRequestOptions {
    method: string
    route: string
    query?: {
        [key: string]: any
    }
    body?: {
        [key: string]: any
    },
    headers?: {
        [key: string]: any
    },
    store?: boolean
}

const baseURL = 'http://192.168.1.107:3333'

const api: CustomAxiosInstance = axios.create({ baseURL })

api.interceptors.request.use(async config => {
    const token = storage.read('token')

    if (token && config.headers)
        config.headers.authorization = `Bearer ${token}`

    return config
})

export const request = async ({
    method,
    route,
    query,
    body,
    headers,
    store = false
}: APIRequestOptions): Promise<{
    status: number,
    data?: {
        [key: string]: any
    }
} | null> => {
    try {
        if (body) {
            body.params = query
        } else {
            body = {
                params: query
            }
        }

        
        const { status, data } = headers ? await api[method](route, body, headers) : await api[method](route, body)

        if (status === 200) {
            const keys = Object.keys(data)

            if(store) {
                keys.forEach(key => {
                    storage.write(key, data[key])
                })
            }
        }

        return { status, data}
    } catch (err: any) {
        if (err?.response?.data?.message) {
            console.log(`ERRO NO SERVIDOR: ${err?.response?.data?.message}`)
        } else if (err?.message) {
            console.log(`API REQUEST: ERRO DE REQUISIÇÃO >: ${err?.message}`)
        } else {
            console.log('API REQUEST: ERRO NÃO IDENTIFICADO')
        }

        return {
            status: err?.response?.status
        }
    }
}

export default {
    baseURL,
    request
}