import { ReactNode } from 'react'
import { createPortal } from 'react-dom'

type PropType = {
	children: ReactNode
}
function ComponentPortal({ children }: PropType) {
	return createPortal(<div>{children}</div>, document.body)
}

export default ComponentPortal
