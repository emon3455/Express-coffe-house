import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AddCoffe from "../pages/addCoffe/AddCoffe";
import UpdateCoffe from "../pages/updateCoffe/UpdateCoffe";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("http://localhost:5000/coffes")
        },
        {
            path: "/addCoffe",
            element: <AddCoffe></AddCoffe>
        },
        {
            path: "/updateCoffe/:id",
            element: <UpdateCoffe></UpdateCoffe>,
            loader: ({params})=> fetch(`http://localhost:5000/coffes/${params.id}`)
        }
      ]
    },
    
]);

export default router;