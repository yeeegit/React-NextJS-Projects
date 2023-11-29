import '../styles/Home.css';
import userImg from '../assets/blank-profile.svg'


const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={userImg} alt="" />
          <span>now</span>
      </div>
      <div className="messageContent">
        <p>hallo</p>
        <img src={userImg} alt="" />
      </div>
    </div>
  )
}

export default Message