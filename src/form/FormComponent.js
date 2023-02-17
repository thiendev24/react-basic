import React from "react";

class FormComponent extends React.Component {
    state = {
        name: '',
        email: '',
    }

    handleChangeFirstName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleSubmit = () => {
        console.log(this.state);
        this.props.addNewUser({
            id: Math.floor(Math.random() * 1001),
            name: this.state.name,
            email: this.state.email
        });
    }
    render() {
        return (
            <div className="container mt-3">
                <h2>Stacked form</h2>
                <form>
                    <div className="mb-3 mt-3">
                        <label htmlFor="fname">First Name:</label>
                        <input
                            type="text"
                            id="fname"
                            className="form-control"
                            placeholder="Enter First Name"
                            value={this.state.name}
                            onChange={(event) => { this.handleChangeFirstName(event) }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lname">Email:</label>
                        <input
                            type="text"
                            id="lname"
                            className="form-control"
                            placeholder="Enter Last Name"
                            value={this.state.email}
                            onChange={(event) => { this.handleChangeLastName(event) }} />
                    </div>
                    <div className="form-check mb-3">
                        <label htmlFor="remember" className="form-check-label">
                            <input className="form-check-input" type="checkbox" id="remember" /> Remember me
                        </label>
                    </div>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => this.handleSubmit()}
                    >Submit</button>
                </form>
            </div>
        )
    }
}

export default FormComponent;