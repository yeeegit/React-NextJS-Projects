
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
