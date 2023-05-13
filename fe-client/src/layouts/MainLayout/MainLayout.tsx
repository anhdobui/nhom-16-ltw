import { ReactNode } from 'react'
import Header from 'src/component/Header'

interface Props {
	children?: ReactNode
}
function MainLayout({ children }: Props) {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default MainLayout
