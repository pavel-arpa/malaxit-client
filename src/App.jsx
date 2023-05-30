import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppRoute } from './utils/constants';
import Auth from './pages/Auth/Auth';
import { useContext, useEffect, useState } from 'react';
import { check } from './api/userAPI';
import { AppContext } from '.';
import Account from './pages/Account/Account';
import Setup from './pages/Setup/Setup';
import { observer } from 'mobx-react-lite';
import FullscreenSpinner from './components/ui/FullscreenSpinner';
import Editor from './pages/Editor/Editor';
import ErrorPage from './pages/ErrorPage/ErrorPage';


const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <></>,
    },
    {
        path: AppRoute.LOGIN,
        element: <Auth />,
    },
    {
        path: AppRoute.REGISTRATION,
        element: <Auth />,
    },
    {
        path: AppRoute.ACCOUNT,
        element: <Account />,
    },
    {
        path: AppRoute.SETUP,
        element: <Setup />,
    },
    {
        path: AppRoute.EDITOR + '/:siteId',
        element: <Editor />,
    },
])

const App = observer(() => {
    const { user } = useContext(AppContext)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const verifyUser = async () => {
            try {
                const userData = await check()
                user.setUser(userData)
                user.setIsAuth(true)
            } catch (error) {

            }
            setIsLoading(false)
        }
        verifyUser()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (isLoading) {
        return <FullscreenSpinner />
    }

    return (
        <RouterProvider router={router} />
    )
})
export default App