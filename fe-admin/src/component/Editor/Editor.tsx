/* eslint-disable @typescript-eslint/no-explicit-any */
import { nanoid } from 'nanoid'
import { UseFormRegister } from 'react-hook-form'
interface Props {
	className?: string
	name: string
	placeholder?: string
	register: UseFormRegister<any>
	errorMessage?: string | any
	autoComplete?: string
	label: string
	isrReadonly?: boolean
	isDisabled?: boolean
	rows: number
}
const Editor = ({
	label,
	name,
	register,
	rows,
	autoComplete,
	className,
	errorMessage,
	isDisabled,
	isrReadonly,
	placeholder
}: Props) => {
	const id = nanoid()
	const renderInput = () => {
		return (
			<textarea
				readOnly={isrReadonly}
				disabled={isDisabled}
				autoComplete={autoComplete}
				rows={rows}
				id={id}
				className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
				placeholder={placeholder}
				{...register(name)}
			/>
		)
	}

	return (
		<div className={className}>
			<label htmlFor={id} className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
				{label}
			</label>
			{renderInput()}
			<div className="mt-1 min-h-[1.25rem] text-sm text-red-600">{errorMessage}</div>
		</div>
	)
}

Editor.displayName = 'Editor'
export default Editor
