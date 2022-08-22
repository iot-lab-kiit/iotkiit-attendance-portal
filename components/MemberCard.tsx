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
                <a onClick={(e) => handleClick(e, `/${id}`)}><Grid item width={200} border={'1px solid'}
                    boxShadow={'0px 1px 0px rgba(0, 0, 0, 0.05)'}
                    borderRadius={'4px'}>
                    <Box display={'flex'} justifyContent={'center'} mt={1}>
                        <Image
                            alt="Member Image"
                            src={avatar as any}
                            width={50}
                            height={50}
                        />
                    </Box>
                    <Box mx={1} mt={1}>
                        <Typography variant="body1">Name : {name}</Typography>
                        <Typography variant="body1">Roll : {id}</Typography>
                        <Typography variant="body1">Hostel : {hostel}</Typography>
                        <Typography variant="body1">Year : {year}</Typography>
                    </Box>
                </Grid></a>
            </Link>

        </>
    )
}

export default MemberCard;