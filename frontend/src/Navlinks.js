import { Link } from '@material-ui/core'
import React from 'react'
import './Navlinks.css'

function Navlinks(){
    return(
        <div className = "navlinks">
            <div className = "navlinks__outer">
                <div className = "navlinks__inner">
                <Link>Today's Deals</Link>
                <Link>Sell</Link>
                <Link>Gift Cards</Link>
                <Link>Customer Service</Link>
                <Link>Registry</Link>
                </div>
               
                
            </div>

        </div>
    )

}
export default Navlinks