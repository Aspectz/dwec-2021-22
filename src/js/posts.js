import { Main } from "./main";
export { Post };
class Post {
  constructor(data,community) {
    this.data = data;
    this.community=community;
  }
  renderPost(container) {
    //container.innerHTML+=`<div class="divExt"><div class="leftDivVotes"><p class="iconUpVote"></p><p>${this.data.upvotes}</p><p class="iconDownVote"></p></div><div class="divPost"><div class="postAuthor"><h6>Posted by ${this.data.author}</h6></div><div class="postTitle"><h3 style="font-size: 1.17em;">${this.data.title}</h3></div><div class="postBody"><img style="max-width: 100%;" src="${this.data.file}"></div><div style="display: flex;"><div class="divCommentsBtn""><i class="iconComment"></i><span>${this.data.comments} Comments</span></div></div></div></div>`;

    console.log(this.data);
    let divExt = document.createElement("div");
    divExt.classList.add("divExt");

    let divPost = document.createElement("div");
    divPost.classList.add("divPost");
    divExt.append(divPost);
    //Left bar
    let leftDivVotes = document.createElement("div");
    leftDivVotes.classList.add("leftDivVotes");
    let upVote = document.createElement("p");
   
    

    let p2 = document.createElement("p");
    p2.id = "pUpvote";
    p2.innerHTML = this.data.upvotes;
    let downVote = document.createElement("p");
    
    this.isVoted().then((isVoted)=>{
        if(isVoted=="upvoted"){
            upVote.classList.add("iconUpVoted");
            downVote.classList.add("iconDownVote");
        }
        if(isVoted=="downvoted"){
            upVote.classList.add("iconUpVote");
            downVote.classList.add("iconDownVoted");
        }else{
            upVote.classList.add("iconUpVote");
            downVote.classList.add("iconDownVote");
        }
    });



    leftDivVotes.append(upVote);
    leftDivVotes.append(p2);
    leftDivVotes.append(downVote);

    divExt.append(leftDivVotes);

    //Author
    let divPostAuthor = document.createElement("div");
    let author = document.createElement("h6");
    divPostAuthor.classList.add("postAuthor");
    author.innerHTML = `Posted by ${this.data.author} in ${this.community}`;
    divPostAuthor.append(author);

    //Title
    let divPostTitle = document.createElement("div");
    divPostTitle.classList.add("postTitle");
    let textPost = document.createElement("h3");
    textPost.style = "font-size:1.17em;";
    textPost.innerHTML = this.data.title;
    divPostTitle.append(textPost);
    //File
    let divPostBody = document.createElement("div");
    divPostBody.classList.add("postBody");
    let file = document.createElement("img");
    file.style = "max-width:100%";
    file.src = this.data.file;
    divPostBody.append(file);

    //Bottom Options
    let divPostBottom = document.createElement("div");
    divPostBottom.style = "display:flex;flex-directionm:row;";
    //comments
    let divCommentsBtn = document.createElement("div");
    divCommentsBtn.classList.add("divCommentsBtn");
    let spanComm = document.createElement("span");
    let commImg = document.createElement("i");
    commImg.classList.add("iconComment");


    spanComm.innerHTML = Object.entries(this.data.comments).length + " Comments";
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


    
    divPost.addEventListener("click", () => {
        document.querySelector("#container").innerHTML="";
        this.renderUniquePost(document.querySelector("#container"));
    });

    upVote.addEventListener("click", () => {
      this.vote("upvoted");
    });
    downVote.addEventListener("click", () => {
      this.vote("downvoted");
    });
  }

