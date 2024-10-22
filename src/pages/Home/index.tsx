import { Box } from "@mui/material"
import { CalendarHeader } from "./components/CalendarList/CalendarHeader"
import { CalendarListBody } from "./components/CalendarList/CalendarListBody"

export const Home = () => {
    return (
        <Box display='flex' flexDirection='column' gap={5} padding={2}>

            {/* Header da lista */}
            <CalendarHeader />

            {/* Lista de horários agendados */}
            <CalendarListBody />
        </Box >
    )
}