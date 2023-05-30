import { Heading } from '@chakra-ui/react'
import ItemCard from '../../components/ItemCard/ItemCard'
import s from './Home.module.sass'

const Home = () => {
    return (
        <div className={s.home}>
            <div className={s.inner}>
                <Heading className={s.heading}>Товары</Heading>
                <div className={s.items}>
                    <ItemCard imgSrc={'https://interactive-examples.mdn.mozilla.net/media/examples/plumeria.jpg'} title={'Картина, цветы'} price={3540} />
                    <ItemCard imgSrc={'https://ir.ozone.ru/s3/multimedia-s/wc700/6009911260.jpg'} title={'Ложечка для кормления'} price={340} />
                    <ItemCard imgSrc={'https://ir.ozone.ru/s3/multimedia-o/wc250/6482428248.jpg'} title={'Пылесос ENCHEN'} price={30199} />
                    <ItemCard imgSrc={'https://ir.ozone.ru/s3/multimedia-g/wc250/6491719300.jpg'} title={'Шампунь мужской бессульфатный'} price={743} />
                    <ItemCard imgSrc={'https://ir.ozone.ru/s3/multimedia-u/wc250/6387675966.jpg'} title={'Чехол на iPhone 13 серый'} price={440} />
                    <ItemCard imgSrc={'https://ir.ozone.ru/s3/multimedia-t/wc250/6551368145.jpg'} title={'Чехол на iPhone 13 прозрачный'} price={567} />
                </div>
            </div>
        </div>
    )
}
export default Home