  renderUniquePost(container) {
    
    this.getComments();

    let divExt = document.createElement("div");
    divExt.classList.add("divExt");
    divExt.style.width="640px";
    let divPost = document.createElement("div");
    divPost.classList.add("divPost");
    divExt.append(divPost);
    //Left bar
    let leftDivVotes = document.createElement("div");
    leftDivVotes.classList.add("leftDivVotes");
    let upVote = document.createElement("p");
   
    

    let p2 = document.createElement("p");
    p2.id = "pUpvote";
    p2.innerHTML = this.data.upvotes;
    let downVote = document.createElement("p");
    
    /* this.isVoted().then((isVoted)=>{
        if(isVoted=="upvoted"){
            upVote.classList.add("iconUpVoted");
            downVote.classList.add("iconDownVote");
        }
        if(isVoted=="downvoted"){
            upVote.classList.add("iconUpVote");
            downVote.classList.add("iconDownVoted");
        }else{
            upVote.classList.add("iconUpVote");
            downVote.classList.add("iconDownVote");
        }
    }); */



    leftDivVotes.append(upVote);
    leftDivVotes.append(p2);
    leftDivVotes.append(downVote);

    divExt.append(leftDivVotes);

    //Author
    let divPostAuthor = document.createElement("div");
    let author = document.createElement("h6");
    divPostAuthor.classList.add("postAuthor");
    author.innerHTML = `Posted by ${this.data.author} in ${this.community}`;
    divPostAuthor.append(author);

    //Title
    let divPostTitle = document.createElement("div");
    divPostTitle.classList.add("postTitle");
    let textPost = document.createElement("h3");
    textPost.style = "font-size:1.17em;";
    textPost.innerHTML = this.data.title;
    divPostTitle.append(textPost);
    //File
    let divPostBody = document.createElement("div");
    divPostBody.classList.add("postBody");
    let file = document.createElement("img");
    file.style = "max-width:100%";
    file.src = this.data.file;
    divPostBody.append(file);

    //Bottom Options
    let divPostBottom = document.createElement("div");
    divPostBottom.style = "display:flex;flex-direction:column;";
    //comments

    let divCommentsBtn = document.createElement("div");
    divCommentsBtn.classList.add("divCommentsBtn");
     let spanComm = document.createElement("span");
    //let commImg = document.createElement("i");
    //commImg.classList.add("iconComment");
    spanComm.innerHTML = Object.entries(this.data.comments).length + " Comments";
    /*divCommentsBtn.append(commImg);*/
    divCommentsBtn.append(spanComm); 

    let divFormNewComment=document.createElement("div");
    

    let formComment=document.createElement("form");
    let textArea=document.createElement("TEXTAREA");
    textArea.classList.add("commentTextArea"); 

    formComment.append(textArea);
    divFormNewComment.append(formComment);

    divPostBottom.append(divCommentsBtn);
    divPostBottom.append(divFormNewComment);
    //Appends
    divPost.append(divPostAuthor);
    divPost.append(divPostTitle);
    divPost.append(divPostBody);
    divPost.append(divPostBottom);
    divExt.append(divPost);
    container.append(divExt);



    divCommentsBtn.addEventListener("click",async ()=>{
      let comment=textArea.value;
      let user=localStorage.getItem("nickname");
      let commentBody={ "user" : user , "comment":comment}
      let sendComment=await fetch(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities/${this.community}/posts/${this.data.id}/comments.json`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(commentBody),
      });
    }); 
  }


  async isVoted() {

    let user = localStorage.getItem("localId");
    let upVotes = await fetch(
      `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/users/${user}/upvotes/${this.data.id}.json`
    );
    let data = await upVotes.json();
    return data;
  }


  async getComments(){
    let resp=await fetch(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities/${this.community}/posts/${this.data.id}/comments.json`);
    let comments = await resp.json();

    console.log(comments);
  }

  async vote(option) {
    let votos = parseInt(this.data.upvotes);
    votos++;
    let isVoted=await this.isVoted();
    if(option=="upvoted" && isVoted=="upvoted"){
        console.log(document.querySelector(".iconUpVoted"));
    }if(option=="upvoted" && isVoted=="downvoted"){
        votos-=2;
    }
    if(option=="downvoted" && isVoted=="downvoted"){
        return;
    }
    if(option=="downvoted" && isVoted=="upvoted"){
        votos+=2;
    }
        
    let resp = await fetch(
      `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/posts/${this.data.id}/upvotes/.json`,
      {
        method: "put",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: votos,
      }
    );
    await fetch(
        `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem("localId")}/upvotes/${this.data.id}.json`,
        {
          method: "put",
          headers: {
            "Content-type": "application/json;charset=UTF-8",
          },
          body: JSON.stringify(option),
        }
      );

    let data=await resp.json();
    console.log(data);
    document.querySelector("#pUpvote").innerHTML=data;

    
    /* let main = new Main();
    main.renderMain(); */
  }
}
