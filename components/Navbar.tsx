import {Box} from "@mui/material";
import Image from 'next/image';

const Navbar = () => {
    const url = 'https://i.imgur.com/vBregrd.png';
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'rgba(31,41,55,var(--tw-bg-opacity))',
                paddingBottom : `${2}rem`,
            }}>
                <Box sx={{
                    mt: 3,
                    height: 50,
                    width: 50,
                    position: 'relative',   

                }}>
                    <Image
                        alt='HeroImage'
                        src={url}
                        layout="fill"
                    />
                </Box>
            </Box>
        </>
    );
}

export default Navbar;