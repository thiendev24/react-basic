import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
    state = {
        listUsers: []
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }

    render() {
        let { listUsers } = this.state;
        return (
            <div className="container mt-3">
                <h2>Users</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                            return (
                                <tr key={item.id} data-id={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ListUsers;