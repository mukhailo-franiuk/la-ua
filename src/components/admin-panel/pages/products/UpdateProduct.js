import { useForm } from "react-hook-form";
import { useGetCategoriesQuery } from "../../../../store/categorySlice/categorySlice";
import { useUpdateProductMutation } from "../../../../store/productSlice/productSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
const UpdateProduct = (props) => {
    const { data } = useGetCategoriesQuery();
    const [updateProduct, { isLoading }] = useUpdateProductMutation();
    // Ініціалізація форми зі значеннями продукту, який редагується
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            title: props.oneProduct?.title || '',
            price: props.oneProduct?.price || 0,
            description: props.oneProduct?.description || '',
        }

    });
    // ВАЖЛИВО: Оновлює поля форми, коли props.oneProduct змінюється
    useEffect(() => {
        if (props.oneProduct) {
            reset({
                name: props.oneProduct.name,
                proteins: props.oneProduct.proteins,
                carbohydrates: props.oneProduct.carbohydrates,
                fats: props.oneProduct.fats,
                caloricContent: props.oneProduct.caloricContent,
                size: props.oneProduct.size,
                weight: props.oneProduct.weight,
                imagePath: props.oneProduct.imagePath,
                price: props.oneProduct.price,
                category:props.oneProduct.category,
                description: props.oneProduct.description,
            });
        }
    }, [props.oneProduct, reset]);
    // Функція обробки сабміту
    const UpdateProduct = async (formData) => {
        try {
            // Передаємо ID оригінального продукту та нові дані з форми
            await updateProduct({ id: props.oneProduct.id, ...formData }).unwrap();
            toast.success("Продукт успішно оновлено!");
            reset();
            props.closeModal();
        } catch (error) {
            toast.error("Не вдалося оновити продукт.");
            console.error(error);
        }
    };
    return (
        <div className="relative w-full lg:w-1/4 h-screen  p-4 overflow-y-auto bg-yellow-400">
            <h5 className="inline-flex items-center mb-6 text-sm font-semibold text-gray-900 uppercase w-full">Редагувати продукт</h5>
            <button
                type="button"
                className="text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
                onClick={props.closeModal}
            >
                <svg aria-hidden="true" className="w-5 h-5" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close menu</span>
            </button>
            <form action="#" className="w-full" onSubmit={handleSubmit(UpdateProduct)}>
                <div className="space-y-4 mb-5">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 ">Назва</label>
                        <input
                            type="text"
                            name="title"
                            id="name"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            {...register('name', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="proteins" className="block mb-2 text-sm font-medium text-gray-900 ">Білки</label>
                        <input
                            type="text"
                            name="proteins"
                            id="proteins"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            {...register('proteins', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="carbohydrates" className="block mb-2 text-sm font-medium text-gray-900 ">Вуглеводи</label>
                        <input
                            type="text"
                            name="carbohydrates"
                            id="carbohydrates"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Type product name"
                            {...register('carbohydrates', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="fats" className="block mb-2 text-sm font-medium text-gray-900">Жири</label>
                        <input
                            type="text"
                            name="fats"
                            id="fats"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="Type product name"
                            {...register('fats', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="caloricContent" className="block mb-2 text-sm font-medium text-gray-900 ">Калоріїність</label>
                        <input
                            type="text"
                            name="caloricContent"
                            id="caloricContent"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            {...register('caloricContent', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="size" className="block mb-2 text-sm font-medium text-gray-900 ">Розмір</label>
                        <input
                            type="text"
                            name="size"
                            id="size"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            {...register('size', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900 ">Вага</label>
                        <input
                            type="text"
                            name="weight"
                            id="weight"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Type product name"
                            {...register('weight', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="imagePath" className="block mb-2 text-sm font-medium text-gray-900 ">Картинка</label>
                        <input
                            type="text"
                            name="imagePath"
                            id="imagePath"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                            placeholder="Product brand"
                            {...register('imagePath', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Ціна</label>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                            placeholder="$2999"
                            {...register('price', { required: true })}
                        />
                    </div>
                    <div>
                        <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-900 ">Категорії</label>
                        <select
                            id="category"
                            className="bg-gray-50 border border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                            {...register("category")}
                        >
                            {
                                data?.map(item => (
                                    <option value={item.path} key={item.id}>{item.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Опис</label>
                        <textarea
                            id="description"
                            rows="8"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-500 focus:ring-primary-500 focus:border-primary-500 "
                            placeholder="Enter event description here"
                            {...register('description', { required: true })}
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-center w-full pb-4 space-x-4 sm:px-4 sm:mt-0">
                    <button
                        type="submit"
                        className="w-full justify-center text-white bg-gray-900 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        disabled={isLoading}
                    >
                        {isLoading ? "Збереження..." : "Зберегти"}
                    </button>
                </div>
            </form>
        </div>
    )
}
export default UpdateProduct;