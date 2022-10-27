import { Box, Grid, Typography } from "@mui/material";
import Image from 'next/image';
import DataTable from "../../../components/Table";
import { members } from "../../../dummyData";
import React from "react";
import { Table } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableCell } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Paper } from "@mui/material";
import { BorderAll } from "@mui/icons-material";
import { timeStamp } from "console";

const RollId = (props: any) => {
  const { name, id, hostel, year } = props.memberData;
  const url = 'https://i.imgur.com/5vZmWBO.png';
  const calculateTime = (date, intime, outtime) => {
    const date1 = `${date} ${intime}:00.000`;
    const date2 = `${date} ${outtime}:00.000`;
    let dateFromat1 = new Date(date1)
    let dateFromat2 = new Date(date2)
    let Inminutes = Math.floor(dateFromat1.getTime() / 60000);
    let Outminutes = Math.floor(dateFromat2.getTime() / 60000);
    return `${Outminutes - Inminutes} minutes`
  }
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={7} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <Box sx={{ ['@media (max-width:400px)']: { pl: 1 } , ['@media (min-width:401px)']: { pl: 5 } }}>
            <Typography variant="h5" sx={{
              ['@media (max-width:400px)']: {
                fontSize: '1.25rem'
              }
            }}>Name : {name} </Typography>
            <Typography variant="h5" sx={{
              ['@media (max-width:400px)']: {
                fontSize: '1.25rem'
              }
            }}>Roll : {id}</Typography>
            <Typography variant="h5" sx={{
              ['@media (max-width:400px)']: {
                fontSize: '1.25rem'
              }
            }}>Hostel : {hostel} </Typography>
            <Typography variant="h5" sx={{
              ['@media (max-width:400px)']: {
                fontSize: '1.25rem'
              }
            }} >Year : {year}</Typography>

          </Box>
        </Grid>
        <Grid item xs={5} sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          height: '40vh',
        }}>
          <Box sx={{
            height: '200px',
            width: '200px',
            ['@media (max-width:518px)']: { pr: 1 , height:"150px" , width:"150px" } , ['@media (min-width:519px)']: { pr: 5 , height:"200px" , width:"200px"}
          }}>
            <Image
              style={{borderRadius:"50%"}}
              alt='HeroImage'
              src={url}
              height={200}
              width={200}
              layout="responsive"
            />
          </Box>
        </Grid>

      </Grid>
      <div>
        <Box className="container" sx={{ ['@media (max-width:400px)']: { p: 1 } , ['@media (min-width:401px)']: { p: 5 }}} >
          <Table sx={{ justifyContent: 'center', border: "2px black solid"  }}>
            <TableHead>
              <TableRow sx={{backgroundColor:"#B9B9B9"}}>
                <TableCell sx={{border:"2px #959595 solid" , fontSize:"1rem"}} align="center">Entry Date</TableCell>
                <TableCell sx={{border:"2px #959595 solid" , fontSize:"1rem"}} align="center">In Time</TableCell>
                <TableCell sx={{border:"2px #959595 solid" , fontSize:"1rem"}} align="center">Out Time</TableCell>
                <TableCell sx={{border:"2px #959595 solid" , fontSize:"1rem"}} align="center">Duration</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map(({ id, name, intime, outtime, date }) => (
                <TableRow key={id}>
                  <TableCell sx={{border:"2px #959595 solid" , fontSize:"1rem"}} align="center">{date}</TableCell>
                  <TableCell sx={{border:"2px #959595 solid" , fontSize:"1rem"}} align="center">{intime}</TableCell>
                  <TableCell sx={{border:"2px #959595 solid" , fontSize:"1rem"}} align="center">{outtime}</TableCell>
                  <TableCell sx={{border:"2px #959595 solid" , fontSize:"1rem"}} align="center">{calculateTime(date, intime, outtime)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </div>
    </Box>
  );
}

export async function getServerSideProps(context: any) {
  const { rollid } = context.query;
  const memberData: any = members.find((member: any) => member.id == rollid);


  return {
    props: {
      memberData,
    }
  }
}


export default RollId;