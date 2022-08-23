import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const MemberCard: FC<any> = ({ membersData }: any): JSX.Element => {
    const { id, avatar, name, hostel, year } = membersData;
    const router = useRouter();

    const handleClick = (e: any, id: any) => {
        router.push(`/attendance/${id}`);
    }

    return (
        <>
            <Link href="/">
                <a onClick={(e) => handleClick(e, `/${id}`)}>
                    <Grid item width={210} sx={{
                        borderRadius: '7px',
                        backgroundColor: '#FFF',
                        margin: { xs: '3px', sm: '10px', lg: '20px' },
                        padding: { xs: '3px', sm: '10px', lg: '20px' },
                    }}>
                        <Box display={'flex'} justifyContent={'center'} mt={1} sx={{
                            padding: '10px',
                        }}>
                            <Image
                                
                                alt="Member Image"
                                src={avatar as any}
                                width={50}
                                height={50}
                            />
                        </Box>
                        <Box mx={1} mt={1} color={`rgb(46,  79, 77)`}>
                            <Typography variant="body1">Name : {name}</Typography>
                            <Typography variant="body1">Roll No : {id}</Typography>
                            <Typography variant="body1">Hostel : {hostel}</Typography>
                            <Typography variant="body1">Year : {year}</Typography>
                        </Box>
                    </Grid>
                </a>
            </Link>

        </>
    )
}

export default MemberCard;