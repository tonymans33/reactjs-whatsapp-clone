import React from 'react';
import {Avatar, IconButton} from "@material-ui/core";
import "../css/SidebarChat.css"

function SidebarChat() {
    return(
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat-info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div>
        </div>
    )

}
export default SidebarChat