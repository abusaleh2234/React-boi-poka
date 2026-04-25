import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import BookList from "../Pages/BookList/Booklist";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <h2>Pages Not Found</h2>,
    children: [
        {
            index: true,
            path: "/",
            // loader:() => fetch('data.json'),
            Component: Home
       },
       {
        path: "/book",
        Component: BookList
       },
       {
        path: "/bookDetails/:id",
        loader:() => fetch('data.json'),
        Component: BookDetails
       }
    ]
  },
]);