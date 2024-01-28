import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

import Styles from "./SideBar.module.css";

export function SideBar() {
  return (
    <>
      <aside className={Styles.sidebar}>
        <img
          className={Styles.cover}
          src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Imagem capa do perfil"
        />

        <div className={Styles.profile}>
          <Avatar src="https://github.com/carloshenriqueg.png" />

          <strong>Carlos Henrique</strong>
          <span>Student @Rocketseat</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </aside>
    </>
  );
}
