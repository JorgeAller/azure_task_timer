import { createTheme } from "@mui/material";
import { esES } from "@mui/material/locale";
import type { Theme } from "@mui/material/styles";

export interface CustomTheme extends Theme {
    constants?: {
        appColor: string
    }
}

export const theme: CustomTheme = createTheme(esES, {
    constants: {
        appColor: 'blue'
    },
    components: {
        MuiFormHelperText: {stylesOverrides: {root: {fontSize: '14px'}}}
    }
})