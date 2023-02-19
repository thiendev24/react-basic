import React from "react";
import axios from "axios";
import withRouter from './withRouter'
import withNavigateHook from "./withNavigateHook ";

class ListUsers extends React.Component {
    constructor() {
        super()
        this.handleShowUserDetail = this.handleShowUserDetail.bind(this);
    }
    state = {
        listUsers: [],
        user: {}
    }
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=2');
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    handleShowUserDetail = (item) => {
        this.props.navigation(`/list-users/${item.id}`)
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
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 && listUsers.map((item) => {
                            return (
                                <tr key={item.id} data-id={item.id} onClick={() => { this.handleShowUserDetail(item) }}>
                                    <td>{item.id}</td>
                                    <td>{item.first_name} {item.last_name}</td>
                                    <td>{item.email}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(withNavigateHook(ListUsers));