import React from "react";
import withRouter from './withRouter'
import axios from "axios";

class DetailsUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props && this.props.params) {
            let id = this.props.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res.data.data
            })
        }
    }
    render() {
        let { user } = this.state;
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
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default withRouter(DetailsUser); 