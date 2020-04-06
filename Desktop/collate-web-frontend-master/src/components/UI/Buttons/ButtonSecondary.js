import React from 'react';
// import './ButtonSecondary.css'

const ButtonSecondary=({...otherProps})=>{
    return(
        <button className="btn btn-info mt-2 new-act-btn" {...otherProps}/>
    )
}
export default ButtonSecondary