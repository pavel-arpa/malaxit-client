import { Button, Checkbox, Heading, Input, Menu, MenuButton, MenuItem, MenuList, Radio, RadioGroup, Stack, VisuallyHidden, useToast } from '@chakra-ui/react'
import s from './Setup.module.sass'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { nanoid } from 'nanoid'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../..'
import { AppRoute } from '../../utils/constants'
import { observer } from 'mobx-react-lite'
import FullscreenSpinner from '../../components/ui/FullscreenSpinner'
import { addSite, getPaymentMethods, getSiteTypes } from '../../api/siteAPI'
import useCheckboxHander from '../../hooks/useCheckboxHander'



const Setup = observer(() => {
    const navigate = useNavigate()
    const toast = useToast()
    const { user, site } = useContext(AppContext)
    const [activeSiteTypeId, setActiveSiteTypeId] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [paymentValue, setPaymentValue] = useState()
    const checkboxHandlers = {
        isDatePickerEnabled: useCheckboxHander(false),
        isTimePickerEnabled: useCheckboxHander(false),
        isPlaceChoosing: useCheckboxHander(false)
    }

    useEffect(() => {
        if (!user.isAuth) {
            navigate(AppRoute.LOGIN)
        }
        Promise.all([getPaymentMethods(), getSiteTypes()]).then(responses => {
            site.setPaymentMethods(responses[0])
            site.setSiteTypes(responses[1])
            setActiveSiteTypeId(responses[1][0].id)
        }).finally(() => {
            setIsLoading(false)
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const handleSelectSiteType = (id) => {
        return () => {
            setActiveSiteTypeId(id)
        }
    }

    const handleCreateSite = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target).entries()
        const fields = Object.fromEntries(formData)
        const config = {
            name: fields.name,
            siteTypeId: Number(fields.siteTypeId),
            isDatePickerEnabled: checkboxHandlers.isDatePickerEnabled.checked,
            isTimePickerEnabled: checkboxHandlers.isTimePickerEnabled.checked,
            isPlaceChoosing: checkboxHandlers.isPlaceChoosing.checked,
            paymentMethodId: Number(fields.paymentMethodId)
        }
        addSite(config).then(data => {
            toast({
                title: 'Сайт создан!',
                status: 'success',
                isClosable: true,
            })
            navigate(`${AppRoute.EDITOR}/${data.siteId}`)
        }).catch(error => {
            console.log(error)
            toast({
                title: error.response.data.message,
                status: 'error',
                isClosable: true,
            })
        })
    }

    const getSiteTypeNameById = (id) => {
        return site.siteTypes.find(st => st.id === id).name
    }

    if (isLoading) {
        return <FullscreenSpinner />
    }

    if (user.isAuth) return (
        <div className={s.setup} style={{ minHeight: window.innerHeight }}>
            <form className={s.card} onSubmit={handleCreateSite}>
                <Heading as='h3' size='lg' className={s.heading}>
                    Настройка сайта
                </Heading>

                <div className={s.options}>
                    <Heading size='s'>Тип сайта</Heading>
                    <VisuallyHidden>
                        <input value={activeSiteTypeId} name='siteTypeId' readOnly />
                    </VisuallyHidden>
                    <Menu>
                        <MenuButton
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            variant='outline'
                        >
                            {getSiteTypeNameById(activeSiteTypeId)}
                        </MenuButton>
                        <MenuList>
                            {site.siteTypes.map(st => (
                                <MenuItem
                                    key={nanoid()}
                                    icon={
                                        <img
                                            className={s.icon}
                                            src={process.env.REACT_APP_API_URL + '/icons/' + st.iconSrc}
                                            alt=""
                                        />
                                    }
                                    onClick={handleSelectSiteType(st.id)}
                                >
                                    {st.name}
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>

                    <Heading size='s'>Название сайта</Heading>
                    <Input placeholder='Название сайта' name='name' isRequired />

                    <Heading size='s'>Выбор даты и времени при оформлении</Heading>
                    <Checkbox {...checkboxHandlers.isDatePickerEnabled}>
                        Дата
                    </Checkbox>
                    <Checkbox {...checkboxHandlers.isTimePickerEnabled}>
                        Время
                    </Checkbox>

                    <Heading size='s'>Дополнительно</Heading>
                    <Checkbox {...checkboxHandlers.isPlaceChoosing}>
                        Выбор места по фотографии рассадки
                    </Checkbox>

                    <Heading size='s'>Способ оплаты</Heading>
                    <RadioGroup
                        onChange={setPaymentValue}
                        value={paymentValue}
                        name='paymentMethodId'
                    >
                        <Stack direction='column'>
                            {site.paymentMethods.map(pm => (
                                <Radio key={nanoid()} value={String(pm.id)}>
                                    {pm.name}
                                </Radio>
                            ))}
                        </Stack>
                    </RadioGroup>

                    <Button type='submit'>
                        Создать сайт!
                    </Button>
                </div>
            </form>
        </div>
    )
})
export default Setup