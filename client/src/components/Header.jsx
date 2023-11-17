import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>MotoMetrics</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/search">Search</Link>
        <Link to="/compare">Compare</Link>
      </nav>
    </header>
  );
};

export default Header;
