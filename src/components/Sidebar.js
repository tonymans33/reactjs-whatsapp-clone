import React from 'react';
import "../css/Sidebar.css"
import DonutLargeIcon from  "@material-ui/icons/DonutLarge";
import ChatIcon from  "@material-ui/icons/Chat";
import MoreVertIcon from  "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src='https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1' />
                <div className="sidebar-headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar-search">
                <div className="sidebar-searchContainer">
                    <SearchOutlined />
                    <input type="text" placeholder="Search or start a new chat"/>
                </div>
            </div>

            <div className="sidebar-chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )

}
export default Sidebar