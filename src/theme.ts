import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#EEEEEE",
            light: "#FFFFFF",
            dark: "#bdbdbd",
        },
        secondary: {
            main: "#393E46",
            light: "#585d65",
            dark: "#191d25",
        },
        info: {
            main: "#00ADB5",
            light: "#29c6cd",
            dark: "#078385",
        },
        success: {
            main: "#00a659",
            light: "#00b564",
            dark: "#00934d",
        },
        warning: {
            main: "#efd700",
            light: "#ebe708",
            dark: "#efbf00",
        },
        error: {
            main: "#e2301e",
            light: "#f03c1c",
            dark: "#d02518",
        },
    }
})