import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import MainLayout from './layouts/MainLayout'

function useRouteElements() {
	const routeElements = useRoutes([
		{
			path: '/',
			element: (
				<MainLayout>
					<ProductList />
				</MainLayout>
			)
		}
	])
	return routeElements
}

export default useRouteElements
