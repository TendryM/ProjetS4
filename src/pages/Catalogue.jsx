import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import { listDeJeux } from "../data/games";
import "../styles/Catalogue.css"; // 👈 Importation du style dédié au catalogue

export default function Catalogue() {
  const [selectedGame, setSelectedGame] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="catalogue-container">
      
      {/* PANNEAU GAUCHE : Détails du jeu sélectionné (Fixe) */}
      <div className="details-panel">
  {selectedGame ? (
    /* SI selectedGame N'EST PAS NULL : On affiche les détails du jeu cliqué */
    <div className="game-details-content">
      <span className="details-icon">{selectedGame.icon}</span>
      <h2>{selectedGame.title}</h2>
      <span className={`badge ${selectedGame.difficulty.toLowerCase()}`}>
        {selectedGame.difficulty}
      </span>
      <p className="details-description">{selectedGame.description}</p>
      <button
        onClick={() => navigate(selectedGame.path)}
        className="btn-duolingo"
        style={{ width: '100%', marginTop: '25px' }}
      >
        Jouer au jeu 🚀
      </button>
    </div>
  ) : (
    /* SI selectedGame EST NULL (Au premier chargement) : On affiche le message d'attente */
    <div className="no-selection">
      <div className="no-selection-icon" style={{ fontSize: "4rem", marginBottom: "15px" }}>🎮</div>
      <h3>Sélectionnez un défi</h3>
      <p style={{ color: "#777" }}>
        Cliquez sur un mini-jeu dans la liste de droite pour voir ses détails et lancer votre entraînement !
      </p>
    </div>
  )}
</div>

      {/* PANNEAU DROITE : Grille adaptative de cartes (Scrollable) */}
      <div className="list-panel">
        <h3 className="list-title">Jeux Disponibles ({listDeJeux.length})</h3>
        <div className="scrollable-list">
          <div className="game-grid">
            {listDeJeux.map((jeu) => (
              <GameCard
                key={jeu.id}
                title={jeu.title}
                icon={jeu.icon}
                difficulty={jeu.difficulty}
                isActive={selectedGame && selectedGame.id === jeu.id}
                onSelect={() => setSelectedGame(jeu)}
              />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}