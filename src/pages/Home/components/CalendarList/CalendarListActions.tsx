import { Box, IconButton, Tooltip } from "@mui/material"
import { FaRegCheckCircle } from "react-icons/fa"
import { LuCalendarClock, LuCalendarX2 } from "react-icons/lu"

export const CalendarListActions = () => {
    return (
        <Box display='flex' gap={2}>
            <Tooltip title="Cancelar atendimento" arrow>
                <IconButton
                    sx={{
                        bgcolor: 'error.main',
                        '&:hover': {
                            bgcolor: "error.light",
                        },
                        fontWeight: 600,
                        borderRadius: '12px 2px 12px 12px',
                        height: 40,
                        minWidth: 40,
                        color: "primary.light",
                    }}
                >
                    <LuCalendarX2 size={20} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Reagendar atendimento" arrow >
                <IconButton
                    sx={{
                        bgcolor: 'warning.main',
                        '&:hover': {
                            bgcolor: "warning.light",
                        },
                        fontWeight: 600,
                        borderRadius: '12px 2px 12px 12px',
                        height: 40,
                        minWidth: 40,
                        color: "primary.light",
                    }}
                >
                    <LuCalendarClock size={20} />
                </IconButton>
            </Tooltip>

            <Tooltip title="Finalizar atendimento" arrow >
                <IconButton
                    sx={{
                        bgcolor: 'success.main',
                        '&:hover': {
                            bgcolor: "success.light",
                        },
                        fontWeight: 600,
                        borderRadius: '12px 2px 12px 12px',
                        height: 40,
                        minWidth: 40,
                        color: "primary.light",
                    }}
                >
                    <FaRegCheckCircle size={20} />
                </IconButton>
            </Tooltip>
        </Box>
    )
}