import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { clearLS, getAccessTokenToLS, setAccessTokenToLS } from './auth'
import { toast } from 'react-toastify'

class Http {
	instance: AxiosInstance
	private accessToken: string
	constructor() {
		this.accessToken = getAccessTokenToLS()
		this.instance = axios.create({
			baseURL: 'http://localhost:8080/api',
			timeout: 10000,
			headers: {
				'Content-Type': 'application/json'
			}
		})
		this.instance.interceptors.request.use(
			(config) => {
				if (this.accessToken) {
					config.headers.Authorization = `Bearer ${this.accessToken}`
					return config
				}
				return config
			},
			(error) => {
				return Promise.reject(error)
			}
		)
		this.instance.interceptors.response.use(
			(response) => {
				const { url } = response.config
				console.log(url)
				if (url === '/v1/auth/authenticate') {
					const data = response.data as any
					this.accessToken = data?.token
					setAccessTokenToLS(this.accessToken)
				} else if (url === 'logout') {
					this.accessToken = ''
					clearLS()
				}
				return response
			},
			function (error: AxiosError) {
				if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					const data: any | undefined = error.response?.data
					const message = data.message || error.message
					toast.error(message)
				}
				return Promise.reject(error)
			}
		)
	}
}
const http = new Http().instance
export default http
