import { Main } from "./main";
export {Post};
class Post{
    constructor(data){
        this.data=data;
    }
    renderPost(container){

      //container.innerHTML+=`<div class="divExt"><div class="leftDivVotes"><p class="iconUpVote"></p><p>${this.data.upvotes}</p><p class="iconDownVote"></p></div><div class="divPost"><div class="postAuthor"><h6>Posted by ${this.data.author}</h6></div><div class="postTitle"><h3 style="font-size: 1.17em;">${this.data.title}</h3></div><div class="postBody"><img style="max-width: 100%;" src="${this.data.file}"></div><div style="display: flex;"><div class="divCommentsBtn""><i class="iconComment"></i><span>${this.data.comments} Comments</span></div></div></div></div>`;


      let divExt=document.createElement("div");
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
      p2.id="pUpvote";
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
     
      
        divPost.addEventListener("click",()=>{ /* showPost */ });

        upVote.addEventListener("click",()=>{ this.vote("upvote")})
        downVote.addEventListener("click",()=>{ this.vote("downvote")})
    }


    async vote(whatVoted){
        let alreadyVoted=false;

        let user=localStorage.getItem("nickname");
        let upVotes=await fetch(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/users.json`)
        let data=await upVotes.json();
        for(let u in data){
            if(data[u].nickname==user){
                let votesFromUser=Object.entries(data[u].upvotes);
                let total=votesFromUser.filter(vote=> vote[0]== this.data.id);
                if(total.length==1)
                    alreadyVoted=true;
            }
        }
        if(alreadyVoted)
            console.log("aiai");

    }


    async upVote(p2){

        


        

        
        let votos=parseInt(this.data.upvotes);
        votos++;
        let resp=await fetch(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/posts/${this.data.id}/upvotes/.json`,{
            method: "put",
            headers: {
              "Content-type": "application/json;charset=UTF-8",
            },
            body: votos,
          });
        
        //let data=await resp.json();
        //p2.innerHTML=data;
        
        let main=new Main();
        main.renderMain(); 
        
    }

    downVote(){
        console.log("Downvoting",this.data.upvotes);
    }

}

