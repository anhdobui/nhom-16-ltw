import { Link } from 'react-router-dom'
import { DataTableType } from 'src/types/DataTable.type'
type TableViewType = {
	buttonAdd: string
	data: DataTableType
}
function TableView({ buttonAdd, data }: TableViewType) {
	console.log(data)
	return (
		<>
			<div className="flex items-center justify-between">
				<div className="bg-white pb-4 dark:bg-gray-900">
					<label htmlFor="table-search" className="sr-only">
						Search
					</label>
					<div className="relative mt-1">
						<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<svg
								className="h-5 w-5 text-gray-500 dark:text-gray-400"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<input
							type="text"
							id="table-search"
							className="block w-80 rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
							placeholder="Search for items"
						/>
					</div>
				</div>
				<Link
					to="add"
					className="mr-2 mb-2 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
				>
					{buttonAdd}
				</Link>
			</div>
			{data && (
				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
						<thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								<th scope="col" className="p-4">
									<div className="flex items-center">
										<input
											id="checkbox-all-search"
											type="checkbox"
											className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
										/>
										<label htmlFor="checkbox-all-search" className="sr-only">
											checkbox
										</label>
									</div>
								</th>
								{Object.keys(data.label).map((label) => (
									<th key={label} scope="col" className="px-6 py-3">
										{data.label[label]}
									</th>
								))}
								<th scope="col" className="px-6 py-3">
									Thao tác
								</th>
							</tr>
						</thead>
						<tbody>
							{data.dataRow.map((item) => (
								<tr
									key={item.id}
									className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
								>
									<td className="w-4 p-4">
										<div className="flex items-center">
											<input
												id="checkbox-table-search-1"
												type="checkbox"
												className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
											/>
											<label htmlFor="checkbox-table-search-1" className="sr-only">
												checkbox
											</label>
										</div>
									</td>
									{Object.keys(data.label).map((label) => {
										if (label == 'name') {
											return (
												<th
													key={label}
													scope="row"
													className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
												>
													{item['name']}
												</th>
											)
										} else if (label == 'thumbnail') {
											return (
												<td key={label} className="px-6 py-4">
													<img src={`http://localhost:8080${item['thumbnail']}`} alt="" className="h-auto w-9" />
												</td>
											)
										}
										return (
											<td key={label} className="px-6 py-4">
												{item[label]}
											</td>
										)
									})}
									<td className="px-6 py-4">
										<a href="/" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
											Edit
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	)
}

export default TableView
