import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import MainLayout from './layouts/MainLayout'
import Product from './pages/Product'
import Category from './pages/Category'
import User from './pages/User'
import ViewProduct from './pages/Product/ViewProduct'
import FormProduct from './pages/Product/FormProduct'
import ViewCategory from './pages/Category/ViewCategory'
import FormCategory from './pages/Category/FormCategory'
import { TableProvider } from './contexts/table.context'
import { CategoryProvider } from './contexts/category.context'
import Login from './pages/Login/Login'
import { useContext } from 'react'
import { AppContext } from './contexts/app.context'

function ProtectedRoute() {
	const { isAuthenticated } = useContext(AppContext)
	console.log(isAuthenticated)
	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
function RejectedRoute() {
	const { isAuthenticated } = useContext(AppContext)
	console.log(isAuthenticated)
	return !isAuthenticated ? <Outlet /> : <Navigate to="/" />
}
function useRouteElements() {
	const routeElements = useRoutes([
		{
			path: '',
			element: <ProtectedRoute />,
			children: [
				{
					path: '',
					index: true,
					element: (
						<MainLayout>
							<Home />
						</MainLayout>
					)
				},
				{
					path: '/product',
					element: (
						<MainLayout>
							<TableProvider>
								<Product />
							</TableProvider>
						</MainLayout>
					),
					children: [
						{
							path: '',
							index: true,
							element: <ViewProduct />
						},
						{
							path: 'add',
							element: <FormProduct />
						}
					]
				},
				{
					path: '/category',
					element: (
						<MainLayout>
							<CategoryProvider>
								<Category />
							</CategoryProvider>
						</MainLayout>
					),
					children: [
						{
							path: '',
							index: true,
							element: <ViewCategory />
						},
						{
							path: 'add',
							element: <FormCategory />
						}
					]
				},
				{
					path: '/user',
					element: (
						<MainLayout>
							<User />
						</MainLayout>
					)
				}
			]
		},
		{
			path: '',
			element: <RejectedRoute />,
			children: [
				{
					path: '/login',
					element: <Login />
				}
			]
		}
	])
	return routeElements
}

export default useRouteElements
