import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Gallery from '../containers/Gallery';

const ContentPageRouting = () => {
    return(
        <>
            <Switch>
                <Route exact path="/" component={ Gallery } ></Route>
                <Route exact path="/gallery" component={ Gallery } ></Route>
                <Route exact path="/gallery/:isEdit?" component={Gallery} ></Route>  
            </Switch>
        </>
    )
}

export default ContentPageRouting;