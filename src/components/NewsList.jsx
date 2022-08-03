import React from 'react'
import { Link } from 'react-router-dom'
import './NewsList.css'


const NewsList = () => {


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning " >

                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto topnav">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/">General </Link>
                        </li>
                        <li className="nav-item" >
                            <Link className="nav-link"  to="/business" >Business </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>

                    </ul>
                </div>




            </nav>

        </>
    )
}

export default NewsList
