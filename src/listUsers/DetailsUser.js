import React from "react";
import withRouter from './withRouter'
import axios from "axios";
import withNavigateHook from "./withNavigateHook ";


class DetailsUser extends React.Component {
    constructor() {
        super()
        this.handleBackBtn = this.handleBackBtn.bind(this);
    }
    state = {
        user: {},
        redirect: false
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
    handleBackBtn = () => {
        this.props.navigation('/list-users');
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (
            <div className="container mt-3">
                <h2>Users</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isEmptyObj &&
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.first_name} {user.last_name}</td>
                                <td>{user.email}</td>
                                <td><img src={user.avatar} alt={user.id}></img></td>
                            </tr>
                        }
                    </tbody>
                </table>
                <div>
                    <button className="btn btn-primary" type="button" onClick={() => { this.handleBackBtn() }}>Back</button>
                </div>
            </div>
        )
    }
}

export default withRouter(withNavigateHook(DetailsUser)); 