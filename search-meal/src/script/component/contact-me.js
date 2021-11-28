import img1 from "../../../assets/contact-me-1.png";
import img2 from "../../../assets/contact-me-2.png";
import img3 from "../../../assets/contact-me-3.png";

class ContactMe extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        h4{
            font-size: 32px;
        }
        
        a{
            width: 100%;
            color: white;
            text-decoration: none;
            padding: 10px;
        }
        
        .copyrights{
            padding-top: 24px;
        }
        img{
            width: 50px;
        }
        </style>
        <div class="contact-me" id="contact-me">
        <h4>Contact Me</h4>
        <div>
            <a href="https://github.com/ahmadarbain"> 
                <img src=${img1} alt="Github"></img>
            </a>
            <a href="https://www.linkedin.com/in/ahmad-arbain-33201b1bb/">
                <img src=${img2} alt="LinkedIn"></img>
            </a>
            <a href="https://web.facebook.com/profile.php?id=100004629017092">
                <img src=${img3} alt="Facebook"></img>
            </a>
        </div>
        </div>
        <div class="copyrights" id="copyrights">
            <p>	&copy; 2021 Arbain, Inc. All Rights Reserved.</p>
        </div>
        `;
    }
 }

 customElements.define("contact-me", ContactMe);