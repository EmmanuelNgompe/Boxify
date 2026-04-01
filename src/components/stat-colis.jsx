import '../style/stat-colis.css';


function StatColis() {
    
    let x="15c";
    let y="04c";
    return (
        <div className="stat-colis">
            <div className="stat-card">
                <h3 className="stat-title">colis enregistrés</h3>
                <div className="stat-value">
                {x} <span className="arrow down">↓</span>
                </div>
                <p className="stat-subtitle">pour les 7 derniers jour</p>
                <a href="#" className="stat-link">package report →</a>
            </div>

            <div className="stat-card">
                <h3 className="stat-title">Colis livré</h3>
                <div className="stat-value">
                {y} <span className="arrow up">↑</span>
                </div>
                <p className="stat-subtitle">sur les 7 derniers jour</p>
                <a href="#" className="stat-link">All packages delivered →</a>
            </div>

            <div className="stat-card">
                <h3 className="stat-title">Activités</h3>
                <div className="activity-content">
                    <div className="activity-text">
                        <div className="stat-value">26,7%</div>
                        <p className="stat-subtitle">livré</p>
                    </div>
                    <svg width="100" height="60" className="gauge">
                        <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#facc15"
                        strokeWidth="10"
                        strokeDasharray="251.2"
                        strokeashoffset="184.2"
                        transform="rotate(180 50 50)"
                        />
                    </svg>
                </div>
            </div>

        </div>
    );
}

export default StatColis;