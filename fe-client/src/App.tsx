import useRouteElements from './useRouteElements'
function App() {
	const routeElements = useRouteElements()
	return <div className="App">{routeElements}</div>
}

export default App
