import { Box, Grid, Table, Typography } from "@mui/material";
import Image from 'next/image';
import DataTable from "../../../components/Table";
import { members } from "../../../dummyData";

const RollId = (props: any) => {
    const { name, id, hostel, year } = props.memberData;
    const url = 'https://i.imgur.com/5vZmWBO.png';
    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={5} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '40vh',
                }}>
                    <Box sx={{
                        height: '100px',
                        width: '100px',
                    }}>
                        <Image
                            alt='HeroImage'
                            src={url}
                            height={100}
                            width={100}
                        />
                    </Box>
                </Grid>
                <Grid item xs={7} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <Box>
                        <Typography variant="body1">Name : {name} </Typography>
                        <Typography variant="body1">Roll : {id}</Typography>
                        <Typography variant="body1">Hostel : {hostel} </Typography>
                        <Typography variant="body1">Year : {year}</Typography>

                    </Box>
                </Grid>
            </Grid>
            <DataTable />
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