import http from 'src/utils/http'
export const getCategory = () => http.get<any>('category')
export const postCategory = (body: any) => http.post<any>('category', body)
