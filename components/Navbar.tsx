import Image from 'next/image';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
const pages = ['Products', 'Pricing', 'Blog'];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)
const [anchorElUser, setAnchorElUser] = useState(null);

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
};
const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
    setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};
    const url = 'https://i.imgur.com/vBregrd.png';
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                backgroundColor: '#1F2836',
                paddingBottom: `${1.5}rem`,
            }}>
                <Box sx={{
                    mt: 3,
                    ml: 3,
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
                <Box sx={{
                    mt: 3,
                    mr: 2,
                    height: 50,
                    position: 'relative',
                    display:'flex',
                    justifyContent:'flex-end'

                }}>     
                 <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon style={{ color: "white" }}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{  color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
                </Box>



            </Box>

        </>
    );
}

export default Navbar;