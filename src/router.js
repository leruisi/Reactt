import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./Layout/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {postService} from "./services/postService";
import {userDetailsService} from "./services/userDetailsService";
import {Posts} from "./components/Posts";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to={'users'} /> },
            { path: 'users', element: <UsersPage /> },
            {
                path: '/user-details/:id',
                element: <UserDetailsPage />,
                loader: ({ params: { id } }) => userDetailsService.getById(id),
                children: [
                    {path:'posts', element:<Posts/>, loader:({params:{id}})=>postService.getByUserId(id)}
                ],
            },
        ],
    },
]);

export {
    router
}