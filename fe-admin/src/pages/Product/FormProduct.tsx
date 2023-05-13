import { useLocation, useParams } from 'react-router-dom'
import FormArtwork from 'src/component/FormProduct/FormArtwork'

function FormProduct() {
	const { id } = useParams()
	console.log(Number(id))
	return (
		<>
			<FormArtwork id={Number(id)} />
		</>
	)
}

export default FormProduct
