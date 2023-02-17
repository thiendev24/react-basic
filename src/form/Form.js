import React from 'react';
import FormChild from './FormChild';
import FormComponent from './FormComponent';

class Form extends React.Component {
    state = {
        arrayUsers: [
            { id: 1, name: 'Ronaldo', email: 'ronaldo@gmail.com' },
            { id: 2, name: 'Messi', email: 'messi@gmail.com' },
            { id: 3, name: 'Beckham', email: 'beck@gmail.com' }
        ]
    }

    addNewUser = (user) => {
        // let currentUsers = this.state.arrayUsers;
        // currentUsers.push(user)
        this.setState({
            // arrayUsers: currentUsers
            arrayUsers: [...this.state.arrayUsers, user]
        })
    }

    deleteUser = (user) => {
        let currentUsers = this.state.arrayUsers;
        currentUsers = currentUsers.filter(item => item.id !== user.id);
        this.setState({
            arrayUsers: currentUsers
        })
    }
    render() {
        return (
            <>
                <FormComponent
                    addNewUser={this.addNewUser}
                />
                <FormChild
                    name={'thien'}
                    email={'thien@gmail.com'}
                    arrayUsers={this.state.arrayUsers}
                    deleteUser={this.deleteUser}
                />
            </>
        )
    }
}

export default Form;