export { CreatePost };
import "../css/createPost.css";
import { Main } from "./main";
import { Menu } from "./topmenu";
import { Router } from "../router/routes.js";
class CreatePost {
  constructor(container) {
    this.container = container;
  }

  renderCreatePost() {
    this.container.innerHTML = `<div class="mainContainer"><div class="containerCreatePosts">
             <form> 
             <div>
             <select class="form-select" aria-label="size 3 select example" id="communitySelect">
                <option>Choose a community</option>
              </select>
             </div>
             <div class="postNameDiv">
                <input type="text" id="title" placeholder="Title"/>
             </div>
            <div class="postFileDiv">
              <div class="mb-3">
              <input class="form-control" type="file" id="formFile">
          </div>
            </div>
            <input type="button" id="submit" value="submit"/>
             </form>
             </div></div>`;
    document.querySelector("#formFile").addEventListener("change", function () {
      encodeImageFileAsURL(this);
    });
    document
      .querySelector("#submit")
      .addEventListener("click", () => uploadPost(this.container));



      let select=document.querySelector("#communitySelect");

      for(let i=0;i<4;i++){
        let opt=document.createElement("option");
        opt.innerHTML=i;
        console.log("a");
        select.append(opt);
      }

  }
    


}
function encodeImageFileAsURL(element) {
  var file = element.files[0];
  var reader = new FileReader();
  reader.onloadend = function () {
    console.log("RESULT", reader.result);
    element.imagen = reader.result;
  };
  reader.readAsDataURL(file);
}
async function uploadPost(container) {
  let file = document.querySelector("#formFile").files[0];
  let formData = new FormData();
  formData.append("file", file);
  let urlImg = {};

  await fetch(
    "https://api.cloudinary.com/v1_1/dtwtp2vwv/image/upload?upload_preset=tvjytipj",
    {
      method: "POST",
      body: formData,
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      console.log("FIle uploaded");
      urlImg = JSON.parse(data).url;
    });

  let newPost = {
    author: localStorage.getItem("nickname"),
    file: urlImg,
    title: document.querySelector("#title").value,
    upvotes: "2",
  };
  fetch(
    "https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities/prueba/posts.json",
    {
      method: "post",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(newPost),
    }
  )
    .then((response) => response.json())
    .then((datos) => {
      console.log("Working");

      new Router("#/");
    });
}
