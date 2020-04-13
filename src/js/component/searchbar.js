class SearchBar extends HTMLElement {

  constructor(){
    super();
  }

   connectedCallback(){
       this.render();
   }
  
   render() {
       this.innerHTML = `
       <style>
        

       </style>

        <div class="btn-toolbar mb-0 col-md-4 pr-md-0 pl-md-0">
          <div class="btn-group mr-2 w-100 pr-md-0 pl-md-0">
            <input type="text" id="searchElement" placeholder="Search Anime" type="search" class="w-100">
            <button type="submit" id="searchButtonElement" type="submit" class="btn btn-sm btn-outline-secondary">Search</button>
          </div>
        </div>

       `;
 
   }
}

customElements.define("search-bar", SearchBar);