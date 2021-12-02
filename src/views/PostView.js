
export { PostView };

class PostView {


  constructor(cont, type,logged) {
    this.container = cont;
    this.type = type;
    this.logged=logged;
    console.log("cont",cont);
  }


  async getAllPosts(){

  }


  async renderItem(Item) {
    
    this.data=Item;
    this.container.innerHTML = "";

    let mainContainer=document.createElement("div")
    mainContainer.classList.add("mainContainer");
    //Container where all posts are showed to user

    let divPosts = document.createElement("div");
    divPosts.classList.add("containerPosts");
    //Right Aside bar
    let divAsideRight = document.createElement("div");
    let h1Aside = document.createElement("h1");
    divAsideRight.classList.add("divRightAside");
    h1Aside.innerHTML = "Aside here";
    divAsideRight.append(h1Aside);

   
    if(this.type=="list"){
      for (let commun in this.data) {
        let posts = this.data[commun].posts;
        for (let post in posts) {
          posts[post].id = post;
          await this.renderPost(divPosts,posts[post]);
        }
      }
    }
    else if(this.type="detail"){
      await this.renderPost(divPosts,this.data);
    }

    mainContainer.append(divPosts);
    mainContainer.append(divAsideRight);

    this.container.append(mainContainer);
  }


  
  renderPost(container,postData) {

    let divExt = document.createElement("div");
    divExt.classList.add("divExt");

    let divPost = document.createElement("div");
    divPost.classList.add("divPost");

    let href=document.createElement("a");
    href.style.textDecoration="none";
    href.style.color="white";
    href.href=`#/communities/${postData.community}/posts/${postData.id}`;

    divExt.append(divPost);

    //Left bar
    let leftDivVotes = document.createElement("div");
    leftDivVotes.classList.add("leftDivVotes");
    let upVote = document.createElement("p");
   
    

    let p2 = document.createElement("p");
    p2.id = "pUpvote";
    p2.innerHTML = postData.upvotes;
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
    });*/



    leftDivVotes.append(upVote);
    leftDivVotes.append(p2);
    leftDivVotes.append(downVote);

    divExt.append(leftDivVotes);

    //Author
    let divPostAuthor = document.createElement("div");
    let author = document.createElement("h6");
    divPostAuthor.classList.add("postAuthor");
    author.innerHTML = `Posted by ${postData.author} in ${postData.community}`;
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
    divPostBottom.style = "display:flex;flex-directionm:row;";
    //comments
    let divCommentsBtn = document.createElement("div");
    divCommentsBtn.classList.add("divCommentsBtn");
    let spanComm = document.createElement("span");
    let commImg = document.createElement("i");
    commImg.classList.add("iconComment");


    spanComm.innerHTML = postData.comments!=null ? Object.entries(postData.comments).length + " Comments" : "0 Comments";
    divCommentsBtn.append(commImg);
    divCommentsBtn.append(spanComm);
    divPostBottom.append(divCommentsBtn);

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
/*
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
    
    // this.isVoted().then((isVoted)=>{
     // if(isVoted=="upvoted"){
       //     upVote.classList.add("iconUpVoted");
         //   downVote.classList.add("iconDownVote");
       // }
       // if(isVoted=="downvoted"){
         //   upVote.classList.add("iconUpVote");
           // downVote.classList.add("iconDownVoted");
        //}else{
          //  upVote.classList.add("iconUpVote");
            downVote.classList.add("iconDownVote");
       // }
    //});



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
    //divCommentsBtn.append(commImg);
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

    
    // let main = new Main();
    //main.renderMain(); 
  }*/
}
