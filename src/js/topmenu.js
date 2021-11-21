import { Login } from "./login";
import { Register } from "./register.js";
import { CreatePost } from "./createpost.js";
import { Main } from "./main";
export { Menu };

class Menu {
  constructor(opcion) {
    this.opcion = opcion;
  }

  getLoggedMenu() {
    document.body.innerHTML = `<div class="menu-bar">
    <h2 class="logo">Proyecto</h1>
    <ul>
      
  </div>
  <div id=container></div>`;
  }
  getDefaultMenu() {
    document.body.innerHTML = `<div class="menu-bar">
    <h2 class="logo">Proyecto</h1>
    <ul>
      <li><a id="home_link">Home</a></li>
      <input type="text" placeholder="Search.." id="searchbox">
      <li><a id="register_link">Register</a></li>
      <li><a id="login_link">Log In</a>
      </li>
      <li><a href="#">Contact us</a></li>

    </ul>
  </div>
  <div id=container></div>`;
  }

  getMenu() {
    document.body.innerHTML = `<div class="menu-bar">
    <h2 class="logo">Proyecto</h1>
    <ul>
      ${
        localStorage.getItem("email") != null
          ? `<li><a id="home_link">Home</a></li>
      <input type="text" placeholder="Search.." id="searchbox">
      <li><a id="create_post">Create Post</a></li>
      </li>
      <li><a id="user_name">${
        localStorage.getItem("nickname") != null
          ? localStorage.getItem("nickname")
          : "User"
      } <i class="fas fa-caret-down"></i></a>
          <div class="dropdown-menu">
              <ul>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Portfolio</a></li>
                <li>
                  <a href="#">Team </a>
                </li>
                <li><a id="log_out">Log Out</a></li>
              </ul>
            </div>
      </li>`
          : 
          `<li><a id="home_link">Home</a></li>
    <input type="text" placeholder="Search.." id="searchbox">
    <li><a id="register_link">Register</a></li>
    <li><a id="login_link">Log In</a>
    </li>
    <li><a href="#">Contact us</a></li>`
      }
    </ul> </div>
    <div id=container></div>`;

    if (localStorage.getItem("email") != null) {
      console.log("LOGGED");
      document.querySelector("#create_post").addEventListener("click", () => {
        createPost(container);
      });
      document.querySelector("#log_out").addEventListener("click", () => {
        console.log("Login out");
        localStorage.clear();
        //Logout, back to main.
        let menu = new Menu();
        menu.getMenu();
        let main = new Main(document.querySelector("#container"));
        main.renderMain();
      });
    } else {
      console.log("NOT LOGGED");
      document.querySelector("#login_link").addEventListener("click", () => {
        login(container);
      });
      document.querySelector("#register_link").addEventListener("click", () => {
        register(container);
      });
    }
  }
}

function login(cont) {
  let login = new Login();
  login.renderLogin(cont);
}
function register(cont) {
  let register = new Register(cont);
  register.renderRegister();
}
function createPost(container) {
  let createPost = new CreatePost(container);
  createPost.renderCreatePost();
}
