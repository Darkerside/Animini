class AboutMe extends HTMLElement {
  constructor(){
    super();
  }

  connectedCallback(){
    this.render();

  }
 
  render() {
    this.innerHTML = `
                <style>

                  about-me {
                    text-align: center;
                    display: none;
                  }

                  about-me img {
                    width: 10em;
                    height: 10em;
                    background-color: #3a3a3a;
                    border-radius: 100%;
                    border: solid 1px rgba(58 , 58 , 58 , 0.4);
                    display: inline-block;
                    margin: 0 0 2em 0;
                    margin: 0px;
                    padding: 0.5em;
                    object-fit: cover;
                    object-position: center;
                  }

                  about-me table, about-me th, about-me td {
                    text-align: left;
                    vertical-align: baseline;
                    padding: 0px 4px;
                  }

                  @media only screen and (min-width: 0px) and (max-width: 720px) {
                    about-me h2 {
                      font-size: 1.5rem !important;
                    }

                    about-me img {
                      width: 6em;
                      height: 6em;
                      background-color: #3a3a3a;
                      border-radius: 100%;
                      border: solid 1px rgba(58 , 58 , 58 , 0.4);
                      display: inline-block;
                      margin: 0 0 2em 0;
                      margin: 0px;
                      padding: 0.35em;
                      object-fit: cover;
                      object-position: center;
                    }
                  }
                </style>

                  <figure>
                    <img src="/dist/assets/images/ra121514.jpg" alt="RA121514">
                  </figure>
                  <h2>Riski Mardhianto</h2>
                  <p style="margin: -10px 0px 20px 0px;">A Passion-Confussed Boy</p>
                  <section>
                    <table>
                      <tr>
                        <th>Age</th>
                        <td>:</td>
                        <td>23yo</td>
                      </tr>
                      <tr>
                        <th>Occupation</th>
                        <td>:</td>
                        <td>Freelancer</td>
                      </tr>
                      <tr>
                        <th>Field of Work</th>
                        <td>:</td>
                        <td>Network Engineer, Programmer, Photoshop, Video Editing, Web Dev, IT Support</td>
                      </tr>
                      <tr>
                        <th>Hobby</th>
                        <td>:</td>
                        <td>Photography, Gaming, Music, Culinary Journey</td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>:</td>
                        <td>Alive (Nocturnal)</td>
                      </tr>
                    </table>
                  </section>
                  `;
  }
}
customElements.define("about-me", AboutMe);