import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="nav-item">
                <button className="nav-btn"
                onClick={() => {
                    props.history.push({pathname:"/Dive"})
                }}>HOME</button>
            </li>
            <li className="nav-item">
                Thank you for playing DIVE
            </li>
            {
                (localStorage.getItem("dive_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink nav-btn"
                            onClick={() => {
                                localStorage.removeItem("dive_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}