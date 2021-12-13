export { PostCreateView };
import {Router} from '../router/routes.js';
class PostCreateView {
  constructor(cont) {
    this.container = cont;
  }

  renderItem(Item) {
    this.data = Item;
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
      .addEventListener("click", () => getData());

    let select = document.querySelector("#communitySelect");

    this.data.forEach((community) => {
      let opt = document.createElement("option");
      opt.innerHTML = community;
      select.append(opt);
    });
  }
}
function encodeImageFileAsURL(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      element.imagen = reader.result;
    };
    reader.readAsDataURL(file);
  }
  async function getData() {
    
    let file = document.querySelector("#formFile").files[0];
    let formData = new FormData();
    formData.append("file", file);

    let community=document.querySelector("#communitySelect").value;
    let newPost = {
      community : community, 
      author: localStorage.getItem("nickname"),
      file: await uploadImage(formData),
      title: document.querySelector("#title").value,
      upvotes: "2",
    };   

    uploadPost(community,newPost);


  }

  async function uploadPost(community,newPost){
    fetch(
      `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities/${community}/posts.json`,
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

  async function uploadImage(formData){
    let urlImg={};
    let resp=await fetch(
      "https://api.cloudinary.com/v1_1/dtwtp2vwv/image/upload?upload_preset=tvjytipj",
      {
        method: "POST",
        body: formData,
      }
    );
      let respText=await resp.text();

      let getUrlImg=await JSON.parse(respText).url;
      return getUrlImg;
  }
