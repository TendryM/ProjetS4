import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // 👈 Importation du style dédié à l'accueil

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page-container">
      <div className="home-content">
        {/* Section Héro */}
        <header className="hero-section">
          <h1>Boostez vos capacités cognitives au quotidien 🧠</h1>
          <p>
            Une plateforme ludique, moderne et accessible pour entraîner votre mémoire, 
            votre logique et votre rapidité d'esprit à travers des défis interactifs.
          </p>
          <button onClick={() => navigate("/catalogue")} className="btn-duolingo">
            Commencer l'entraînement
          </button>
        </header>

        <hr className="separator" />

        {/* Corps de présentation */}
        <main className="main-content">
          <section className="info-block">
            <h2>🎯 À propos du projet</h2>
            <p>
              Notre application est née d'un constat simple : le cerveau humain, tout comme un muscle, 
              a besoin d'un entraînement régulier pour maintenir et développer ses performances. 
              Inspirée par les mécanismes de <strong>gamification</strong> popularisés par des applications 
              de référence comme Duolingo, cette plateforme propose une approche scientifique mais divertissante 
              de la stimulation cérébrale.
            </p>
          </section>

          <section className="info-block">
            <h2>💡 Pourquoi choisir notre entraînement ?</h2>
            <p>
              Chaque module présent dans notre catalogue cible des fonctions neuro-cognitives bien précises :
            </p>
            <ul>
              <li><strong>La Mémoire Visuelle :</strong> Travaillée activement via notre module de Memory, essentiel pour la rétention d'informations spatiales à court terme.</li>
              <li><strong>L'Agilité Numérique :</strong> Stimulée par des défis de rapidité qui forcent le cerveau à exécuter des calculs logiques sous pression.</li>
              <li><strong>Le Raisonnement Abstrait :</strong> Développé grâce à l'analyse de motifs complexes et de suites logiques.</li>
            </ul>
          </section>

          <section className="info-block">
            <h2>🛠️ Les piliers techniques de notre prototype (SPA)</h2>
            <p>
              Développé avec <strong>React</strong> et propulsé par <strong>Vite</strong>, ce prototype met en avant les technologies modernes du web de manière optimisée :
            </p>
            <ul>
              <li><strong>Single Page Application (SPA) :</strong> Grâce au routage dynamique, la transition entre la présentation et les jeux se fait instantanément, sans aucun rechargement de page Web.</li>
              <li><strong>Composants Modulaires :</strong> L'architecture du code respecte le principe de réutilisabilité. L'ajout d'un nouveau jeu se fait de manière transparente via une simple mise à jour de notre structure de données.</li>
            </ul>
          </section>

          {/* Call to Action de fin */}
          <section className="cta-box">
            <h3>Prêt à tester vos limites ?</h3>
            <p>Choisissez un jeu dans le catalogue et configurez votre niveau de difficulté.</p>
            <button onClick={() => navigate("/catalogue")} className="btn-duolingo">
              Accéder aux jeux
            </button>
          </section>
        </main>
      </div>
    </div>
  );
}