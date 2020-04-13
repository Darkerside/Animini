export default class DataSource {

  static searchMovie(keyword) {

    let season = keyword;
    let date = new Date();
    let localyear = date.getFullYear();
    let query;

    let qspring = `
    query ($page: Int, $perPage: Int, $seasonYear: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (season: SPRING, seasonYear: $seasonYear, format: MOVIE, search: $search) {
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

    let qsummer = `
    query ($page: Int, $perPage: Int, $seasonYear: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (season: SUMMER, seasonYear: $seasonYear, format: MOVIE, search: $search) {
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

    let qfall = `
    query ($page: Int, $perPage: Int, $seasonYear: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (season: FALL, seasonYear: $seasonYear, format: MOVIE, search: $search) {
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

    let qwinter = `
    query ($page: Int, $perPage: Int, $seasonYear: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (season: WINTER, seasonYear: $seasonYear, format: MOVIE, search: $search) {
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

    if(season == "Spring"){
      query = qspring;
    } else if (season == "Summer"){
      query = qsummer;
    } else if (season == "Fall"){
      query = qfall;
    } else if (season == "Winter"){
      query = qwinter;
    }

    let variables = {
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
