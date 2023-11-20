import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  Box,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";

function Listcomp() {
  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <h2>Normal List</h2>
      <List>
        <ListItem>
          <ListItemText primary="HTML" />
        </ListItem>
        <ListItem>
          <ListItemText primary="CSS" />
        </ListItem>
        <ListItem>
          <ListItemText primary="JAVASCRIPT" />
        </ListItem>
        <ListItem>
          <ListItemText primary="REACT" />
        </ListItem>
        <ListItem>
          <ListItemText primary="ANGULAR" />
        </ListItem>
      </List>
      <h2>List With Icons</h2>
      <List>
        <ListItem>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText
            primary="Inbox"
            secondary="It is collection incoming messages"
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText
            primary="Save Draft"
            secondary="It is collection of messages that need to be sent"
          />
        </ListItem>
      </List>
      <h2>Normal List with Button</h2>
      <Box color={"white"} bgcolor={"#00a152"}>
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="IPHONE DETAILS" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="SAMSUNG GALAXY DETAILS" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemText primary="ONEPLUS12 DETAILS" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </div>
  );
}

export default Listcomp;
