import SidebarNav from 'src/component/SidebarNav/SidebarNav'

function Sidebar() {
	return (
		<aside
			id="logo-sidebar"
			className="fixed top-0 left-0 z-40 h-screen w-64 -translate-x-full border-r border-gray-200 bg-white pt-20 transition-transform dark:border-gray-700 dark:bg-gray-800 sm:translate-x-0"
			aria-label="Sidebar"
		>
			<div className="h-full overflow-y-auto bg-white px-3 pb-4 dark:bg-gray-800">
				<ul className="space-y-2 font-medium">
					<SidebarNav
						path="/"
						title="Dashboard"
						renderSvg={() => (
							<svg
								aria-hidden="true"
								className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
								<path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
							</svg>
						)}
					/>
					<SidebarNav
						path="/user"
						title="Thành viên"
						renderSvg={() => (
							<svg
								aria-hidden="true"
								className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
							</svg>
						)}
					/>
					<SidebarNav
						menu={[
							{
								title: 'Tranh',
								path: '/product'
							},
							{
								title: 'Tập tranh',
								path: '/category'
							}
						]}
						title="Sản phẩm"
						renderSvg={() => (
							<svg
								aria-hidden="true"
								className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
									clipRule="evenodd"
								/>
							</svg>
						)}
					/>
				</ul>
			</div>
		</aside>
	)
}

export default Sidebar
