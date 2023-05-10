import { ReactNode, createContext, useState } from 'react'

interface CategoryContextInterface {
	isLoad: boolean
	setIsLoad: React.Dispatch<React.SetStateAction<boolean>>
}
const initialCategoryContext: CategoryContextInterface = {
	isLoad: false,
	setIsLoad: () => null
}
export const CategoryContext = createContext<CategoryContextInterface>(initialCategoryContext)
export const CategoryProvider = ({ children }: { children: ReactNode }) => {
	const [isLoad, setIsLoad] = useState<boolean>(initialCategoryContext.isLoad)
	return (
		<CategoryContext.Provider
			value={{
				isLoad,
				setIsLoad
			}}
		>
			{children}
		</CategoryContext.Provider>
	)
}
