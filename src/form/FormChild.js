import React from "react";

class FormChild extends React.Component {

    render() {
        const { name, email, arrayUsers } = this.props;
        return <>
            <div>
                name: {name}, email: {email}
            </div>
            <div>
                <ul>
                    {arrayUsers.map((item) => {
                        return (
                            <li key={item.id}>{item.id} - {item.name} - {item.email}</li>
                        )
                    })}
                </ul>
            </div>
        </>
    }
}

export default FormChild;