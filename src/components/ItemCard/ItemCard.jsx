import { Button } from '@chakra-ui/react'
import s from './ItemCard.module.sass'

const ItemCard = ({ imgSrc, title, price }) => {
    return (
        <div className={s.card}>
            <img src={imgSrc} alt="" />
            <span className={s.card__price}>{price} ₽</span>
            <span className={s.card__title}>{title}</span>
            <Button className={s.card__toCart}>В корзину</Button>
        </div>
    )
}
export default ItemCard