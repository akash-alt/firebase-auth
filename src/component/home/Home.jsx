import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <div>
                <h3>
                    <Link to="/login">Login</Link>
                </h3>

                <h3>
                    <Link to="/signup">SignUp</Link>
                </h3>
            </div>
            <hr />
            <hr />
            <hr />
            <h2>{props.name ? `Welcome - ${props.name}` : "Login Please"}</h2>
        </div>
    )
}

export default Home
