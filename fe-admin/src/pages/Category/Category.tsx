import { useContext, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { HeadingContext } from 'src/contexts/heading.context'

function Category() {
	const { setHeading } = useContext(HeadingContext)
	useEffect(() => {
		setHeading('Tập tranh')
	}, [setHeading])
	return (
		<div className="m-auto mt-5 rounded-lg border-2 border-dashed p-4 ">
			<Outlet />
		</div>
	)
}

export default Category
