import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./Layout/MainLayout";
import {UsersPage} from "./pages/UsersPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {postService} from "./services/postService";
import {PostPage} from "./pages/PostPage";
import {userService} from "./services/usersService";
import {PostDetailsPage} from "./pages/PostDetailsPage";




const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to={'users'} /> },
            { path: 'users', element: <UsersPage /> , loader:()=>userService.getAll()},


            {
                path: 'users/:userId', element: <UserDetailsPage />,
                children: [
                    {path:'posts', element:<PostPage/> }]},


                 {
                        path:'users/:userId/posts/:postId', element:<PostDetailsPage/>, loader:({postId})=>postService.getById(postId),

                  }


        ],
    },
]);

export {
    router
}