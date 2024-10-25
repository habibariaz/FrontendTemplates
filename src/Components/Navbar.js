import React from 'react'
import { Link } from 'react-router-dom'
import "../Style/style.css"

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className='left_nav'>
                    <a className="navbar-brand" href="#" style={{ marginLeft: "-5px", color: "white", fontSize: "20px" }}>AVO</a>
                </div>
                <div className='right_nav'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNav" aria-controls="navbarNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto"> {/* Add ml-auto here */}
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Work">Work</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar