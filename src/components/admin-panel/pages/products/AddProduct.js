import { useForm } from "react-hook-form";
import { useAddProductsMutation } from "../../../../store/productSlice/productSlice";
import { useGetCategoriesQuery } from "../../../../store/categorySlice/categorySlice";
import toast from "react-hot-toast";
const AddProduct = (props) => {
    const {
        register,
        handleSubmit,
        reset,
    } = useForm()
    const [addProduct] = useAddProductsMutation();
    const { data } = useGetCategoriesQuery();
    const addProductForm = async (data) => {
       
        await addProduct({
            name: data.name,
            category: data.categories,
            proteins: data.proteins,
            carbohydrates: data.carbohydrates,
            fats: data.fats,
            caloricContent: data.caloricContent,
            size: data.size,
            weight: data.weight,
            price: data.price,
            description: data.description,
            imagePath: data.imagePath
        }).unwrap();
        toast.success('Продукт добавлено в базу!');
        reset();
        props.closeModal();
    }
    return (
        <div className="relative w-1/4 h-screen  p-4 overflow-y-auto bg-gray-900">
            <h5 className="inline-flex items-center mb-6 text-sm font-semibold text-gray-500 uppercase w-full">Добавити продукт</h5>
            <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={props.closeModal}
            >
                <svg aria-hidden="true" className="w-5 h-5" fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
            <form action="#" className="w-full" onSubmit={handleSubmit(addProductForm)}>
                <div class="space-y-4 mb-5">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Назва</label>
                        <input
                            type="text"
                            name="title"
                            id="name"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="proteins" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Білки</label>
                        <input
                            type="text"
                            name="proteins"
                            id="proteins"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            {...register('proteins', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="carbohydrates" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Вуглеводи</label>
                        <input
                            type="text"
                            name="carbohydrates"
                            id="carbohydrates"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            {...register('carbohydrates', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="fats" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Жири</label>
                        <input
                            type="text"
                            name="fats"
                            id="fats"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            {...register('fats', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="caloricContent" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Калоріїність</label>
                        <input
                            type="text"
                            name="caloricContent"
                            id="caloricContent"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            {...register('caloricContent', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Розмір</label>
                        <input
                            type="text"
                            name="size"
                            id="size"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            {...register('size', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Вага</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Type product name"
                            {...register('weight', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="imagePath" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Картинка</label>
                        <input
                            type="text"
                            name="imagePath"
                            id="imagePath"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Product brand"
                            {...register('imagePath', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ціна</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="$2999"
                            {...register('price', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Категорії</label>
                        <select
                            id="category"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            {...register("categories")}
                        >
                            {
                                data?.map(item => (
                                    <option value={item.path}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Опис</label>
                        <textarea
                            id="description"
                            rows="8"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Enter event description here"
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
export default AddProduct;