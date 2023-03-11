import React, { useState } from "react";
import  classes from './ImageComponent.module.css';
  
const  ImageView=()=>{
    const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  
    return (
        <div className={classes.app}>
            <h2>Add Image:</h2>
            <input type="file" onChange={handleChange} />
            <img src={file}  />

  
        </div>
  
    );
}
  
export default ImageView;