class SideBar extends HTMLElement {
	constructor(){
		super();
	}

	connectedCallback(){
 		this.render();

	}
 
	render() {
		this.innerHTML = `
		<style>
		.sidebar {
		  position: fixed;
		  top: 0;
		  bottom: 0;
		  left: 0;
		  z-index: 100;
		  padding: 48px 0 0;
		  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);
		  background-color: #131417;
		}

		.sidebar-sticky {
		  position: relative;
		  top: 0;
		  height: calc(100vh - 48px);
		  padding-top: .5rem;
		  overflow-x: hidden;
		  overflow-y: auto;
		}

		@supports ((position: -webkit-sticky) or (position: sticky)) {
		  .sidebar-sticky {
		    position: -webkit-sticky;
		    position: sticky;
		  }
		}

		.sidebar .nav-link, .nav-ext a {
		  font-weight: 500;
		  color: #9e9e9e;
		  margin-right: 4px;
		  color: #999;
		}

		.sidebar .nav-link.active {
		  color: #00ffdc;
		}

		.sidebar .nav-link.active:hover {
		  color: #00ffdc;
		  cursor: pointer;
		}

		.sidebar .nav-link:hover, .nav-ext a:hover{
		  color: #e4e4e4;
		  cursor: pointer;
		}

		.nav-ext {
		    display: block;
		    padding: .5rem 1rem;
		}

		.sidebar-heading {
		  font-size: .75rem;
		  text-transform: uppercase;
		  color: #ffffff;
		}

		.sidebar a:hover {
		  text-decoration: none;
		}

		@media (max-width: 1360px) {
			h6 span, h6 .sidebar-heading {
			  display: none;
			}

			.nav-text {
			  display: none;
			}

			.sidebar {
			  width: 45px;
			}
		}

		@media (min-width: 1366px) {
			.sidebar {
			  max-width: 111px !important;
			}
		}

		</style>
		<nav class="col-md-1 d-md-block sidebar">
	      <div class="sidebar-sticky">
	        <ul class="nav flex-column">
	          <li class="nav-item">
	            <div class="nav-link active" target="Spring">
	              <i class="fas fa-seedling"></i>
	               <span class="nav-text">&nbspSpring</span>
	            </div>
	          </li>
	          <li class="nav-item">
	            <div class="nav-link" target="Summer">
	              <i class="fas fa-sun"></i>
	              <span class="nav-text">&nbspSummer</span>
	            </div>
	          </li>
	          <li class="nav-item">
	            <div class="nav-link" target="Fall">
	              <i class="fab fa-canadian-maple-leaf"></i>
	              <span class="nav-text">&nbspFall</span>
	            </div>
	          </li>
	          <li class="nav-item">
	            <div class="nav-link" target="Winter">
	              <i class="far fa-snowflake"></i>
	              <span class="nav-text">&nbspWinter</span>
	            </div>
	          </li>
	        </ul>

	        <h6 class="sidebar-heading d-flex align-items-center px-3 mt-4 mb-1">
	          __//<span>&nbsp&nbspInfo</span>
	        </h6>
	        <ul class="nav flex-column mb-2">
	          <li class="nav-item">
	            <div class="nav-ext"><a target="_blank" href="https://darkerside.github.io/project/anitime">
	              <i class="fas fa-globe"></i>
	              <span class="nav-text">&nbspAniTime</span></a>
	            </div>
	          </li>
	          <li class="nav-item">
	            <div class="nav-ext"><a target="_blank" href="https://darkerside.github.io/">
	              <i class="fas fa-info-circle"></i>
	              <span class="nav-text">&nbspAbout</span></a>
	            </div>
	          </li>
	          <li class="nav-item">
	            <div class="nav-ext"><a target="_blank" href="https://github.com/Darkerside/Animini">
	              <i class="fab fa-github"></i>
	              <span class="nav-text">&nbspGithub</span></a>
	            </div>
	          </li>
	        </ul>
	      </div>
	    </nav>`;
	}
}
customElements.define("side-bar", SideBar);
