import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/SearchView';
import { elements, renderLoader, clearLoader } from './views/base';

// Global state of the app (search object, current recipe, shopping list, likes)
const state = {};

const controlSearch = async () => {
    // Get query from view
    const query = searchView.getInput();

    if (query) {
        // New search object and add to state
        state.search = new Search(query);

        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // Search for recipes
            await state.search.getResults();
    
            // Render results on UI
            clearLoader();
            searchView.renderResults(state.search.result);

        } catch (err){
            alert('Something went wrong with the search')
            clearLoader();
        }
    }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

// testing
// window.addEventListener('load', e => {
//     e.preventDefault();
//     controlSearch();
// })

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

// RECIPE CONTROLLER
const controlRecipe = async () => {
    // Get id from URL 
    const id = window.location.hash.replace('#', '');
    if (id) {
    // Prepare UI 

    // Create new recipe object
    state.recipe = new Recipe(id);


        try {
            // Get recipe data and parse ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();
        
            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();
        
            // Render recipe
            console.log(state.recipe);
            
        } catch (err) {
            alert('Error processing recipe')
        }
    }
};

// window.addEventListener('hashchange', controlRecipe);
// window.addEventListener('load', controlRecipe);

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));