import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getArtwork } from 'src/api/product/artwork.api'
type ProductType = {
	name: string
	image: string
	price: string
	id: string
}
function ProductList() {
	const [dataPrd, setDataPrd] = useState<ProductType[]>()
	const { data, isLoading } = useQuery({
		queryKey: ['artwork'],
		queryFn: () => getArtwork()
	})
	useEffect(() => {
		if (data) {
			setDataPrd(
				(data?.data.data.listResult as []).map((item: any) => {
					return { name: item?.name, price: item?.price, image: item?.thumbnailUrl, id: item?.id }
				}) as ProductType[]
			)
		}
	}, [isLoading])
	console.log(dataPrd)
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="container  px-6 py-10">
				{/* <h1 className="mx-auto h-2 w-48 rounded-lg bg-gray-200 dark:bg-gray-700">a</h1>

				<p className="mx-auto mt-4 h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700"></p>
				<p className="mx-auto mt-4 h-2 w-64 rounded-lg bg-gray-200 dark:bg-gray-700 sm:w-80"></p> */}
				<div className="grid grid-cols-4 gap-4">
					{dataPrd &&
						Array.from({ length: 4 }).map((_, colIndex) => (
							<div key={colIndex}>
								{dataPrd
									.filter((_, index) => index % 4 === colIndex)
									.map((item) => (
										<div key={item.id} className="mb-4">
											<img className="h-auto max-w-full rounded-lg" src={`http://localhost:8080${item.image}`} alt="" />
										</div>
									))}
							</div>
						))}
				</div>
			</div>
		</section>
	)
}

export default ProductList
