import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Divider, IconButton, Typography } from "@mui/material"
import { IoIosArrowDown, IoMdCut } from "react-icons/io"
import { CalendarListActions } from "./CalendarListActions"

export const CalendarListBody = () => {
    return (
        <Box>
            <Typography fontWeight={600} fontSize='1.2rem' mb={2}>Profissional 1</Typography>

            <Box display='flex' flexDirection='column' gap={2}>
                <Accordion sx={{
                    '&.MuiAccordion-root': {
                        borderRadius: 5
                    }
                }}>
                    <AccordionSummary >
                        <Box display='flex' gap={2} alignItems='center' sx={{ borderRadius: 20 }} width='100%'>
                            <Typography fontSize='0.9rem' color="info.light">11:00 AM</Typography>

                            <Divider orientation="vertical" flexItem />

                            <Typography fontWeight={600} color="info.light">Paulo Henrique</Typography>

                            <Box ml='auto' color='primary.dark'>
                                <IoIosArrowDown />
                            </Box>
                        </Box>
                    </AccordionSummary>

                    <AccordionDetails sx={{ bgcolor: 'primary.main', borderBottomLeftRadius: 20, borderBottomRightRadius: 20 }}>
                        <Box display='flex' alignItems='center' gap={2} px={2} bgcolor='primary.light' borderRadius={10}>
                            <IconButton sx={{ color: 'info.light' }}>
                                <IoMdCut />
                            </IconButton>

                            <Divider orientation="vertical" flexItem />

                            <Typography fontWeight={600}>Corte simples</Typography>

                        </Box>

                        <AccordionActions sx={{ mt: 2 }}>
                            <CalendarListActions />
                        </AccordionActions>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}