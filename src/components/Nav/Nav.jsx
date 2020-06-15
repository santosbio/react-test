import React, { Component } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <nav>
                <h3>Meu App</h3>
                <ul>
                    <li>
                        <Link to="/users">Usuários</Link>
                    </li>

                    <li>
                        <Link to="/stations">Estações</Link>
                    </li>

                    <li>
                        <Link to="/farms">Fazendas</Link>
                    </li>

                    <li>
                        <Link to="/">Login</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
