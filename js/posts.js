export {Post};
class Post{
    constructor(data){
        this.data=data;
    }
    renderPost(container){
      let div=document.createElement("div");
      div.classList.add("container");
      div.classList.add("text-center");
      div.style.background="#161617";
      div.style.border="1px solid white"
      //img
      let img=document.createElement("img");
      img.style.width="500px";
      img.style.height="500px";
      img.src=this.data.file;
      //Title
      let title=document.createElement("h1");
      title.style.justifyContent="flex-start";
      title.innerHTML=this.data.title;
      title.style.color="white";

      //append
      div.append(title);
      div.append(img);
      container.append(div);
    }

}