import React, { useState, useEffect } from "react";
import Axios from "axios";

function Users() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await Axios.get(
            "https://5ee6917452bb0500161fceac.mockapi.io/users"
        );
        console.log(data);

        setItems(data.data);
    };
    return (
        <div className="container">
            <h1>Usuários</h1>
            <table className="table table-striped table-hover table-dark">
                <thead className="thead-dark">
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Criado em</th>
                        <th>Modificado em</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.created}</td>
                            <td>{item.modified}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Users;
