export default function GameCard({ title, icon, difficulty, onSelect, isActive }) {
  return (
    <div 
      className={`game-card-rectangular ${isActive ? 'active' : ''}`} 
      onClick={onSelect}
    >
      <div className="card-icon">{icon}</div>
      <h4 className="card-title">{title}</h4>
      <span className={`badge-mini ${difficulty.toLowerCase()}`}>
        {difficulty}
      </span>
    </div>
  );
}