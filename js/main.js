export { Main };
import {Post} from "./posts.js";
import{pokemons} from "./pokemones.js";
class Main {
  constructor(container) {}
  renderMain() {
    getPosts();
  }

}

async function getPosts(){
  let resp=await fetch("../js/json.json");
  let data=await resp.json();
  let posts=data.posts;
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
  
