import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">🧠 BrainApp</Link>
      <div className="nav-links">
        <Link to="/">Accueil</Link>
        <Link to="/catalogue">Catalogue</Link>
      </div>
    </nav>
  );
}