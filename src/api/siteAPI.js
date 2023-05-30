import { $authHost, $host } from "."

export const addSite = async ({
    name, isDatePickerEnabled, isTimePickerEnabled, isPlaceChoosing,
    siteTypeId, paymentMethodId
}) => {
    const { data } = await $authHost.post('api/site/add', {
        name, isDatePickerEnabled, isTimePickerEnabled, isPlaceChoosing,
        siteTypeId, paymentMethodId
    })
    localStorage.setItem('token', data.token)
    return data
}

export const getSiteConfig = async ({ id }) => {
    const { data } = await $authHost.get('api/site/config/' + id)
    localStorage.setItem('token', data.token)
    return data.site
}

export const getSiteTypes = async () => {
    const { data } = await $host.get('api/site/site-types')
    return data
}

export const getPaymentMethods = async () => {
    const { data } = await $host.get('api/site/payment-methods')
    return data
}
