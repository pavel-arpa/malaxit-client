import { IconButton } from '@chakra-ui/react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import s from './Navbar.module.sass'

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <IconButton icon={<HomeOutlinedIcon fontSize='large' />} variant={'link'} />
            <IconButton icon={<LocalMallOutlinedIcon fontSize='large' />} variant={'link'} />
            <IconButton icon={<LocalShippingOutlinedIcon fontSize='large' />} variant={'link'} />
        </div>
    )
}
export default Navbar