import http from 'src/utils/http'
type LoginType = {
	email: string
	password: string
}
export const login = (body: LoginType) => http.post<any>('/v1/auth/authenticate', body)
