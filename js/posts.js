export {Post};
class Post{
    constructor(data){
        this.data=data;
    }
    renderPost(container){
      
      let div=document.createElement("div");
      div.classList.add("div");


      let divPost=document.createElement("div");
      divPost.classList.add("divPost");

      div.append(divPost);
      //Left bar
      let leftDivVotes=document.createElement("div");
      let p1=document.createElement("p");
      p1.innerHTML="p1";
      let p2=document.createElement("p");
      p2.innerHTML="p2";
      let p3=document.createElement("p");
      p3.innerHTML="p3";
      leftDivVotes.append(p1);
      leftDivVotes.append(p2);
      leftDivVotes.append(p3);

      divPost.append(leftDivVotes);
      //Author
      let divPostAuthor=document.createElement("div");
      let author=document.createElement("h6");
      divPostAuthor.classList.add("postAuthor");
      author.innerHTML="Posted by "+this.data.author;
      divPostAuthor.append(author);



      //Title
      let divPostTitle=document.createElement("div");
      divPostTitle.classList.add("postTitle");
      let textPost=document.createElement("h3");
      textPost.style="font-size:1.17em;"
      textPost.innerHTML=this.data.title;
      divPostTitle.append(textPost);
      //File
      let divPostBody=document.createElement("div");
      divPostBody.classList.add("postBody");
      let file=document.createElement("img");
      file.style="width:100%";
      file.src=this.data.file;
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
      spanComm.innerHTML=this.data.comments+" Comments";
      divCommentsBtn.append(commImg);
      divCommentsBtn.append(spanComm);
      divPostBottom.append(divCommentsBtn);



      //Appends
      divPost.append(divPostAuthor);
      divPost.append(divPostTitle);
      divPost.append(divPostBody);
      divPost.append(divPostBottom);
      container.append(divPost);

    }

}