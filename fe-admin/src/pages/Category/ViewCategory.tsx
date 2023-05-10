import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useContext, useEffect, useState } from 'react'
import { getCategory } from 'src/apis/product/category.api'
import TableView from 'src/component/TableView'
import { DataTableType } from 'src/types/DataTable.type'

function ViewCategory() {
	const [dataTableCategory, setDataTableCategory] = useState<DataTableType>({
		label: {},
		dataRow: []
	})
	const { data, isLoading } = useQuery({
		queryKey: ['category'],
		queryFn: () => getCategory()
	})
	console.log('data', data)
	useEffect(() => {
		if (!isLoading) {
			const listCat = data?.data?.data.listResult
			const dataTableCategory: DataTableType = {
				label: {
					name: 'Tên tập tranh',
					countArtworks: 'Số tranh',
					createdDate: 'Ngày tạo',
					modifiedDate: 'Ngày sửa'
				},
				dataRow: listCat
			}
			setDataTableCategory(dataTableCategory)
		} else {
			console.log('dang loading')
		}
	}, [isLoading])
	return <TableView data={dataTableCategory} buttonAdd="Thêm mới tập tranh" />
}

export default ViewCategory
