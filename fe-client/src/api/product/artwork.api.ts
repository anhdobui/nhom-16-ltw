import http from 'src/utils/http'
export const getArtwork = () => http.get<any>('artwork')
export const getDetailArtwork = (id: number) => http.get<any>(`artwork/${id}`)
