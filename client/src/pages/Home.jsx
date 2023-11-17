import Header from '../components/Header';
import Footer from '../components/Footer';
import Login from '../components/Login';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <h2>Welcome to MotoMetrics!</h2>
        <Login />
        {/* Add description and instructions here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
