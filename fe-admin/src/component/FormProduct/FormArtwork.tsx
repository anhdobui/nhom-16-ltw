import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '../Input'
import Select from '../Select'
import InputFile from '../InputFile'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { editArtwork, getArtwork, getDetailArtwork, postArtwork } from 'src/apis/product/artwork.api'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getCategory } from 'src/apis/product/category.api'

// type DataType = {
// 	album: string[]
// 	categoryid: string
// 	height: string
// 	name: string
// 	price: string
// 	thumbnail: string
// 	width: string
// }
// const initialFormData: DataType = {
// 	album: [],
// 	categoryid: '',
// 	"length": '',
// 	name: '',
// 	price: '',
// 	thumbnail: '',
// 	width: ''
// }
type DataDetailArtwType = {
	name: string
	price: string
	categoryid: string
	width: string
	length: string
	thickness: string
}
const initDataDetailArtw: DataDetailArtwType = {
	name: '',
	price: '',
	categoryid: '',
	width: '',
	length: '',
	thickness: ''
}
const schema = yup
	.object({
		name: yup.string().required('Bạn cần nhập tên cho tranh!')
	})
	.required()
function FormArtwork({ id }: { id?: number }) {
	const [dataCat, setDataCat] = useState([])
	const [dataDetailArtw, setDataDetailArtw] = useState<DataDetailArtwType>(initDataDetailArtw)

	const {
		register,
		control,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	})
	const queryClient = useQueryClient()
	const queryCat = useQuery({
		queryKey: ['category'],
		queryFn: () => getCategory()
	})
	const queryPrd = id
		? // eslint-disable-next-line react-hooks/rules-of-hooks
		  useQuery({
				queryKey: ['artwork', id],
				queryFn: () => getDetailArtwork(id)
		  })
		: undefined
	useEffect(() => {
		const listCat = queryCat?.data?.data?.data?.listResult

		setDataCat(
			listCat?.map((item: any) => ({
				value: item.id,
				name: item.name
			}))
		)
	}, [queryCat.isLoading])
	useEffect(() => {
		const data = queryPrd && queryPrd.data?.data
		console.log(data)
		if (data) {
			setDataDetailArtw((prev) => ({
				...prev,
				name: data.name,
				categoryid: data?.category.id,
				length: data['length'],
				width: data.width,
				price: data.price,
				thickness: data.thickness
			}))
		}
	}, [queryPrd?.isLoading])
	useEffect(() => {
		if (dataDetailArtw) {
			setValue('name', dataDetailArtw.name || '')
			setValue('price', dataDetailArtw.price || '')
			setValue('categoryid', dataDetailArtw.categoryid || '')
			setValue('length', dataDetailArtw['length'] || '')
			setValue('width', dataDetailArtw.width || '')
			setValue('thickness', dataDetailArtw.thickness || '')
		}
	}, [dataDetailArtw])
	const navigate = useNavigate()

	const mutationPost = useMutation({
		mutationFn: (body: any) => postArtwork(body),
		onSuccess: (data) => {
			queryClient.invalidateQueries({
				queryKey: ['artwork'],
				exact: true
			})
		}
	})
	const mutationEdit = useMutation({
		mutationFn: ({ body, id }: { body: any; id: number }) => editArtwork({ body, id }),
		onSuccess: (data) => {
			queryClient.setQueryData(['artwork', id], data)
		}
	})
	const onSubmit = handleSubmit((data) => {
		const formData = new FormData()
		formData.append('name', data.name)
		formData.append('price', data.price)
		formData.append('length', data['length'])
		formData.append('width', data.width)
		formData.append('thickness', data.thickness)
		formData.append('categoryid', data.categoryid)
		formData.append('thumbnail', data.thumbnail[0])
		for (let i = 0; i < data.album.length; i++) {
			formData.append('album', data.album[i])
		}
		if (!id) {
			mutationPost.mutate(formData, {
				onSuccess: () => {
					toast.success('Thêm mới tranh thành công!')
					queryClient.invalidateQueries()
					navigate('/product')
				}
			})
		} else {
			mutationEdit.mutate(
				{ body: formData, id },
				{
					onSuccess: () => {
						toast.success('Cập nhật tranh thành công!')
						navigate('/product')
					}
				}
			)
		}
	})
	return (
		<form onSubmit={onSubmit}>
			<div className="mb-6 grid gap-6 md:grid-cols-6 ">
				<Input
					errorMessage={errors?.name?.message}
					label="Tên tranh"
					register={register}
					name="name"
					type="text"
					className="col-span-4"
					placeholder="Mona Lisa"
				/>
				<Select control={control} name="categoryid" className="col-span-2" option={dataCat} />
				<Input label="Giá tiền" register={register} name="price" type="text" className="" placeholder="1000$" />
				<Input label="Chiều rộng (cm)" register={register} name="width" type="number" className="" placeholder="100" />
				<Input label="Chiều dài (cm)" register={register} name="length" type="number" className="" placeholder="200" />
				<Input label="Độ dày (cm)" register={register} name="thickness" type="number" className="" placeholder="5" />
				<InputFile register={register} label="Ảnh đại diện" name="thumbnail" className="col-span-2 row-span-3" />
				<InputFile multiple register={register} label="Album ảnh" name="album" className="col-span-4" />
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

export default FormArtwork
