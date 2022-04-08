import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <div>
                <h1>
                    <Link to="/login">Login</Link>
                </h1>
                <hr />
                <h1>
                    <Link to="/signup">SignUp</Link>
                </h1>
            </div>
            <hr />
            <hr />
            <hr />
            <h2>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
        </div>
    )
}

export default Home