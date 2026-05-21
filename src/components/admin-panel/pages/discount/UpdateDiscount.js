import { useForm } from "react-hook-form";
import { useUpdateDiscountMutation } from "../../../../store/discountSlice/discountSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
const UpdateDiscount = (props) => {
    
    const {
        register,
        handleSubmit,
        reset,
    } = useForm({
        defaultValues: {
            name: props.oneDiscount?.name || '',
            title: props.oneDiscount?.title || '',
            path: props.oneDiscount?.path || '',
            imagePath: props.oneDiscount?.imagePath || '',
            description: props.oneDiscount?.description || '',
        }
    })
    useEffect(() => {
        if (props.oneDiscount) {
            reset({
                name: props.oneDiscount.name,
                title: props.oneDiscount.title,
                path: props.oneDiscount.path,
                imagePath: props.oneDiscount.imagePath,
                description: props.oneDiscount.description,
            });
        }
    }, [props.oneDiscount, reset]);
    const [updateDiscount] = useUpdateDiscountMutation();

    const updateDiscountForm = async (data) =>{
        await updateDiscount().unwrap();
        toast.success('Акцію оновлено в базу!');
        reset();
        props.closeModal();
    }
    return (
        <div className="relative w-1/4 h-screen  p-4 overflow-y-auto bg-gray-900">
            <h5 className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase w-full">Оновити акцію</h5>
            <button 
            type="button" 
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={props.closeModal}
            >
                <svg aria-hidden="true" className="w-5 h-5" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
            <form action="#" className="w-full" onSubmit={handleSubmit(updateDiscountForm)}>
                <div className="space-y-4 mb-5">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Назва</label>
                        <input 
                        type="text" 
                        name="title" 
                        id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Введіть назву" 
                         {...register('name', {required:true})}
                         />
                    </div>
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Заголовок</label>
                        <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Введіть заголовок" 
                         {...register('title', {required:true})}
                         />
                    </div>
                    <div>
                        <label htmlFor="path" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Посилання</label>
                        <input 
                        type="text" 
                        name="path" 
                        id="path" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
                        placeholder="Введіть посилання" 
                        {...register('path', {required:true})}
                        />
                    </div>
                    <div>
                        <label htmlFor="imagePath" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Картинка</label>
                        <input
                            type="text"
                            name="imagePath"
                            id="imagePath"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Введіть шлях до зображення"
                            {...register('imagePath', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Опис</label>
                        <textarea
                            id="description"
                            rows="8"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Введіть опис акції"
                            {...register('description', { required: true })}
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-center w-full pb-4 space-x-4 sm:px-4 sm:mt-0">
                    <button type="submit" className="w-full justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Зберегти
                    </button>
                </div>
            </form>
        </div>
    )
}
export default UpdateDiscount;