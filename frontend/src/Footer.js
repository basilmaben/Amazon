import React from 'react'
import './Footer.css'

function Footer(){
    return(
    <div className = "footerarea">
        <div className = "footerarea__top">
            <p> Back to Top</p>
        </div>
        <div className = "footerarea__links">
            <div className = "footerarea__linkarea">
                <span>Column 1</span>
            </div>
            <div className = "footerarea__linkarea">
                <span>Column 2 </span>
            </div>
            <div className = "footerarea__linkarea">
                <span>Column 3</span>
            </div>
            <div className = "footerarea__linkarea">
                <span>Column 4</span>
            </div>
        </div>
    </div>
    )

}
export default Footer