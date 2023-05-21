import { $authHost, $host } from "."


export const getSiteTypes = async () => {
    const { data } = await $authHost.get('api/site/site-types')
    return data
}