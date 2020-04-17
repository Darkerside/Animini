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
          <div class="input-group input-group-sm mb-3 mr-2 w-100 pr-md-0 pl-md-0">
            <input type="text" class="form-control border-secondary" id="searchElement" placeholder="Search Anime">
            <div class="input-group-append">
              <button class="btn btn-sm btn-outline-secondary" id="searchButtonElement" type="button">Search</button>
            </div>
          </div>
        </div>

       `;
 
   }
}

customElements.define("search-bar", SearchBar);