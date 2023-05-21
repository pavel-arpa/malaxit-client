import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle((props) => {
    const { colors } = props.theme
    return {
        control: {
            _checked: {
                background: colors.accent[400],
                borderColor: colors.accent[400],

                _hover: {
                    background: colors.accent[600],
                    borderColor: colors.accent[600],
                },
            }
        },

    }
})

export const checkboxTheme = defineMultiStyleConfig({ baseStyle })