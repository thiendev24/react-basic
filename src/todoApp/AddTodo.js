import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error('Must enter todo!');
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        }
        this.props.AddTodo(todo);
        this.setState({
            title: ''
        })
    }
    render() {
        let { title } = this.state;
        return (
            <div>
                <input type='text' value={title} onChange={(event) => this.handleChangeTitle(event)}></input>
                <button type="button" className="btn btn-primary mx-2" onClick={() => { this.handleAddTodo() }}>Add</button>
            </div>
        )
    }
}

export default AddTodo;