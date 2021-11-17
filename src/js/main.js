export { Main };
import {Post} from "./posts.js";




class Main {
  constructor(container) {}
  renderMain() {
    setMenu();
    setName();
    getPosts();
  }

}

async function getPosts(){
  let resp=await fetch("https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/posts.json");
  let data=await resp.json();
  let posts=data;
  container.classList.add("mainContainer");

  //Container where all posts are showed to user
  let divPosts=document.createElement("div");
  divPosts.classList.add("containerPosts");

  
  //Right Aside bar
  let divAsideRight=document.createElement("div");
  let h1Aside=document.createElement("h1");
  divAsideRight.classList.add("divRightAside");
  h1Aside.innerHTML="Aside here";
  divAsideRight.append(h1Aside);
  


  for(let post of posts){
    let newPost=new Post(post);
    newPost.renderPost(divPosts);
  }

  container.append(divPosts);
  container.append(divAsideRight);
}
function setName(){
  
}
function setMenu(){
  document.body.innerHTML=`<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
      <ul class="navbar-nav d-flex w-100 justify-content-end">
        <li class="nav-item dropdown">
          <a class="nav-link" href="#">Create Post</a>
        </li>
        <li class="divider"></li>
      </ul>
      <ul class="navbar-nav d-flex  justify-content-end">
        <li class="nav-item dropdown">
          <a class="nav-link" id="register_link" href="#">Registrarse</a>
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
  
