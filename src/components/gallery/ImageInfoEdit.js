import React from 'react';

const ImageInfoEdit = (props) => {

    return(
        <>
            <div class="form-group">
                <label className ="col-md-2 text-right font-weight-bold">Title:</label>
                <input type ="text" 
                    name="title"
                    className="user-input-box col-md-7 ml-md-1"
                    value = {props.image.title}  
                    onChange ={props.changeImageInfoHandler}></input>
            </div>
        <div class="form-group">
                <label className ="col-md-2 text-right font-weight-bold">Author:</label>
                <input type ="text" 
                    className="user-input-box col-md-7 ml-md-1"
                    name="author"
                    value = {props.image.author}  
                    onChange ={props.changeImageInfoHandler}></input>
            </div>
            <div class="form-group">
                <label className ="col-md-2 text-right font-weight-bold">Description:</label>
                <input type ="text" 
                    className="user-input-box col-md-7 ml-md-1"
                    name="description"
                    value = {props.image.description}  
                    onChange ={props.changeImageInfoHandler}></input>
            </div>
            <input type ="button"
                    value ="Update"
                    className = "btn btn-success btn-sm"
                    onClick ={props.saveImageInfoHandler}></input>
        </>
    )

}

export default ImageInfoEdit;