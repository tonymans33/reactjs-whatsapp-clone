import React, { useState } from "react";
import {SearchOutlined, AttachFile, MoreVert} from "@material-ui/icons";
import {Avatar, IconButton} from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import MicIcon from "@material-ui/icons/Mic"
import "../css/Chat.css";
import axios from '../axios'

function Chat({ messages }) {

    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "tony", 
            timestamp: "Just Now",
            received: false
        })

        setInput("");
    }

    return (

        <div className="chat">
            <div className="chat-header">
                <Avatar />

                <div className="chat-headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat-headerRight">
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>

            <div className="chat-body">

                {messages.map((message) => (

                    <p className={`chat-message ${message.received ? "chat-receiver" : " "}`}>

                    <span className="chat-name">
                        {message.name}
                    </span>
                        {message.message}
                    <span className="chat-timestamp">
                        {message.timestamp}
                    </span>
                </p>

                ))}
             
            </div>

            <div className="chat-footer">
                <InsertEmoticonIcon />
                <form>
                    <input 
                        value={input}
                        onChange = {e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button  onClick={sendMessage} type="submit">
                        Send a message
                    </button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat