export { Menu };

class Menu {
  constructor() {}

  getLoggedMenu() {
    document.body.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Proyecto</a>
        <div class="collapse navbar-collapse pl-5" id="navbarNavDropdown">
          <div class="w-25">
            <ul class="navbar-nav d-flex w-100">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">Home
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
            </ul>
          </div>
          <div class="w-50">
            <ul class="navbar-nav d-flex w-100">
              <li class="nav-item w-100">
                <form class="form-inline">
                  <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
                </form>
              </li>
            </ul>
          </div>
          <div class="w-25 d-flex">
            <ul class="navbar-nav d-flex w-50 justify-content-end">
              <li class="nav-item dropdown">
                <a class="nav-link" id="log_out">Log out</a>
              </li>
              <li class="divider"></li>
            </ul>
            <ul class="navbar-nav d-flex ml-1 justify-content-end">
              <li class="nav-item dropdown">
                <a  class="nav-link" id="login_link" href="#">Iniciar Sesion</a>
              </li>
              <li class="divider"></li>
            </ul>
            
            
          </div>
        </div>
        <div class="dropdown">
          <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            NickName
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Profile</a>
            <a class="dropdown-item" href="#">Settings</a>
      
            <a class="dropdown-item" href="#">Log Out</a>
          </div>
        </div>
      </nav>
      
      <div id="container" > </div>
      `;
  }
  getDefaultMenu() {
    document.body.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Proyecto</a>
  <div class="collapse navbar-collapse pl-5" id="navbarNavDropdown">
    <div class="w-25">
      <ul class="navbar-nav d-flex w-100">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">Home
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="w-50">
      <ul class="navbar-nav d-flex w-100">
        <li class="nav-item w-100">
          <form class="form-inline">
            <input class="form-control mr-sm-2 w-100" type="search" placeholder="Search" aria-label="Search" />
          </form>
        </li>
      </ul>
    </div>
    <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div id="myDropdown" class="dropdown-content">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        </div>
    </div>


    <div class="w-25 d-flex">
      <ul class="navbar-nav d-flex w-100 justify-content-end">
        <li class="nav-item dropdown">
          <a class="nav-link" id="create_post">Create Post</a>
        </li>
        <li class="divider"></li>
      </ul>
      <ul class="navbar-nav d-flex  justify-content-end">
        <li class="nav-item dropdown">
          <a class="nav-link" id="register_link">Registrarse</a>
        </li>
        <li class="divider"></li>
      </ul>
      <ul class="navbar-nav d-flex ml-1 justify-content-end">
        <li class="nav-item dropdown">
          <a  class="nav-link" id="login_link" href="#">Iniciar Sesion</a>
        </li>
        <li class="divider"></li>
      </ul>
      
      
    </div>
  </div>
  <div class="dropdown">
    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">
      NickName
    </button>
    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">Profile</a>
      <a class="dropdown-item" href="#">Settings</a>
      <a class="dropdown-item" href="#">Log Out</a>
    </div>
  </div>
</nav>

<div id="container" > </div>
`;
let drop=document.querySelector("#myDropdown");
drop.addEventListener("click",()=>console.log("aspe"));

  }
}
