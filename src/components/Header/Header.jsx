import { IconButton, Input } from '@chakra-ui/react'
import s from './Header.module.sass'
import { SearchIcon } from '@chakra-ui/icons'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.header__content}>
                <img src={process.env.REACT_APP_API_URL + '/logos/malaxit_simple.svg'} alt="Логотип" className={s.logo} />
                <Input variant='filled' placeholder='Поиск' />
                <IconButton variant={'ghost'} icon={<SearchIcon />} />
                <div className={s.navbar}>
                    <IconButton icon={<HomeOutlinedIcon />} variant={'ghost'} />
                    <IconButton icon={<LocalMallOutlinedIcon />} variant={'ghost'} />
                    <IconButton icon={<LocalShippingOutlinedIcon />} variant={'ghost'} />
                </div>
            </div>
        </header>
    )
}
export default Header