import { Navigate, Outlet } from "react-router-dom";

// Імітація отримання користувача (замініть на ваш Context, Redux або localStorage)
const getLoggedUser = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null; // має повертати об'єкт { role: "admin" } або { role: "user" }
};

const ProtectedRoute = ({ allowedRoles }) => {
    const user = getLoggedUser();

    // 1. Якщо взагалі не авторизований -> на логін
    if (!user) {
        return <Navigate to="/login" replace />;
    }

    // 2. Якщо авторизований, але роль не збігається -> на головну або сторінку 403
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    // 3. Якщо все добре -> рендеримо вкладені роути (через Outlet)
    return <Outlet />;
};

export default ProtectedRoute;
