import React from 'react';
class Form extends React.Component {
    state = {
        fname: '',
        lname: ''
    }

    handleChangeFirstName = (event) => {
        this.setState({
            fname: event.target.value
        })
    }

    handleChangeLastName = (event) => {
        this.setState({
            lname: event.target.value
        })
    }

    handleSubmit = () => {
        console.log(this.state);
    }
    render() {
        return (
            <>
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
                                value={this.state.fname}
                                onChange={(event) => { this.handleChangeFirstName(event) }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lname">Last Name:</label>
                            <input
                                type="text"
                                id="lname"
                                className="form-control"
                                placeholder="Enter Last Name"
                                value={this.state.lname}
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
            </>
        )
    }
}

export default Form;