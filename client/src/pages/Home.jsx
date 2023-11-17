import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-content">
        <h2>Welcome to MotoMetrics!</h2>
        {/* Add  sign-in/up form here */}
        {/* Add description and instructions here */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
