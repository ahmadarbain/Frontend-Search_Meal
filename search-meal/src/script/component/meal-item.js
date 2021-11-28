class MealItem extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
 
    
    set club(club) {
        this._club = club;
        this.render();
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        meal-list {
            margin-top: 100px;
            width: 100%;
            padding: 42px;
            display: flex;
            flex-wrap: wrap;
            gap: 2%;
            justify-content: space-around;
        }
        
        .fan-art-club {
            width: 100%;
            max-height: 300px;
            object-fit: cover;
            object-position: center;
        }
        
        .meal-info {
            padding: 20px;
        }

        .description{
            width: 100%;
            text-align: left;
        }
        
        h2 {
            font-weight: bolder;
            font-size: 24px;
        }
        
        h3 {
            font-weight: lighter;
            font-size: 16px;
        }
        
        p {
            font-size: 14px;
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        } 
        </style>
        <img class="fan-art-club" src="${this._club.strMealThumb}" alt="Fan Art">
        <div class="meal-info">
            <h2>${this._club.strMeal}</h2>
            <div id="description" class="description">    
                <h3><b>Country : </b>${this._club.strArea}</h3>
                <h3><b>Instruction :</b></h3>
                <p>${this._club.strInstructions}</p>
            </div>
        </div>
        `; 
    }
 }

 customElements.define("meal-item", MealItem);