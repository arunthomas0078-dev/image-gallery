import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/css/boostrap-theme.css";
import "../styles/css/gallery.css";
import NavBar from './NavBar';
import ContentPageRouting from './ContentPageRouting';

const Layout = (props) => {
    return(
        <div className="container-fluid">    
            <NavBar {...props}></NavBar>
            <div className = "row pt-76">
                <div className ="col-md-12">
                    <ContentPageRouting/>
                </div>
            </div>
        </div>
    )
}

export default Layout;