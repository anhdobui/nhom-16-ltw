import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../Input'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { useRef } from 'react'
import Editor from '../Editor/Editor'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postCategory } from 'src/apis/product/category.api'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const schema = yup
	.object({
		name: yup.string().required('Bạn cần nhập tên cho tập tranh!')
	})
	.required()
function FormCat() {
	const queryClient = useQueryClient()
	const navigate = useNavigate()
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})
	const mutation = useMutation({
		mutationFn: (body: any) => postCategory(body)
	})

	const uncontrolledInputRef = useRef<HTMLInputElement>(null)
	const onSubmit = handleSubmit((data) => {
		data.code = uncontrolledInputRef.current?.value
		mutation.mutate(data, {
			onSuccess: () => {
				toast.success('Thêm mới tập tranh thành công')
				queryClient.invalidateQueries({ queryKey: ['category'], exact: true })
				navigate('/category')
			}
		})
	})
	return (
		<form onSubmit={onSubmit}>
			<div className="mb-6 grid gap-6 md:grid-cols-6">
				<Input
					errorMessage={errors?.name?.message}
					label="Tên tập tranh"
					register={register}
					name="name"
					type="text"
					className="col-span-4"
					placeholder="Paintings"
				/>
				<Input
					errorMessage={errors?.code?.message}
					label="Mã code"
					name="code"
					type="text"
					value={watch('name') ? watch('name').split(' ').join('-') : ''}
					className="col-span-2"
					placeholder="tag-code"
					ref={uncontrolledInputRef}
					isrReadonly
				/>
				<Editor
					errorMessage={errors?.shortDescription?.message}
					label="Mô tả ngắn"
					register={register}
					name="shortDescription"
					rows={4}
					className="col-span-6"
					placeholder="Mô tả ngắn"
				/>
				<Editor
					errorMessage={errors?.description?.message}
					label="Nội dung"
					register={register}
					name="description"
					rows={6}
					className="col-span-6"
					placeholder="Nội dung chi tiết"
				/>
			</div>
			<button
				type="submit"
				className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
			>
				Submit
			</button>
		</form>
	)
}

export default FormCat
