import React from 'react';
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to='/'>Home <span className="sr-only">(current)</span></Link>
                    <Link className="navbar-brand" to='/manage-post'>Admin</Link>
                    <Link className="navbar-brand" to='/create-post'>Create</Link>
                </div>
            </nav>
      
   
    )
}
