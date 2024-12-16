import { Apps, FacebookRounded, Groups3Rounded, Home, Instagram, Message, Notifications, People, Search, Share } from '@mui/icons-material'
import { AppBar, Avatar, Box, Button, Divider, Fade, IconButton, InputBase, Link, Menu, MenuItem, Stack, Tab, Tabs, Toolbar, Tooltip, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useContext, useState } from 'react'
import { Context } from '../../../Context/Context'

const Navbar = () => {
  const { spacing,setValue,value} = useContext(Context);
  const [open,setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue)
    console.log(value);
    
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  return (
    <AppBar color="text" sx={{ boxShadow: `0 2px 10px .009px ${grey[400]}`,zIndex: 1,backgroundColor: "#ffffff"}} position='sticky'>
      <Toolbar style={{ padding: "0px 10px", justifyContent: "space-between" }}>
        <Stack direction='row' spacing={spacing}>
          <FacebookRounded color='primary' sx={{ fontSize: 48 }} />
          <Box component="div" sx={{ display: "flex", backgroundColor: grey[200], padding: "0 10px", borderRadius: 10 }}>
            <Stack spacing={spacing} direction='row' sx={{ alignItems: "center" }} >
              <Search color='' />
              <InputBase size="small" placeholder='Search Facebook' sx={{ fontSize: 15 }} />
            </Stack>
          </Box>
        </Stack>
        <Stack>
          <Tabs value={value} onChange={handleChange} variant='fullWidth'>
            <Tooltip TransitionProps={Fade} title="Home">
              <Tab classes='' icon={<Home fontSize='large' />} value={0} sx={{ borderRadius: "10px" }} />
            </Tooltip>
            <Tooltip TransitionProps={Fade} title="Friends">
              <Tab icon={<People fontSize='large' />} value={1} sx={{ borderRadius: "10px" }} />
            </Tooltip>
            <Tooltip TransitionProps={Fade} title="Groups">
              <Tab icon={<Groups3Rounded fontSize='large' />} value={2} sx={{ borderRadius: "10px" }} />
            </Tooltip>
          </Tabs>
        </Stack>
        <Stack direction="row" spacing={.5} sx={{ alignItems: "center" }}>
          <Link sx={{ textDecoration: "none", color: "text.dark", padding: "5px 10px", borderRadius: 10 }} className='nav-tools'>
            <Typography fontSize={15} fontWeight={600}>
              Find friends
            </Typography>
          </Link>
          <Tooltip title="Menu">
            <IconButton className='nav-tools'>
              <Apps sx={{ color: "text.dark", fontSize: 29 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Messenger">
            <IconButton className='nav-tools'>
              <Message sx={{ color: "text.dark", fontSize: 29 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Menu">
            <IconButton className='Notifications'>
              <Notifications sx={{ color: "text.dark", fontSize: 29 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Account">
            <IconButton className='nav-tools' onClick={handleOpen}>
              <Avatar fontSize='large' />
            </IconButton>
          </Tooltip>
          <Menu
          id="MuiMenu-root"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          sx={{padding: 5,borderRadius: 5}}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 5.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            },
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          >
            <MenuItem>
            <Box sx={{boxShadow: "0 0 10px .5px grey",borderRadius: "5px",padding: "5px"}}>
              <MenuItem>
              <Avatar/>
              <Typography fontWeight={500} fontSize={18}>
              Gourav paliwal
              </Typography>
              </MenuItem>
              <Divider variant='middle' sx={{backgroundColor: "grey.400"}}/>
              <Button startIcon={<Share/>} disableRipple color="button" fullWidth variant="contained" style={{marginTop: 3.5}}>
                See all profiles
              </Button>
            </Box>
            </MenuItem>
            <MenuItem>
            Settings
            </MenuItem>
          </Menu>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
