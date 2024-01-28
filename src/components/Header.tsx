import HeaderStyle from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export function Header() {
  return (
    <header className={HeaderStyle.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
      <div>
        <span>Dev Feed</span>
      </div>
    </header>
  );
}
