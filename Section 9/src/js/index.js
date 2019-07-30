import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/SearchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';



// Global state of the app (search object, current recipe, shopping list, likes)
const state = {};
window.state = state;

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
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Highlight selected search
    if (state.search) searchView.highlightSelected(id);

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
            clearLoader();
            recipeView.renderRecipe(
                state.recipe,
                state.likes.isLiked(id)
                );
            
        } catch (err) {
            alert('Error processing recipe')
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// LIST CONTROLLER

const controlList = () => {
    // Create new list if there isn't one yet
    if (!state.list) state.list = new List();

    // Add each ingredient to list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
}

// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    
    // Handle the delete button
    if(e.target.matches('.shopping__delete, .shopping__delete *')) {
        //Delete from state and UI
        state.list.deleteItem(id);
        listView.deleteItem(id);

    // Handle count update
    } else if (e.target.matches('.shopping__count_value')) {
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
});

// TESTING
state.likes = new Likes();
likesView.toggleLikeMenu(state.likes.getNumLikes());

// LIKE CONTROLLER
const controlLike = () => {
    if (!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // Not liked current recipe
    if (!state.likes.isLiked(currentID)) {
    // add like to state
        const newLike = state.likes.addLike(
        currentID,
        state.recipe.title,
        state.recipe.author,
        state.recipe.img
    );

    // toggle the like btn
    likesView.toggleLikeBtn(true);

    // add like to UI list
        likesView.renderLike(newLike);
    // console.log(state.likes);

    // Has liked current recipe
    } else {
    // remove like from state
        state.likes.deleteLike(currentID);

    // toggle like btn
        likesView.toggleLikeBtn(false);

    // remove from UI list
        likesView.deleteLike(currentID);
    }
        likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if (e.target.matches('.btn-decrease, .btn-decrease *')) {
        // Decrease button is clicked
        if (state.recipe.servings > 1) {
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if (e.target.matches('.btn-increase, .btn-increase *')) {
        // Increase button is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        controlList();
    } else if(e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();
    }
});


// window.l = new List();