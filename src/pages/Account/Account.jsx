import { Avatar, Button } from '@chakra-ui/react'
import s from './Account.module.sass'
import { useContext, useEffect } from 'react'
import { AppContext } from '../..'
import { AddIcon } from '@chakra-ui/icons'
import { nanoid } from 'nanoid'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../utils/constants'
import { observer } from 'mobx-react-lite'
import FullscreenSpinner from '../../components/ui/FullscreenSpinner'

const Account = observer(() => {
    const navigate = useNavigate()
    const { user } = useContext(AppContext)
    const sites = [
        {
            name: 'Shop',
            logo: ''
        },
        {
            name: 'Shop',
            logo: ''
        }
    ]

    useEffect(() => {
        if (!user.isAuth) {
            navigate(AppRoute.LOGIN)
        }
    }, [])

    const handleAddSite = () => {
        navigate(AppRoute.SETUP)
    }

    if (!user.isAuth) {
        return <FullscreenSpinner />
    }


    if (user.isAuth) return (
        <div className={s.account}>
            <div className={s.accent}></div>
            <div className={s.profile}>
                <Avatar size='lg' src='https://bit.ly/broken-link' />
                <div className={s.profile__info}>
                    <span className={s.profile__name}>{user.user.name}</span>
                    <span className={s.profile__email}>{user.user.email}</span>
                </div>
            </div>
            <div className={s.sites}>
                <Button leftIcon={<AddIcon />} onClick={handleAddSite}>Добавить новый сайт</Button>
                <div className={s.sites__list}>
                    {sites.map(site => (
                        <div key={nanoid()} className={s.sites__item}>
                            <img src={site.logo} alt="" />
                            <span>{site.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
})
export default Account