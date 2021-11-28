import "../component/search-bar.js";
import "../component/meal-list.js";
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const mealListElement = document.querySelector("meal-list");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchClub(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    };

    const renderResult = results => {
        mealListElement.clubs = results;
    };
  
    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;