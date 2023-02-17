import React from "react";
// import './assets/scss/todos.scss';
import './todos.scss'
import 'bootstrap/dist/css/bootstrap.css';
import AddTodo from './AddTodo'
import { toast } from 'react-toastify';

class Todos extends React.Component {
    state = {
        todoList: [
            { id: 1, title: "sleeping" },
            { id: 2, title: 'eating' },
            { id: 3, title: 'coding' }
        ],
        editTodo: {}
    }

    AddTodo = (todo) => {
        this.setState({
            todoList: [...this.state.todoList, todo]
        })
        toast.success('Add todo success!');
    }

    handleDeleteTodo = (todo) => {
        let currentTodoList = this.state.todoList;
        currentTodoList = currentTodoList.filter(item => item.id !== todo.id)
        this.setState({
            todoList: currentTodoList
        })
        toast.success('Delete todo success!');
    }

    handleEditTodo = (todo) => {
        let { todoList, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //save
        if (!isEmptyObj && todo.id === editTodo.id) {
            let todoListCopy = [...todoList];
            let todoIndex = todoListCopy.findIndex(item => item.id === todo.id);
            todoListCopy[todoIndex].title = editTodo.title;

            this.setState({
                todoList: todoListCopy,
                editTodo: {}
            })

            toast.success('Edit todo success');
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        const { todoList, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        return (
            <>
                <AddTodo
                    AddTodo={this.AddTodo}
                />
                <div className="container mt-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th colSpan={'2'}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todoList && todoList.length > 0 && todoList.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        {
                                            isEmptyObj ?
                                                <td>{item.title}</td>
                                                :
                                                <>
                                                    {editTodo.id === item.id ?
                                                        <td><input value={this.state.editTodo.title}
                                                            onChange={(event) => { this.handleOnchangeEditTodo(event) }}></input></td>
                                                        :
                                                        <td>{item.title}</td>
                                                    }
                                                </>
                                        }
                                        <td>
                                            <button className="btn edit" onClick={() => { this.handleEditTodo(item) }}>
                                                {!isEmptyObj && editTodo.id === item.id ? 'Save' : 'Edit'}
                                            </button>
                                        </td>
                                        <td><button className="btn delete" onClick={() => { this.handleDeleteTodo(item) }}>Delete</button></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Todos;