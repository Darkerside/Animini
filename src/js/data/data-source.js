export default class DataSource {

  static searchMovie(keyword) {

    let date = new Date();
    let localyear = date.getFullYear();

    let query = `
    query ($page: Int, $perPage: Int, $seasonYear: Int, $season: MediaSeason, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (season: $season, seasonYear: $seasonYear, format: MOVIE, search: $search) {
          id
          title {
            romaji
          }
          description
          format
          episodes
          studios {
            nodes {
              name
            }
          }
          genres
          coverImage {
            large
          }
          startDate {
            year
            month
            day
          }
        }
      }
    }
    `;

    let variables = {
      season: keyword,
      seasonYear: localyear,
      page: 1,
      perPage: 50
    };


    let url = 'https://graphql.anilist.co',
      options = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
          },
          body: JSON.stringify({
              query: query,
              variables: variables
          })
      };



    return fetch(url, options)
      .then(response => {
        return response.json();
      })
      
      .then(responseJson => {
        if(responseJson.data) {
                return Promise.resolve(responseJson.data);
              } else {
                return Promise.reject(`${keyword} is not found`);
              }
      })

  }

}
