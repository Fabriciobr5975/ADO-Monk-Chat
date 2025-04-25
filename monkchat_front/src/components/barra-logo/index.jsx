import "./index.scss";
import logoMonk from "../../assets/images/logo_monk.png";

export default function BarraLogo() {
  return (
    <div className="comp-barra-logo">
      <img className="logo-monk" src={logoMonk} alt="logo-monk" />

      <label className="logo-txt">MonkChat</label>
    </div>
  );
}
