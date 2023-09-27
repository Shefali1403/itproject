import React from "react"
import { MDBBtn } from "mdb-react-ui-kit";
const Contactpage=()=>{
    return(
        <>
        <div className="contact-cont">

        <h2 className="common-heading">Contact Page</h2>
        <div className="contact-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.794845159612!2d77.03575637418564!3d28.605930785290564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d053340000001%3A0x43728703a210ae01!2sDeen%20Dayal%20Upadhyaya%20College!5e0!3m2!1sen!2sin!4v1695010803313!5m2!1sen!2sin" width="100%" height="350" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="contact-form-cont">
            <form action="https://formspree.io/f/mrgwlypp" method="post" className="contact-form">
                <input type="text" name="Username" placeholder="username" required autoComplete="off" />
                <input type="email" name="Email" placeholder="Enter your email" required autoComplete="off"/>
                <textarea name="Message" placeholder="Enter your message" cols="40" rows="90" required autoComplete="off"></textarea>
                {/* <MDBBtn style={{marginBottom:'2rem', height:'60vh'}}>Send</MDBBtn>  */}
                <input type="submit" value="Send" />
            </form>
            </div>
        </div>
    </>
    )
}
export default Contactpage;