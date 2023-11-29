import '../styles/Home.css'
import sendImg from '../img/img.png'
import Attach from '../img/attach.png'



const Input = () => {
  return (
    <div className='msg-input'>
      <input type="text" placeholder='Enter your chat here...' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:'none'}} id='file' />
        <label htmlFor="file">
          <img src={sendImg} alt="send img" />
        </label>
        <button className="send">
          send
        </button>
      </div>
    </div>
  )
}

export default Input