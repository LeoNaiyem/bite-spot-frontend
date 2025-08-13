import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import Details from '../pages/Details/Details';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/details',
                element:<Details/>
            }

        ]
    }
]);
