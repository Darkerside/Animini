import './animeitem.js';
 
class AnimeList extends HTMLElement {

  constructor(){
    super();
  }

   set dataresult(dataresult) {
       this._dataresult = dataresult;
       //console.log(this._dataresult.Page.media);
       this.render();

   }
 
   renderError(message) {
       this.innerHTML = `
       <style>
       .placeholder {
              font-weight: lighter;
              color: rgba(0,0,0,0.5);
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
          }
       </style>
       `;
       this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
   }
 
   render() {
       const listAnimeElement = document.querySelector("anime-list");
       listAnimeElement.innerHTML = `
              <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }


          .container {
            max-width: 1180px;
            padding-left: 0px;
            padding-right: 0px;
          }

          .anime-row {
            padding-left: 0px!important;
            padding-right: 0px!important;
            max-height: 233px;
          }

          h5.card-title, h5.studio, h5.aired {
            font-size: 1rem!important;
          }

          .card-body {
            padding: 0.5rem 1rem;
          }

          .card-text {
            font-size: 0.7rem;
            overflow: hidden;
             text-overflow: ellipsis;
             display: -webkit-box;
             -webkit-line-clamp: 9;
             -webkit-box-orient: vertical;
          }

          tr.anime-title, td.anime-title {
            height: max-content;
            padding-bottom: 0px !important;
          }

          tr.anime-desc {
            height: min-content;
          }

          tr.anime-info {
            height: max-content;
          }

          .card-img-overlay {
            padding: 0px;
          }

          .span-studio, .span-aired {
            background-color: #131417b8;
          }

          .studio, .aired {
            text-align: center;
            color: #fff;
            margin: 0.3em auto;
          }

          .card {
            color: #5c728a;
            margin-bottom: 1em;
          }

          .card-text {
            overflow: hidden;
             text-overflow: ellipsis;
             display: -webkit-box;
             -webkit-line-clamp: 8;
             -webkit-box-orient: vertical;
          }

          .anime-cover img {
              min-height: 100%;
              max-width: 100%;
              object-fit: cover;
              object-position: center;
          }

          @media only screen and (min-width: 551px) and (max-width: 768px) {
            h5.card-title, h5.studio, h5.aired {
              font-size: 2rem!important;
            }
          }

          @media only screen and (min-width: 0px) and (max-width: 550px) {
            h5.card-title, h5.studio, h5.aired {
              font-size: 1rem!important;
            }
          }

       </style>
              `;

              $('anime-list').show();

       this._dataresult.Page.media.forEach(media => {
          const movieItemElement = document.createElement("movie-item");
          movieItemElement.className = "col-xs-12 col-sm-12 col-md-6 col-lg-4 item-list";
           movieItemElement.movie = media;
           this.appendChild(movieItemElement);
       })
   }
}
 
customElements.define("anime-list", AnimeList);