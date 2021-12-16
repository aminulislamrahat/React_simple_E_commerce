import './chat.css';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './ChatFeed';

import Header from '../Header';

const projectID = 'f8162910-c6f8-4feb-ae94-9c1cf9e39e52';


const Chat = () => {
  let user = JSON.parse(localStorage.getItem('user-info'));


  return (
    <div>
      <Header />
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={user.first_name}
        userSecret={user.password}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />

    </div>
  );
};

export default Chat;






