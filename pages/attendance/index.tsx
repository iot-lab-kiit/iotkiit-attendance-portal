import Head from "next/head";
import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import Image from "next/image";
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

            <Box>

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

                <Typography variant="h4" mt={5}>
                    Member Details
                </Typography>
                <Grid container gap={2} mt={5} mx={2}>

                    {members.map((member: any) => (
                        <MemberCard key={member.id} membersData={member} />
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default Attendance;