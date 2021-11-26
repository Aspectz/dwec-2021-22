export { Main };
import {Post} from "./posts.js";




class Main {
  constructor(cont) {
    this.container=cont;
  }
  renderMain() {
    if(localStorage.getItem("localId")!=null)
      this.getPosts();
    else{
      this.getAllPosts();
    }
  }
  async getAllPosts(container){
    let resp=await fetch("https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/posts.json");
    let data=await resp.json();
    let posts=data;
    this.container.innerHTML="";
    this.container.classList.add("mainContainer");
  
    //Container where all posts are showed to user
    let divPosts=document.createElement("div");
    divPosts.classList.add("containerPosts");
  
    
    //Right Aside bar
    let divAsideRight=document.createElement("div");
    let h1Aside=document.createElement("h1");
    divAsideRight.classList.add("divRightAside");
    h1Aside.innerHTML="Aside here";
    divAsideRight.append(h1Aside);
    
  
  
    for(let post in posts){
      posts[post].id=post;
      let newPost=new Post(posts[post]);
      await newPost.renderPost(divPosts);
    }
  
    this.container.append(divPosts);
    this.container.append(divAsideRight);
  }
}



  
