import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "900": "#FFBA08",
    },
    gray: {
      "900": "#47585B",
      "400": "#999999",
      "300": "#F5F8FA",
      "200": "#DADADA"
    }
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`
  },
  styles: {
    global: {
      body:{
        bg: 'gray.300'
      }
    }
  }
})