export { Menu };

class Menu {
  constructor(opcion) {
    this.opcion = opcion;
  }



  getMenu() {
    document.querySelector("#menu").innerHTML=`<div class="menu-bar">
    <h2 class="logo">Proyecto</h1>
    <ul>
      ${
        localStorage.getItem("email") != null
          ? `<li><a id="home_link" href="#/">Home</a></li>
      <input type="text" placeholder="Search.." id="searchbox">
      <li><a id="create_post" href="#/create_post">Create Post</a></li>
      </li>
      <li><a id="user_name">${
        localStorage.getItem("nickname") != null
          ? localStorage.getItem("nickname")
          : "User"
      } <i class="fas fa-caret-down"></i></a>
          <div class="dropdown-menu">
              <ul>
                <li><a href="#/create_community">Create Community</a></li>
                <li>
                  <a href="#">Profile </a>
                </li>
                <li><a id="log_out" href="#/logout">Log Out</a></li>
              </ul>
            </div>
      </li>`
          : 
          `<li><a id="home_link" href="#/">Home</a></li>
    <input type="text" placeholder="Search.." id="searchbox">
    <li><a id="register_link" href="#/register">Register</a></li>
    <li><a id="login_link" href="#/login">Log In</a>
    </li>`
      }
    </ul>`;
  }
  
}
