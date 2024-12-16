import { Avatar, Button, Container, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { Context } from '../../../Context/Context'
import { BrowseGallery, EmojiEmotions, Photo, Videocam } from '@mui/icons-material';

const Home = () => {
    const { spacing } = useContext(Context);
    return (
        <Container maxWidth="sm" sx={{ backgroundColor: "Red"}}>
            <Stack width="100%" direction={"column"} spacing={spacing} sx={{padding: 2,backgroundColor:"blue",borderRadius:3}}>
                <Stack spacing={spacing} direction={"row"}>
                    <Avatar />
                    <Stack width="100%" sx={{ backgroundColor: "white" }}>

                    </Stack> 
                </Stack>
                <Divider variant="middle" />
                <Stack direction={"row"} spacing={spacing}>
                    <Button color="text" variant="text" sx={{ borderRadius: 2, width: "max-content", bgcolor: "grey.200" }}><Videocam /> <Typography sx={{ color: "text.main", textTransform: "capitalize" }} fontWeight={500} width="max-content">
                        Live video
                    </Typography></Button>
                    <Button color="text" variant="text" sx={{ borderRadius: 2, width: "max-content", bgcolor: "grey.200" }}><Photo /> <Typography sx={{ color: "text.main", textTransform: "capitalize" }} fontWeight={500} width="max-content">
                        Photo/video
                    </Typography></Button>
                    <Button color="text" variant="text" sx={{ borderRadius: 2, width: "max-content", bgcolor: "grey.200" }}>
                        <EmojiEmotions />
                        <Typography sx={{ color: "text.main", textTransform: "capitalize" }} fontWeight={500} width="max-content">
                            Feeling/activity
                        </Typography>
                    </Button>
                </Stack>
            </Stack>
        </Container>
    )
}

export default Home
