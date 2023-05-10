import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getArtwork } from 'src/apis/product/artwork.api'
import TableView from 'src/component/TableView'
import { DataTableType } from 'src/types/DataTable.type'

function ViewProduct() {
	const [dataTable, setDataTable] = useState<DataTableType>({
		label: {},
		dataRow: []
	})
	const { data, isLoading } = useQuery({
		queryKey: ['artwork', undefined],
		queryFn: () => getArtwork()
	})
	console.log('data artwork', data)
	useEffect(() => {
		if (!isLoading) {
			const listCat = data?.data?.data.listResult
			const dataTable: DataTableType = {
				label: {
					name: 'Tên tranh',
					thumbnail: 'Ảnh đại diện',
					categoryName: 'Nhóm tập tranh',
					price: 'giá',
					createdDate: 'Ngày tạo',
					modifiedDate: 'Ngày sửa'
				},
				dataRow: listCat.map((item: any) => ({
					id: item.id,
					name: item.name,
					thumbnail: item.thumbnailUrl,
					categoryName: item.category?.name,
					price: item.price,
					createdDate: item.createdDate,
					modifiedDate: item.modifiedDate
				}))
			}
			setDataTable(dataTable)
		} else {
			console.log('dang loading')
		}
	}, [isLoading])
	return <TableView data={dataTable} buttonAdd="Thêm mới tranh" />
}

export default ViewProduct
