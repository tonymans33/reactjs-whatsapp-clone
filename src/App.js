import React, { useEffect } from 'react'
import './css/App.css';
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Pusher from 'pusher-js'

function App() {

  useEffect(()=> {

    const pusher = new Pusher('48e088046766dcbb4a3b', {
      cluster: 'eu'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  }, []);
  

  return (
    <div className="app">
      <div className="app-body">
          <Sidebar />
          <Chat />
      </div>

    </div>
  );
}

export default App;
