import colis2 from "../images/colis2.png";
import employé2 from "../images/employé2.png";
import PIN from "../images/PIN.png";
import "../style/button.css";


function Button() {
  return (
    <div className="button">
            <button className="button1">
            <img src={colis2} alt="Colis 2" className="icone2" />
            <span>Enregistrer Un Colis</span>
            </button>
            <button className="button1">
            <img src={employé2} alt="Employé 2" className="icone2" />
            <span>Enregistrer Un Employé</span>
            </button>
            <button className="button1">
            <img src={PIN} alt="PIN" className="icone2" />
            <span>Verifier Un PIN</span>
            </button>
    </div>
  );
}

export default Button;
