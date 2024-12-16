import { AdsClick, Event, FacebookRounded, FeedSharp, Groups3, History, Home, HotelSharp, KeyboardArrowDown, KeyboardArrowRight, People, SavedSearch, Tv } from "@mui/icons-material";
import { AppBar, Avatar, Button, Collapse, Icon, IconButton, Stack, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

const LeftNav = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar
      position="fixed"
      className="left-nav"
      sx={{ left: "0", height: "100vh", boxShadow: "0", width: 375, padding: "0 10px", overflowY: "scroll", zIndex: 0, backgroundColor: "#F2F4F7" }}
    >
      <Toolbar sx={{ height: 75 }} />
      <Stack height="fit-content">
        {[
          { txt: "gourav Paliwal", icon: <Avatar sx={{ height: 25, width: 25 }} /> },
          { txt: "friends", icon: <People color="secondary" /> },
          { txt: "welcome", icon: <FacebookRounded color="secondary" /> },
          { txt: "memories", icon: <History color="secondary" /> },
          { txt: "saved", icon: <SavedSearch color="secondary" /> },
          { txt: "groups", icon: <Groups3 color="secondary" /> },
          { txt: "video", icon: <Tv color="secondary" /> },
          { txt: "feeds", icon: <FeedSharp color="secondary" /> },
          { txt: "events", icon: <Event color="secondary" /> },
          { txt: "ads Manager", icon: <AdsClick color="secondary" /> },
          { txt: "crisis response", icon: <HotelSharp color="secondary" /> },
        ].map((ele, idx) => {
          return (
            <Button variant="text" fullWidth sx={{ paddingTop: .5, paddingBottom: .5, textTransform: "capitalize", justifyContent: "start", display: "flex", color: "text.dark", flexWrap: "wrap" }}>
              <Icon fontSize="large" sx={{ display: "flex", alignItems: "center" }}>
                {ele.icon}
              </Icon>
              <Typography fontSize={15} fontWeight={600}>
                {ele.txt}
              </Typography>
            </Button>
          )
        })}
        <Collapse in={open}>
          <Stack>
            <Button>
              text
            </Button>
            <Button>
              text
            </Button>
            <Button>
              text
            </Button>
            <Button>
              text
            </Button>
            <Button>
              text
            </Button>
            <Button>
              text
            </Button>
          </Stack>
        </Collapse>
        <Button onClick={() => { setOpen(!open) }} fullWidth={true} sx={{ paddingTop: .5, paddingBottom: .5, textTransform: "capitalize", justifyContent: "start", display: "flex", color: "text.dark", flexWrap: "wrap" }}>
          <Icon fontSize="large" sx={{ display: "flex", alignItems: "center" }}>
            <KeyboardArrowDown />
          </Icon>
          <Typography fontSize={15} fontWeight={600}>
            See more
          </Typography>
        </Button>
      </Stack>
    </AppBar>
  );
};

export default LeftNav;
