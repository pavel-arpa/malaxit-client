import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";
import { checkboxTheme } from "./checkbox";

export const theme = extendTheme({
    colors: {
        accent: {
            400: '#148d69',
            600: '#107053',
            800: '#0d5942'
        }
    },
    components: {
        Button: buttonTheme,
        Checkbox: checkboxTheme
    },
})