import Head from "next/head";
import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import MemberCard from "../../components/MemberCard";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { members } from "../../dummyData";

const Attendance = () => {
    const url = 'https://i.imgur.com/vBregrd.png';
    return (
        <>
            <Head>
                <title>IoT Attendance Portal</title>
            </Head>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: 'rgb(243, 249, 255)',
                minHeight: '80vh',
            }}>
                <Box sx={{
                    mt: 3
                }}>
                    <TextField
                        fullWidth
                        id="input-with-icon-textfield"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonSearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="standard"
                    />
                </Box>
                <Typography variant="h5" mt={5} color={`rgb(71, 99, 183)`}>
                    Member Details
                </Typography>
                <Grid container gap={4} mt={5} mx={2} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {members.map((member: any) => (
                        <MemberCard key={member.id} membersData={member} />
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Attendance;