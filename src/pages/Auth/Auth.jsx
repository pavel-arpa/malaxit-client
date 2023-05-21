import { Button, FormControl, FormLabel, Heading, Input, useToast } from "@chakra-ui/react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { AppRoute } from "../../utils/constants"
import s from './Auth.module.sass'
import { useContext, useState } from "react"
import { login, registration } from "../../api/userAPI"
import { observer } from "mobx-react-lite"
import { AppContext } from "../.."


const Auth = observer(() => {
    const location = useLocation()
    const navigate = useNavigate()
    const { user } = useContext(AppContext)
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const isLogin = location.pathname === AppRoute.LOGIN

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        const formData = new FormData(e.target)
        const { email, name, password } = Object.fromEntries(formData.entries())
        try {
            let userData
            if (isLogin) {
                userData = await login({ email, name, password })
            } else {
                userData = await registration({ email, name, password })
            }
            user.setUser(userData)
            user.setIsAuth(true)
            navigate(AppRoute.ACCOUNT)
            toast({
                title: 'Успешно!',
                status: 'success',
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: 'Ошибка',
                description: error.response.data.message,
                status: 'error',
                isClosable: true,
            })
        }
        setIsLoading(false)
    }

    return (
        <div className={s.wrapper} style={{ height: window.innerHeight }}>
            <form className={s.card} onSubmit={handleSubmit}>
                <Heading as='h3' size='lg' className={s.heading}>
                    {isLogin ? 'Вход' : 'Регистрация'}
                </Heading>
                <div className={s.elements}>
                    <FormControl isRequired>
                        <FormLabel>E-mail</FormLabel>
                        <Input placeholder='E-mail' type='email' name='email' />
                    </FormControl>
                    {!isLogin && (
                        <FormControl isRequired>
                            <FormLabel>Имя</FormLabel>
                            <Input placeholder='Имя' name='name' />
                        </FormControl>
                    )}
                    <FormControl isRequired>
                        <FormLabel>Пароль</FormLabel>
                        <Input placeholder='Пароль' type='password' name='password' />
                    </FormControl>
                    <Button
                        type='submit'
                        variant='solid'
                        isLoading={isLoading}
                    >
                        {isLogin ? 'Войти' : 'Зарегестрироваться'}
                    </Button>
                </div>
                <div className={s.alter}>
                    {isLogin
                        ? <div>Нет аккаунта? <NavLink to={AppRoute.REGISTRATION}>Зарегестрироваться</NavLink></div>
                        : <div>Уже есть аккаунт? <NavLink to={AppRoute.LOGIN}>Войти</NavLink></div>
                    }
                </div>
            </form>
        </div>
    )
})

export default Auth