import AuthLayout from '@/app/pages/auth/authLayout';
import LoginPage from '@/app/pages/auth/login/loginPage';
import RegisterPage from '@/app/pages/auth/register/registerPage';
import HomePage from '@/app/pages/Home/home';
import MainLayout from '@/app/pages/layout';
import NotFoundPage from '@/app/pages/not-found';
import Documentation from '@/app/pages/Playground/Documentation';
import PlaygroundPage from '@/app/pages/Playground/Playground';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: HomePage, // Tetap menggunakan `Component`
    },
    {
          Component: AuthLayout,
          children: [
               {
                    path: '/login',
                    Component: LoginPage
               },
               {
                    path: '/register',
                    Component: RegisterPage
               }
          ]
    },
    {
        Component: MainLayout, // Menggunakan komponen yang diekspor default
        children: [
            {
                path: '/playground',
                Component: PlaygroundPage,
            },
            {
                path: '/playground/documentation',
                Component: Documentation,
            },
        ],
    },
    {
        path: '*',
        Component: NotFoundPage,
    },
]);
