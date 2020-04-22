import React from 'react'
import preloader from "../../utils/preloader.gif"
import './Preloader.css'

const Preloader = ()=> {
    return(
        <div className="preloader">
            <img src={preloader} alt="preloader"/>
        </div>
    )
}

export default Preloader