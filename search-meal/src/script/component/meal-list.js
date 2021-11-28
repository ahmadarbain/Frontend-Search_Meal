import "./meal-item.js";

class MealList extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set clubs(clubs) {
        this._clubs = clubs;
        this.render();
   }
  
   render() {
        this.shadowDOM.innerHTML = `
        <style>
        meal-item {
            flex: 23%;
            margin-bottom: 18px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            overflow: hidden;
        }                           
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            margin: auto;
            font-size: 34px;
            color: darkgrey;
        }

        @media screen and (max-width: 1000px){
            meal-item {
                flex: 48%;
            }
        }   
        
        @media screen and (max-width: 650px){
            meal-item {
                flex: none;
                display: inline-block;
                width: 100%;
            }
        }   
        </style>
        `;
        this._clubs.forEach(club => {
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.club = club
            this.shadowDOM.appendChild(mealItemElement);
        })
    }

    renderError(message) {
        this.shadowDOM.innerHTML = "";
        this.shadowDOM.innerHTML += `<h2 class="placeholder"> ${message}</h2>`;
    }
}

customElements.define("meal-list", MealList);