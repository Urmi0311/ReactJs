import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './ListUser.css';


function ListUser() {

    const [contacts, setContacts] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios.get('http://localhost/Reactjs/Phase3/api/index.php').then(function(response) {
            console.log(response.data);
            setContacts(response.data);
        });
    }


    const deleteContact = (id) => {
        const valid = window.confirm('Do you  Want to Delete ?');
        if(valid) {

            axios.delete(`http://localhost/Reactjs/Phase3/api/index.php/delete?id=${id}`)
                .then(function (response) {
                    getUsers();
                });
        } else {
            alert("not deleted")
            getUsers();
        }

    }
    return (
        <div>
            <h1>List Users</h1>
            <table className="user-table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    contacts.map((user, key) =>(
                            <tr key={key}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.mobile}</td>
                                <td>
                                    <Link to={`${user.id}/edit`} className="edit-link">Edit</Link>
                                    <button onClick={() => deleteContact(user.id)} className="delete-button user-delete-button">Delete User</button>
                                </td>
                            </tr>
                        )
                    )
                }


                </tbody>
            </table>
        </div>
    )
}
export default ListUser