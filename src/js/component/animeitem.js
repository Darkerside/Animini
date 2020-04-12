class MovieItem extends HTMLElement {
  constructor(){
    super();
    }

   set movie(movie) {
       this._movie = movie;
       this.render();
   }
 
   render() {
        let studio = "";
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let studiolist = this._movie.studios.nodes;
        
        if (studiolist[0] != null){
          studio = studiolist[0].name;
        }

        if (this._movie.startDate.day == null){
          this._movie.startDate.day = "";
        }

        if (this._movie.episodes == null){
          this._movie.episodes = "?";
        }

        if (this._movie.description == null){
          this._movie.description = "Updating...";
        }

        if (this._movie.startDate.month == null){
          this._movie.startDate.month = "";
        } else {
          this._movie.startDate.month = months[this._movie.startDate.month - 1];
        }

        this._movie.genres = this._movie.genres.join(', ');

      this.innerHTML = `
 
                  <div class="card">
                    <div class="row no-gutters">
                      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 anime-cover">
                        <img src="${this._movie.coverImage.large}" class="card-img" alt="${this._movie.title.romaji}">
                        <div class="card-img-overlay align-content-between row d-flex">
                          <span class="w-100 span-aired"><h5 class="aired">${this._movie.startDate.day} ${this._movie.startDate.month} ${this._movie.startDate.year}</h5></span>
                          <span class="w-100 span-studio"><h5 class="studio">${studio}</h5></span>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div class="card-body h-100">
                          <table style="height: 100%;">
                            <tbody>
                              <tr class="anime-title">
                                <td class="align-top"><h5 class="card-title">${this._movie.title.romaji}</h5></td>
                              </tr>
                              <tr class="anime-desc anime-info">
                                <td class="align-baseline"><p class="card-text">${this._movie.description}</p></td>
                              </tr>
                              <tr class="anime-info">
                                <td class="align-bottom"><p class="card-text"><small class="text-muted text-muted-anime font-weight-bold">${this._movie.episodes} Episode | ${this._movie.genres}</small></p></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

          `;
   }
}
 
customElements.define("movie-item", MovieItem);