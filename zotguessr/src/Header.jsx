import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-title"></div>
      <nav className="nav">
        <Link className="nav-link" to="/">Home</Link>
      </nav>
      <nav className="nav">
        <Link className="nav-link" to="/quiz">Quiz</Link>
      </nav>
    </header>
  );
}

export default Header;
