import logo from '../../../assets/logo.png';

class AppBar extends HTMLElement {

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
            app-bar {
                display: block;
                width: 100%;
                text-align: center;
                background-color: #112031;
                color: #112031;
                float: inline-start;
            }

            img {
                width: 350px;
            }
        </style>
        <img src=${logo} alt="Logo"></img>`;
    }
 }

 customElements.define("app-bar", AppBar);