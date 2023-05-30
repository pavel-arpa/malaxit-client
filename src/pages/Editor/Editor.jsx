import { useContext, useEffect, useState } from 'react'
import s from './Editor.module.sass'
import { observer } from 'mobx-react-lite'
import { AppContext } from '../..'
import { getSiteConfig } from '../../api/siteAPI'
import { useParams } from 'react-router-dom'
import Home from '../../pseudoPages/Home/Home'
import FullscreenSpinner from '../../components/ui/FullscreenSpinner'
import Header from '../../components/Header/Header'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import { nanoid } from 'nanoid'
import Navbar from '../../components/Navbar/Navbar'

const Editor = observer(() => {
    const { editor } = useContext(AppContext)
    const { siteId } = useParams()
    const [isLoading, setIsLoading] = useState(true)
    const pages = ['Главная', 'Карточка', 'Корзина', 'Заказ']


    useEffect(() => {
        getSiteConfig({ id: siteId }).then(response => {
            console.log(response)
            editor.setConfig(response)
            setIsLoading(false)
        })
    }, [])

    if (isLoading) return (
        <FullscreenSpinner />
    )

    return (
        <div className={s.editor}>
            <div className={s.layout} style={{ minHeight: window.innerHeight }}>
                <Header />
                <Home />
                <Navbar />
            </div>
            <div className={s.sidebar} style={{ height: window.innerHeight }}>
                <div className={s.sidebar__heading}>Окно настройки</div>
                <Accordion allowToggle>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                    Страницы
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel className={s.pages}>
                            {pages.map(page => (
                                <span key={nanoid()} className={s.pages__item}>{page}</span>
                            ))}
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
})
export default Editor