import http from 'src/utils/http'
export const getArtwork = () => http.get<any>('artwork')
export const getDetailArtwork = (id: number) => http.get<any>(`artwork/${id}`)
export const deleteArtwork = (ids: any[]) => {
	return http.delete<any>('artwork', { data: ids })
}
export const postArtwork = (body: any) =>
	http.post<any>('artwork', body, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
export const editArtwork = ({ body, id }: { body: any; id: number }) =>
	http.put<any>(`artwork/${id}`, body, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
