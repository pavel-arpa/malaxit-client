import { useNavigate, useRouteError } from "react-router-dom";
import s from './ErrorPage.module.sass'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Button } from "@chakra-ui/react";

export default function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate()
    console.error(error);

    const handleGoHome = () => {
        navigate('/')
    }

    return (
        <div className={s.error}>
            <h1>Ошибка</h1>
            <Alert status='error' variant='top-accent'>
                <AlertIcon />
                <AlertDescription>{error.statusText || error.message}</AlertDescription>
            </Alert>
            <Button variant={"outline"} onClick={handleGoHome}>На главную</Button>
        </div>
    );
}