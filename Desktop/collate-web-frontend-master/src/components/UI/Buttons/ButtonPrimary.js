import React from 'react';
// import './ButtonPrimary.css'

const ButtonPrimary=({...otherProps})=>{
    return(
        <button className="btn btn-info mt-2 login-btn" {...otherProps} />
    )
}
export default ButtonPrimary