import { ReactNode } from 'react'
import Header from './common/Header'
import Sidebar from './common/Sidebar'
import Body from './common/Body'
import FormChat from 'src/component/FormChat'
import ComponentPortal from 'src/component/ComponentPortal/ComponentPortal'
import Chat from 'src/component/FormChat'
import { HeadingProvider } from 'src/contexts/heading.context'

type MainLayoutType = {
	children?: ReactNode
}
function MainLayout({ children }: MainLayoutType) {
	return (
		<div>
			<Header />
			<Sidebar />
			<HeadingProvider>
				<Body>{children}</Body>
			</HeadingProvider>
		</div>
	)
}

export default MainLayout
