import axios from 'axios';

export default class Search {
     constructor(query) {
         this.query = query;
     }
     async getResults() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '3081938082134b4eeb44e1b101de27b9';
        try {
            const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            // console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
