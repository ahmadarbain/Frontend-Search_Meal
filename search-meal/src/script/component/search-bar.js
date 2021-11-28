class SearchBar extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
   
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            .feature-search {
                min-width: 350px;
                width: 50%;
                padding-top: .5em;
                margin: auto;
                top: 20px;
                position: sticky;
            }
            
            .search-container {
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                padding: 1%;
                border-radius: 100px;
                display: flex;
                position: sticky;
                background-color: white;
                justify-content: center;
            }
            
            .search-container > input {
                width: 70%;
                padding: 15px;
                border: 0;
                color: black;
                border-radius: 100%;
            }
            
            .search-container > input:focus {
                outline: 0;
            }
            
            .search-container > input:focus::placeholder {
                font-weight: normal;
            }
            
            .search-container >  input::placeholder {
                color: darkgrey;
                font-weight: normal;
            }
            
            .search-container > button {
                width: 30%;
                cursor: pointer;
                margin-left: auto;
                padding: 15px;
                border-radius: 50px;
                background-color: #112031;
                color: white;
                border: 0;
                text-transform: uppercase;
                word-spacing: 2px;
            }
            
            @media screen and (max-width: 550px){
                .search-container {
                    width: 100%;
                    padding: 5px;
                }
            
                .search-container > input {
                    width: 75%;
                    padding: 15px;
                }
            
                .search-container > button {
                    width: 30%;
                    padding: 10px;
                }
            
            }         
        </style>
        <div id="feature-search" class="feature-search">        
            <div id="search-container" class="search-container">
                <input placeholder="Searh movie list" id="searchElement" type="search">
                <button id="searchButtonElement" type="submit"><i class="fa fa-search" aria-hidden="true"></i> Search</button>
            </div>
        </div>
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);