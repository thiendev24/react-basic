import React from "react";
import book from '../assets/images/book.jpg';

class Home extends React.Component {
    render() {
        return (
            <>
                <div><h1>Home page</h1></div>
                <div>
                    <img src={book} alt="book"></img>
                </div>
            </>
        )
    }
}

export default Home;