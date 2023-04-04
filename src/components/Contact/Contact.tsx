import './Contact.scss'

import LinkedIn from '../../assets/linkedin.png';
import Email from '../../assets/email.png'

function Contact() {
    return (
        <div className="Contact">
            <div className="Contact__Container">
                <div className="Contact__Left">
                    <h1 className="Contact__Title" id="contact">Contact</h1>
                    <p className="Contact__Description">
                        Wil je nog meer weten over mij? Contacteer me via E-mail of LinkedIn.
                    </p>
                </div>
                <div className="Contact__Right">
                    <div className="Contact__Row">
                        <div className="Contact__Item">
                            <a href="">
                                <img className="Contact__Image Contact__Image--Small" src={LinkedIn} alt="" />
                            </a>
                        </div>
                        <div className="Contact__Item">
                            <a href="">
                                <img className="Contact__Image" src={Email} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
