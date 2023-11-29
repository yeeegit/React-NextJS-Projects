import '../styles/Home.css'
import Cam from '../img/cam.png'
import Add from '../img/add.png'
import More from '../img/more.png'
import Messages from './Messages'
import Input from './Input'



const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>John Doe</span>
        <div className="chatIcons">
          <img src={Cam} alt="VideoChat" />
          <img src={Add} alt="add friend to chat" />
          <img src={More} alt=". . ." />
        </div>
      </div>
        <Messages></Messages>
        <Input></Input>
    </div>
  )
}

export default Chat