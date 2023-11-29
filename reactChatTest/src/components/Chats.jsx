import defaultUser from "../assets/blank-profile.svg";
import "../styles/Home.css";

const Chats = () => {
  return (
    <div className="chats">
      <div className="user-chat">
        <img src={defaultUser} alt="" />
        <div className="userChatInfo">
          <span>not really john</span>
          <p>wassup</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={defaultUser} alt="" />
        <div className="userChatInfo">
          <span>really john</span>
          <p>good y</p>
        </div>
      </div>
      <div className="user-chat">
        <img src={defaultUser} alt="" />
        <div className="userChatInfo">
          <span>catLover33</span>
          <p>meh</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
