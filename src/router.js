import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "./Layout/MainLayout";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {PostPage} from "./pages/PostPage";

 const router = createBrowserRouter([

     {path:'', element:<MainLayout/> ,children:[
             {path:'/todos', element:<TodosPage/>},
             {path:'/albums',element:<AlbumsPage/>},
             {path:'/comments',element:<CommentsPage/>, children:[
                     {path:"posts/:postId", element:<PostPage/>}
                 ]},
         ]}



])

export {router}