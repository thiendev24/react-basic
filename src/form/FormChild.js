import React from "react";

class FormChild extends React.Component {
    state = {
        showUsers: false
    }

    handleShowHide = () => {
        this.setState({
            showUsers: !this.state.showUsers
        })
    }

    handleRemove = (user) => {
        this.props.deleteUser(user)
    }
    render() {
        const { arrayUsers } = this.props;
        let showUsers = this.state.showUsers;
        return <div>
            {
                !showUsers ?
                    <div>
                        <button className="btn btn-warning" onClick={() => { this.handleShowHide() }}>show</button>
                    </div>
                    :
                    <>
                        <div>
                            <ul>
                                {
                                    arrayUsers.map((item) => {
                                        if (item.name.length > 5) {
                                            return (
                                                <li key={item.id}>
                                                    {item.id} -
                                                    {item.name} -
                                                    {item.email} -
                                                    <span onClick={() => { this.handleRemove(item) }}>x</span>
                                                </li>
                                            )
                                        }
                                    })
                                }
                            </ul>
                        </div>
                        <div>
                            <button className="btn btn-warning" onClick={() => { this.handleShowHide() }}>hide</button>
                        </div>
                    </>
            }

        </div>
    }
}

export default FormChild;