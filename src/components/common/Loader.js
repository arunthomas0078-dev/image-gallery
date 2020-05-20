import React from 'react';
import Popup from "reactjs-popup";

const Loader = (props) => {
    return(
        props.loading && <div class="loading">Loading&#8230;</div>
    )
}

export default Loader;