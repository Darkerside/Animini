import '../component/animelist.js';
import DataSource from '../data/data-source.js';
 
function main(keyword){

   DataSource.searchMovie(keyword)
     .then(renderResult)
     .catch(fallbackResult)
 
};
 
function renderResult(results) {
    const animeListElement = document.querySelector("anime-list");
       animeListElement.dataresult = results;
   };
 
function fallbackResult(message) {
       alert('Error, check console');
       console.error(message);
   };
 
export default main;