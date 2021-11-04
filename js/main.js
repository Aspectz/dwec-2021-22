export { Main };
import {Post} from "./posts.js";
import{pokemons} from "./pokemones.js";
class Main {
  constructor() {}
  renderMain(container) {
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

  //Aside bar
  let divAside=document.createElement("div");
  let h1Aside=document.createElement("h1");
  divAside.classList.add("divPost");
  h1Aside.innerHTML="Aside here";
  divAside.append(h1Aside);

  for(let post of posts){
    let divPost=document.createElement("div");
    divPost.classList.add("divPost");
    //Author
    let divPostAuthor=document.createElement("div");
    let author=document.createElement("h6");
    divPostAuthor.classList.add("postAuthor");
    author.innerHTML="Posted by "+post.author;
    divPostAuthor.append(author);

    //Title
    let divPostTitle=document.createElement("div");
    divPostTitle.classList.add("postTitle");
    let textPost=document.createElement("h3");
    textPost.style="font-size:1.17em;"
    textPost.innerHTML=post.title;
    divPostTitle.append(textPost);
    //File
    let divPostBody=document.createElement("div");
    divPostBody.classList.add("postBody");
    let file=document.createElement("img");
    file.style="width:100%";
    file.src=post.file;
    divPostBody.append(file);

    //Bottom Options
    let divPostBottom=document.createElement("div");
    divPostBottom.style="display:flex;flex-directionm:row;"
    //comments
    let divCommentsBtn=document.createElement("div");
    divCommentsBtn.classList.add("divCommentsBtn");
    let spanComm=document.createElement("span");
    let commImg=document.createElement("i");
    commImg.classList.add("iconComment")
    spanComm.innerHTML=post.comments+" Comments";
    divCommentsBtn.append(commImg);
    divCommentsBtn.append(spanComm);
    divPostBottom.append(divCommentsBtn);



    //Appends
    divPost.append(divPostAuthor);
    divPost.append(divPostTitle);
    divPost.append(divPostBody);
    divPost.append(divPostBottom);
    divPosts.append(divPost);
  }

  container.append(divPosts);
  container.append(divAside);
  




  /*for(let postActual of posts){
    let post=new Post(postActual);
    post.renderPost(container);
}*/

/*
async function getPokemons() {
  const response=await fetch("./pokemones.json");
  const data=await response.json();
  const x=data.results.filter(p=>p.type.includes("Grass"));
  for(let poki of x){
    container.style.background="#030303";
      //div
      let div=document.createElement("div");
      div.classList.add("container");
      div.classList.add("text-center");
      div.style.background="#161617";
      div.style.border="1px solid white"
      //img
      let img=document.createElement("img");
      img.src=poki.sprites.large;
      //name
      let name=document.createElement("h1");
      name.innerHTML=poki.name;
      name.style.color="white";

      //append
      div.append(name);
      div.append(img);
      container.append(div);
  }
  /*.map(p=>{
      container.style.background="#030303";
      //div
      let div=document.createElement("div");
      div.classList.add("container");
      div.classList.add("text-center");
      div.style.background="#161617";
      div.style.border="1px solid white"
      //img
      let img=document.createElement("img");
      img.src=p.sprites.large;
      //name
      let name=document.createElement("h1");
      name.innerHTML=p.name;
      name.style.color="white";

      //append
      div.append(name);
      div.append(img);
      container.append(div);
      return p;
  });*/
}

/* /*pokemons.filter(p=>p.type.includes("Grass"))
    .map(p=>{
        container.style.background="#030303";
        //div
        let div=document.createElement("div");
        div.classList.add("container");
        div.classList.add("text-center");
        div.style.background="#161617";
        div.style.border="0.5px solid white"
        //img
        let img=document.createElement("img");
        img.src=p.sprites.large;
        //name
        let name=document.createElement("h1");
        name.innerHTML=p.name;
        name.style.color="white";

        //append
        div.append(name);
        div.append(img);
        container.append(div);
        return p;
    });*/
   /*fetch("https://unpkg.com/pokemons@1.1.0/pokemons.json").then(response => response.json()).then(pokemons=> console.log(pokemons.results.filter(p=>p.type.includes("Fire"))
    .map(p=>{
        container.style.background="#030303";
        //div
        let div=document.createElement("div");
        div.classList.add("container");
        div.classList.add("text-center");
        div.style.background="#161617";
        div.style.border="0.5px solid white"
        //img
        let img=document.createElement("img");
        img.src=p.sprites.large;
        //name
        let name=document.createElement("h1");
        name.innerHTML=p.name;
        name.style.color="white";

        //append
        div.append(name);
        div.append(img);
        container.append(div);
        return p;
    })));*/

    //getPokemons();*/
