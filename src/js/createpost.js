export {CreatePost}
import '../css/createPost.css'

class CreatePost{

    constructor(container){
        this.container=container;
    }

    renderCreatePost(){
        this.container.innerHTML=`<div class="containerCreatePosts">
             <form> 
             <div class="postNameDiv">
                <input type="text" id="title" placeholder="Title"/>
             </div>
            <div class="postFileDiv">
                <input type="file" id="file"/>
            </div>
            <input type="button" id="submit" value="submit"/>
             </form>
             </div>`;
        document.querySelector("#file").addEventListener("change",function(){encodeImageFileAsURL(this)});
        document.querySelector("#submit").addEventListener("click",()=>uploadPost());
    }

     
}
function encodeImageFileAsURL(element) {
    console.log(element);
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
      console.log('RESULT', reader.result)
      element.imagen=reader.result;
    }
    reader.readAsDataURL(file);
   }
async function uploadPost(){
    let file = document.querySelector("#file").files[0];
    let formData=new FormData();
    formData.append('file',file);
    let urlImg={};
    await fetch("https://api.cloudinary.com/v1_1/dtwtp2vwv/image/upload?upload_preset=tvjytipj", {
        method: "POST",
        body: formData
      })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          urlImg=JSON.parse(data).url;
        });
    let newPost={
        author:"AHHASHASHASASHSHa",
        comments:"0",
        file: urlImg,
        title:document.querySelector("#title").value,
        upvotes:"2" 
    }
    fetch("https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/posts.json",{
        method: "post",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(newPost),
      })
        .then((response) => response.json())
        .then((datos) => {
          console.log("Working");
        });

    }
