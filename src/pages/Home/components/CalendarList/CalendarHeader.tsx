import { Box, IconButton, Typography } from "@mui/material"
import { TbSquareRoundedChevronLeft, TbSquareRoundedChevronRight } from "react-icons/tb"

export const CalendarHeader = () => {
    return (
        <Box display='flex' width='100%' justifyContent='space-between' alignItems='center'>
            <IconButton disableRipple>
                <Box display='flex' alignItems='center' gap={2} color='secondary.light'>
                    <TbSquareRoundedChevronLeft size={30} />
                    <Typography color="secondary.dark" fontSize='1.2rem'>Ontem</Typography>
                </Box>
            </IconButton>

            <Typography color="info.main" fontWeight={600} fontSize='1.5rem' textAlign='center'>Hoje</Typography>

            <IconButton disableRipple>
                <Box display='flex' alignItems='center' gap={2} color='secondary.light'>
                    <Typography color="secondary.light" fontSize='1.1rem'>Amanhã</Typography>
                    <TbSquareRoundedChevronRight size={30} />
                </Box>
            </IconButton>
        </Box>
    )
}