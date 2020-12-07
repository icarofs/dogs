import React, {useContext} from "react";
import {NavLink} from "react-router-dom";
import {ReactComponent as AdicionarFoto} from "../../assets/adicionar.svg";
import {ReactComponent as Estatisticas} from "../../assets/estatisticas.svg";
import {ReactComponent as MinhasFotos} from "../../assets/feed.svg";
import {ReactComponent as Sair} from "../../assets/sair.svg";
import useMedia from "../../Hooks/useMedia";
import {UserContext} from "../../UserContext";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
    const {userLogout} = useContext(UserContext);

    const mobile = useMedia("(max-width: 40rem)");

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end activeClassName={styles.active}>
                <MinhasFotos/>
                {mobile && "Minhas Fotos"}
            </NavLink>
            <NavLink to="/conta/estatisticas" activeClassName={styles.active}>
                <Estatisticas/>
                {mobile && "Estatísticas"}
            </NavLink>
            <NavLink to="/conta/postar" activeClassName={styles.active}>
                <AdicionarFoto/>
                {mobile && "Adicionar Foto"}
            </NavLink>
            <button onClick={userLogout}>
                <Sair/>
                {mobile && "Sair"}
            </button>
        </nav>
    );
};

export default UserHeaderNav;
