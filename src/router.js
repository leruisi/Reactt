import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./Layout/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {PostPage} from "./pages/PostPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {postService} from "./services/postService";


const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UsersPage/>},
            {
                path: '/user-details/:id', element: <UserDetailsPage/>, children: [
                    {path: ':userId', element: <PostPage/>, loader: ({params:{userId}})=>postService.getByUserId(userId)}
                ]
            }
        ]
    }
]);

export {
    router
}