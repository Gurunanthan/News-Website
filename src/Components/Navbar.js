import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class Navbar extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-xl bg-success  mb-5">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/"><h1>News Guru</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/">Home</Link>
                            </li>
                             
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/entertainment">Entertainment</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" aria-current="page" to="/technology">Technology</Link>
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
  }
}

export default Navbar