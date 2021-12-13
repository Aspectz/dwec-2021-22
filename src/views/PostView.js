import { Router } from "../router/routes";

export { PostView };

class PostView {
  constructor(cont, type,id) {
    this.container = cont;
    this.type = type;
    this.id=id;
  }

  async renderItem(Item) {
    this.data = Item;
    this.container.innerHTML = "";

    let mainContainer = document.createElement("div");
    mainContainer.classList.add("mainContainer");
    //Container where all posts are showed to user

    let divPosts = document.createElement("div");
    divPosts.classList.add("containerPosts");
    //Right Aside bar

    mainContainer.append(divPosts);
    

    if (this.type == "list") {
      this.getAside(mainContainer);
      for (let commun in this.data) {
        let posts = this.data[commun].posts;
         for (let post in posts) {
           posts[post].id = post;
           await this.renderPost(divPosts, posts[post]);
         }
       }
    } else if (this.type == "listInCommunity") {
      /*GET USER Y MIRAR SI SeGUIX LA COMMUNITY*/
      let posts = this.data.posts;
      for (let post in posts) {
        posts[post].id = post;
        this.renderPost(divPosts, posts[post]);
      }
    } else if ((this.type = "detail")) {
      this.renderPost(divPosts, this.data);
      this.renderComments(divPosts, this.data.comments);
    }

    this.container.append(mainContainer);
  }

  getCommentBox(divPostBtm) {
    let divFormNewComment = document.createElement("div");

    let formComment = document.createElement("form");
    let textArea = document.createElement("TEXTAREA");
    textArea.classList.add("commentTextArea");

    formComment.append(textArea);
    divFormNewComment.append(formComment);
    divPostBtm.append(divFormNewComment);

    let btn=document.createElement("button");
    btn.innerHTML="Comment";
    btn.disabled=true;
    btn.className=("btn btn-primary");
    textArea.addEventListener("input",()=>{
      if(textArea.value.length>0) btn.disabled=false;
      else btn.disabled=true;
    });

    btn.addEventListener("click",async ()=>{

      let date = new Date();
      let dateFormat =
            [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("/");

      let comment=textArea.value;
      let user=localStorage.getItem("nickname");
      let commentBody={ "user" : user , "comment":comment , "date":dateFormat}
       let sendComment=fetch(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities/${this.data.community}/posts/${this.id}/comments.json`,
      {
        method: "post",
        headers: {
          "Content-type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(commentBody),
      }); 
      sendComment.then( ()=>{ new Router(`#/communities/${this.data.community}/posts/${this.id}`)});
    } );

    

    divPostBtm.append(btn);

  }

  getAside(mainContainer) {
    let divAsideRight = document.createElement("div");
    let h1Aside = document.createElement("h1");
    divAsideRight.classList.add("divRightAside");
    h1Aside.innerHTML = "Aside here";
    divAsideRight.append(h1Aside);
    mainContainer.append(divAsideRight);
  }

  

  renderPost(container, postData) {

    let divExt = document.createElement("div");
    divExt.classList.add("divExt");

    let divPost = document.createElement("div");
    divPost.classList.add("divPost");

    let href = document.createElement("a");
    href.style.textDecoration = "none";
    href.style.color = "white";
    if (this.type != "detail")
      href.href = `#/communities/${postData.community}/posts/${postData.id}`;

    divExt.append(divPost);

    //Left bar
    let leftDivVotes = document.createElement("div");
    leftDivVotes.classList.add("leftDivVotes");
    let upVote = document.createElement("p");

    let p2 = document.createElement("p");
    p2.id = "pUpvote";
    p2.innerHTML = postData.upvotes;
    let downVote = document.createElement("p");

    leftDivVotes.append(upVote);
    leftDivVotes.append(p2);
    leftDivVotes.append(downVote);

    divExt.append(leftDivVotes);

    //Author
    let divPostAuthor = document.createElement("div");
    let author = document.createElement("h6");
    divPostAuthor.classList.add("postAuthor");
    author.innerHTML = `Posted by ${postData.author} in <a class="hrefStyle" href="#/communities/${postData.community}">${postData.community}</a>`;
    divPostAuthor.append(author);

    //Title
    let divPostTitle = document.createElement("div");
    divPostTitle.classList.add("postTitle");
    let textPost = document.createElement("h3");
    textPost.style = "font-size:1.17em;";
    textPost.innerHTML = postData.title;
    divPostTitle.append(textPost);
    //File
    let divPostBody = document.createElement("div");
    divPostBody.classList.add("postBody");
    let file = document.createElement("img");
    file.style = "max-width:100%";
    file.src = postData.file;
    divPostBody.append(file);

    //Bottom Options
    let divPostBottom = document.createElement("div");
    divPostBottom.id = "divPostBottom";
    divPostBottom.classList.add("divCommentsBtn");
    //comments
    let divCommentsBtn = document.createElement("div");
    divCommentsBtn.classList.add("divCommentsBtn");
    let spanComm = document.createElement("span");
    let commImg = document.createElement("i");
    commImg.classList.add("iconComment");

    spanComm.innerHTML =
      postData.comments != null
        ? Object.entries(postData.comments).length + " Comments"
        : "0 Comments";
    divCommentsBtn.append(commImg);
    divCommentsBtn.append(spanComm);
    divPostBottom.append(divCommentsBtn);

    if (this.type == "detail") {
      divPostBottom.classList.remove("divCommentsBtn");
      if(localStorage.getItem("nickname")!=null)this.getCommentBox(divPostBottom);
    }

    //Appends
    divPost.append(href);
    href.append(divPostAuthor);
    href.append(divPostTitle);
    href.append(divPostBody);
    href.append(divPostBottom);

    divExt.append(divPost);
    container.append(divExt);

    upVote.addEventListener("click", () => {
      this.vote("upvoted");
    });
    downVote.addEventListener("click", () => {
      this.vote("downvoted");
    });
  }

  renderComments(divPosts, data) {
    let div = document.createElement("div");
    div.classList.add("divComments");
    let comments=Object.values(data);      

    comments.map( (comment) =>{
      let divEachComment=document.createElement("div");
      let divInfo = document.createElement("div");
      divInfo.style="wordBreak:break-word;padding:10px";
      let spanAuthor = document.createElement("span");
      spanAuthor.innerHTML = comment.user;
      let spanDate=document.createElement("span")
      spanDate.innerHTML=comment.date;
      spanDate.classList.add("spanDate")
      let pComm = document.createElement("p");
      pComm.style="margin-left:1%;margin-top:1%;";
      pComm.innerHTML = comment.comment;

      divInfo.append(spanAuthor);
      divInfo.append(spanDate);
      divInfo.append(pComm);
      divEachComment.append(divInfo);
      div.append(divEachComment);  
    });
    divPosts.append(div);
  }

}
