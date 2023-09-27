import React from "react";
import { FaShippingFast, FaCreativeCommonsNc, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
const Services=()=>{
    return(
        <>
        <div className="grid-service-cont">
            <div className="grid-three-col">
                <div className="service1">
                    <div className="card">
                        <div className="box">

                    <FaShippingFast/>
                        </div>
                    <p>Safe and easy shipping</p>
                    </div>
                </div>
                <div className="service2">
                    <div className="serv-col">
                    <div className="box">

                        <FaShieldAlt/>
                    </div>
                        <div className="para">
                        <p>Non-contact Shipping</p>

                        </div>

                    </div>
                    <div className="serv-col">
                    <div className="box">

                    <FaRupeeSign/>
                    </div>
                    <div className="para">

                    <p>Money-back Gurranteed</p>
                    </div>

                    </div>
                </div>
                <div className="service3">
                <div className="card">
                <div className="box">

                    <FaCreativeCommonsNc/>
                </div>
                    <p>Safe and easy shipping</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};
export default Services;
