export { Main };
import{pokemons} from "./pokemones.js";
class Main {
  constructor() {}
  renderMain(container) {
    getPosts();
    /*pokemons.filter(p=>p.type.includes("Grass"))
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

    //getPokemons();
  }

}

async function getPosts(){
  let resp=await fetch("../js/json.json");
  let data=await resp.json();
  let posts=data.posts;
  

  for(let post of posts){
    let div=document.createElement("div");
      div.classList.add("container");
      div.classList.add("text-center");
      div.style.background="#161617";
      div.style.border="1px solid white"
      //img
      let img=document.createElement("img");
      img.src=post.file;
      //name
      let name=document.createElement("h1");
      name.innerHTML=post.title;
      name.style.color="white";

      //append
      div.append(name);
      div.append(img);
      container.append(div);

  }


}


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
