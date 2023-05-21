import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const solid = defineStyle((props) => {
    const { colors } = props.theme
    return {
        bgColor: colors.accent[400],
        color: 'white',
        transition: 'all 0.2s',

        _hover: {
            bgColor: colors.accent[600],
        },

        _active: {
            bgColor: colors.accent[800],
        }
    }
})


export const buttonTheme = defineStyleConfig({
    variants: {
        solid,
    },
})