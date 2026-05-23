import { useGetUsersQuery, useDeleteUsersMutation } from "../../../../store/usersSlice/usersSlice";
import toast , {Toaster} from 'react-hot-toast';
const UsersList = () => {
    const { data: users, isLoading, isError } = useGetUsersQuery();
    const [deleteUsers] = useDeleteUsersMutation();

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error occurred while fetching users.</div>;

    return (
        <div className="flex flex-col items-center justify-center py-20 px-4">
            <Toaster
                position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toasterId="default"
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 4000,
                    removeDelay: 1000,
                    style: {
                        background: '#363636',
                        color: '#fff',
                    },

                    // Default options for specific types
                    success: {
                        duration: 3000,
                        iconTheme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4.5 bg-gray-50 p-5 rounded-lg">
                {/* Card  */}
                {users.map((user) => (
                    <div className="flex items-center p-2 border border-black/10 hover:border-black/20 transition-colors rounded-xl w-sm sm:w-[420px] relative" key={user.id}>

                        <div className="ml-4">
                            <h3 className="text-lg text-zinc-900">{user.name}</h3>
                            <p className="text-base text-zinc-600">{user.email}</p>
                            <p className="text-lg text-zinc-900 mt-3">{user.role}</p>
                            <p className={`text-sm text-zinc-600 ${user.dateOfRegistration ? '' : 'hidden'}`}>{user.dateOfRegistration}</p>

                        </div>
                        <button className="absolute right-2 bottom-0 text-sm text-red-500 hover:text-red-700 transition-colors"
                            onClick={() => {
                                (user.role === 'admin') ? toast.error('Не можна видалити адміністратора!') :
                                    deleteUsers(user.id);
                            }}
                        >Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default UsersList;