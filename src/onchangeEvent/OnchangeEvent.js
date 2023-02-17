import React from 'react';
class OnchangeEvent extends React.Component {
    state = {
        id: 10,
        name: 'hello'
    }

    handleOnchangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return (
            <React.Fragment>
                <div>
                    <input value={this.state.name} type="text" onChange={(event) => { this.handleOnchangeInput(event) }}></input>
                    <h1>hello {this.state.name}</h1>
                </div>
                <div>{this.state.id}</div>
            </React.Fragment>
        )
    }
}

export default OnchangeEvent;
