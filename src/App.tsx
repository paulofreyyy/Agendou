import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, IconButton, Divider } from "@mui/material"
import { FaPlayCircle } from "react-icons/fa"
import { IoMdCut } from "react-icons/io"

export const App = () => {
    return (
        <Box display='flex' flexDirection='column' gap={5} padding={2}>
            <Typography color="info.main" fontWeight={600} fontSize='1.5rem' textAlign='center'>Hoje</Typography>

            <Accordion sx={{
                '&.MuiAccordion-root': {
                    borderRadius: 5
                }
            }}>
                <AccordionSummary >
                    <Box display='flex' gap={2} alignItems='center' sx={{ borderRadius: 20 }}>
                        <IconButton sx={{ color: 'info.light' }}>
                            <FaPlayCircle />
                        </IconButton>

                        <Divider orientation="vertical" flexItem />

                        <Typography fontWeight={600} color="info.light">Paulo Henrique</Typography>
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
                </AccordionDetails>
            </Accordion>
        </Box >
    )
}