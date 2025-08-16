import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import Contact from '../pages/Contact/Contact';
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
                path:'/contact',
                element:<Contact/>
            }

        ]
    }
]);
