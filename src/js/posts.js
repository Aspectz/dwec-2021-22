export {Post};
class Post{
    constructor(data){
        this.data=data;
    }
    renderPost(container){


      container.innerHTML+=`<div class="divExt"><div class="leftDivVotes"><p class="iconUpVote"></p><p>${this.data.upvotes}</p><p class="iconDownVote"></p></div><div class="divPost"><div class="postAuthor"><h6>Posted by ${this.data.author}</h6></div><div class="postTitle"><h3 style="font-size: 1.17em;">${this.data.title}</h3></div><div class="postBody"><img style="max-width: 100%;" src="${this.data.file}"></div><div style="display: flex;"><div class="divCommentsBtn""><i class="iconComment"></i><span>${this.data.comments} Comments</span></div></div></div></div>`;

      console.log("HOLA");

      /*let divExt=document.createElement("div");
      divExt.classList.add("divExt");

      let divPost=document.createElement("div");
      divPost.classList.add("divPost");
      divExt.append(divPost);
      //Left bar
      let leftDivVotes=document.createElement("div");
      leftDivVotes.classList.add("leftDivVotes")
      let upVote=document.createElement("p");
      upVote.classList.add("iconUpVote");

      let p2=document.createElement("p");
      p2.innerHTML=this.data.upvotes;
      let downVote=document.createElement("p");
      downVote.classList.add("iconDownVote")
      
      leftDivVotes.append(upVote);
      leftDivVotes.append(p2);
      leftDivVotes.append(downVote);

      divExt.append(leftDivVotes);

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
      file.style="max-width:100%";
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
      divExt.append(divPost);
      container.append(divExt);
     */
      
    }

}

