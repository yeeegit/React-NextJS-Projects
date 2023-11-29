import '../styles/Home.css'
import defaultUser from '../assets/blank-profile.svg'
const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"><h3>wazzaaApp</h3></span>
      <div className="user">
        <img src={defaultUser} alt="" />
        <span>John Doe</span>
        <button className='logout-btn'>logout</button>
      </div>
    </div>
  )
}

export default Navbar