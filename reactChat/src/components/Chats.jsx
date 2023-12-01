import defaultUser from "../assets/blank-profile.svg";
import "../styles/Home.css";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src={defaultUser} alt="" />
        <div className="userChatInfo">
          <span>john1</span>
          <p>no</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={defaultUser} alt="" />
        <div className="userChatInfo">
          <span>john2</span>
          <p>good y</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={defaultUser} alt="" />
        <div className="userChatInfo">
          <span>john3</span>
          <p>yes..</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
