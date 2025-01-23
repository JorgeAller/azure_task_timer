import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { pages } from '../pages';

const routes: RouteObject[] = [
    {
        path: '/',
        element: pages.home,
    },
];

export const router = createBrowserRouter(routes);