import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppProvider } from './contexts/app.context'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<BrowserRouter>
		<QueryClientProvider client={queryClient}>
			<AppProvider>
				<App />
			</AppProvider>
		</QueryClientProvider>
	</BrowserRouter>
	// </React.StrictMode>
)
