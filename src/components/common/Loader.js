import React from 'react';
import Popup from "reactjs-popup";
import loading from '../../loading.gif';

const Loader = (props) => {
    return(
        // props.loading && <img className = "loading" src={loading}/>
        props.loading && <div class="loading">Loading&#8230;</div>
    )
}

export default Loader;