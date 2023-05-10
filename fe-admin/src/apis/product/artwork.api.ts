import http from 'src/utils/http'
export const getArtwork = () => http.get<any>('/artwork')
export const postArtwork = (body: any) =>
	http.post<any>('/artwork', body, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
