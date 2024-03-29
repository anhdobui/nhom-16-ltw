/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldValues, UseFormRegister, useController } from 'react-hook-form'
import { nanoid } from 'nanoid'
interface InputFileInfer {
	className?: string
	label: string
	name: string
	// control: Control<FieldValues>
	multiple?: boolean
	register: UseFormRegister<any>
}
function InputFile({ className, label, register, name, multiple = false }: InputFileInfer) {
	const id = nanoid()

	return (
		<div className={className}>
			<label className="mb-2 block text-sm font-medium text-gray-900 dark:text-white" htmlFor={id}>
				{label}
			</label>
			<div className="flex w-full items-center justify-center">
				<label
					htmlFor={id}
					className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
				>
					<div className="flex flex-col items-center justify-center pt-5 pb-6">
						<svg
							aria-hidden="true"
							className="mb-3 h-10 w-10 text-gray-400"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
							/>
						</svg>
						<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
							<span className="font-semibold">Click to upload</span> or drag and drop
						</p>
						<p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
					</div>
					<input id={id} {...register(name)} type="file" multiple={multiple} className="hidden" />
				</label>
			</div>
		</div>
	)
}

export default InputFile
