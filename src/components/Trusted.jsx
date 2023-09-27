import React from 'react'
import { BsFillBadgeAdFill } from "react-icons/bs";
import { DiApple, DiCodeigniter, DiLinux ,DiSymfonyBadge} from "react-icons/di";
const Trusted=()=>{
    return(
        <>
        <div className="grid-trusted-cont">
         <p><b>Trusted by 1000+ Companies</b></p>
         <div className="grid-logos">
            <div className="logo-box">
         <BsFillBadgeAdFill style={{fontSize:'2.5rem'}}/>

            </div>
            <div className="logo-box">
         <DiApple style={{fontSize:'2.5rem'}}/>
         </div>
         <div className="logo-box">
         <DiCodeigniter style={{fontSize:'2.5rem'}}/>
         </div>
         <div className="logo-box">
         <DiLinux style={{fontSize:'2.5rem'}}/>
         </div>
         <div className="logo-box">
         <DiSymfonyBadge style={{fontSize:'2.5rem'}}/>
         </div>

         </div>
        </div>
        </>
    )
}
export default Trusted;