import Head from "next/head";
import { Box, Grid, InputAdornment, TextField, Typography } from "@mui/material";
import MemberCard from "../../components/MemberCard";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { members } from "../../dummyData";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import BGImage from '../../public/wave.svg'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material";
const Attendance = () => {
    const url = 'https://i.imgur.com/vBregrd.png';
    const theme = createTheme({
        typography: {
          fontFamily: [
            'Source Sans Pro', 'sans-serif'
          ].join(','),
        },});
    return (
        <>
            <Head>
                <title>IoT Attendance Portal</title>
            </Head>
        <ThemeProvider theme={theme}>
        <Box  sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundImage: `url(${BGImage})`,
                minHeight: '80vh',
                
            }} >
          <Box sx={{
                    mt: 3, justifyContent: 'center', px: 5
                }}>
                    <Typography variant="h2" sx={{['@media (max-width:568px) and (min-width:406px)']: {fontSize:'2.5rem'} , ['@media (max-width:567px)']: {fontSize:'1.5rem', mb:2} , mb:3}} mt={5}  color={`black`}>
                        Find our members
                    </Typography>
                </Box> 
                <Box component="span" mb={3} sx={{ display: 'block', ['@media (max-width:567px)']: {width:'150px'} ,width: '300px', height: '5px', alignItems: 'center', backgroundColor: '#4763B7' , borderRadius:'70px'  }}></Box>
                <Paper
                    component="form"
                    sx={{ p: '2px 4px', mt: 5, display: 'flex', alignItems: 'center', mb:10 , ['@media(max-width:800px)']:{width:'80%'}, width:'50%'}}
                >
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Member"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
                
                <Typography variant="h3" mt={5} my={3} color={`black`} sx={{['@media (max-width:568px) and (min-width:406px)']: {fontSize:'2.5rem'} , ['@media (max-width:567px)']: {fontSize:'1.5rem', mb:2}}}  >
                    Our Team
                </Typography>
                <Box component="span" mb={3} sx={{ display: 'block' ,  ['@media (max-width:567px)']: {width:'90px'}  , width: '150px', height: '5px', alignItems: 'center', backgroundColor: '#4763B7' , borderRadius:'70px'  }}></Box>
                <span style={{ textAlign: 'center' }}></span>
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

        </ThemeProvider>
            
        </>
    )
}

export default Attendance;