import '../component/animelist.js';
import DataSource from '../data/data-source.js';
 
function main(keyword){
	const searchElement = document.querySelector("#searchElement");

	if(keyword == "Search"){
		const anilist = require('anilist-node');
		const Anilist = new anilist();

		Anilist.search("anime", searchElement.value, 1, 50)
		.then(data => {
		    const animeListElement = document.querySelector("anime-list");
       		animeListElement.dataresult = data;
		})
	} else {
   		DataSource.searchMovie(keyword)
     	.then(renderResult)
     	.catch(fallbackResult)
    }
 
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