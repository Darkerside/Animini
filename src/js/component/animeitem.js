class AnimeItem extends HTMLElement {
  constructor(){
    super();
    }

   set anime(anime) {
       this._anime = anime;
       this.render();
   }
 
   render() {
        let studio = "";
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let studiolist;

        if(this._anime.studios.nodes != null){
          studiolist = this._anime.studios.nodes
        } else {
          studiolist = this._anime.studios
        }
        
        if (studiolist[0] != null){
          studio = studiolist[0].name;
        }

        if (this._anime.startDate.day == null){
          this._anime.startDate.day = "";
        }

        if (this._anime.episodes == null){
          this._anime.episodes = "?";
        }

        if (this._anime.description == null){
          this._anime.description = "Updating...";
        }

        if (this._anime.startDate.month == null){
          this._anime.startDate.month = "";
        } else {
          this._anime.startDate.month = months[this._anime.startDate.month - 1];
        }

        this._anime.genres = this._anime.genres.join(', ');

      this.innerHTML = `
 
                  <div class="card">
                    <div class="row no-gutters">
                      <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5 anime-cover">
                        <img src="${this._anime.coverImage.large}" class="card-img" alt="${this._anime.title.romaji}">
                        <div class="card-img-overlay align-content-between row d-flex">
                          <span class="w-100 span-aired"><h5 class="aired">${this._anime.startDate.day} ${this._anime.startDate.month} ${this._anime.startDate.year}</h5></span>
                          <span class="w-100 span-studio"><h5 class="studio">${studio}</h5></span>
                        </div>
                      </div>
                      <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                        <div class="card-body h-100">
                          <table style="height: 100%;">
                            <tbody>
                              <tr class="anime-title">
                                <td class="align-top"><h5 class="card-title">${this._anime.title.romaji}</h5></td>
                              </tr>
                              <tr class="anime-desc anime-info">
                                <td class="align-baseline"><p class="card-text">${this._anime.description}</p></td>
                              </tr>
                              <tr class="anime-info">
                                <td class="align-bottom"><p class="card-text"><small class="text-muted text-muted-anime font-weight-bold">${this._anime.episodes} Episode | ${this._anime.genres}</small></p></td>
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
 
customElements.define("anime-item", AnimeItem);