import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, IconButton, Divider, AccordionActions, Tooltip } from "@mui/material"
import { FaRegCheckCircle } from "react-icons/fa"
import { IoIosArrowDown, IoMdCut } from "react-icons/io"
import { LuCalendarClock, LuCalendarX2 } from "react-icons/lu"

export const App = () => {
    return (
        <Box display='flex' flexDirection='column' gap={5} padding={2}>
            <Typography color="info.main" fontWeight={600} fontSize='1.5rem' textAlign='center'>Hoje</Typography>

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
                            </AccordionActions>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            </Box>
        </Box >
    )
}