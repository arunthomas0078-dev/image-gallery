import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { RoutedTabs, NavTab } from "react-router-tabs";
import {NAVIGATION_LINKs} from '../utils/NavigationLinks';

class NavBar extends Component {

    state = {
        galleryLinkClassName: "active",
        editGalleryLinkClassName: ""
      };
    
      onLinkClick = async (linkName, e) => {
        switch (linkName) {
          case NAVIGATION_LINKs.GALLERY_LINK:
            this.setState({
                galleryLinkClassName: "active",
                editGalleryLinkClassName: "",
            });
            break;
    
          case NAVIGATION_LINKs.EDIT_GALLERY_LINK:
            this.setState({
                galleryLinkClassName: "",
                editGalleryLinkClassName: "active",
            });
            break;

          case NAVIGATION_LINKs.LOGOUT_LINK:
            await this.setState({
                galleryLinkClassName: "",
                editGalleryLinkClassName: "",
            });
            break;
          default:
            break;
        }
      }

    render()
    {
        return(
            <div className="row">
                <div className ="col-md-12">
                    <div className="gallery-nav-bar">
                        <ul className="gallery-nav float-left">
                            <li className={this.state.galleryLinkClassName} 
                                onClick={(e) => this.onLinkClick(NAVIGATION_LINKs.GALLERY_LINK, e)}>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            {
                                this.props.loggedInUser?
                                <li className={this.state.editGalleryLinkClassName} 
                                    onClick={(e) => this.onLinkClick(NAVIGATION_LINKs.EDIT_GALLERY_LINK, e)}>
                                    <Link to="/gallery/true">Edit Gallery</Link>
                                </li>
                                : null
                            }
                        </ul>    
                        <div 
                            onClick = {this.props.loggedInUser? 
                                       this.props.logOutClick : 
                                       this.props.onLoginClick} 
                            className = "float-right loginLink">
                            {this.props.loggedInUser? 
                            'Logout' : 
                            'Login' }
                        </div>  
                            
                           
                    </div>
                </div>
            </div>

        );
    }
}

export default NavBar;