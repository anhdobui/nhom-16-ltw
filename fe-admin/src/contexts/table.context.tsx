import { ReactNode, createContext, useState } from 'react'
import { DataTableType } from 'src/types/DataTable.type'

interface TableContextInterface {
	dataTable: DataTableType
	setDataTable: React.Dispatch<React.SetStateAction<DataTableType>>
}
const initialTableContext: TableContextInterface = {
	dataTable: {
		label: {},
		dataRow: []
	},
	setDataTable: () => null
}
export const TableContext = createContext<TableContextInterface>(initialTableContext)

export const TableProvider = ({ children }: { children: ReactNode }) => {
	const [dataTable, setDataTable] = useState<DataTableType>(initialTableContext.dataTable)
	return (
		<TableContext.Provider
			value={{
				dataTable,
				setDataTable
			}}
		>
			{children}
		</TableContext.Provider>
	)
}
