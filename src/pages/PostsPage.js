export {PostsPage}
import { Controller } from "../controller/Controller.js";
import { Model } from "../models/Model.js";
import {PostView} from '../views/PostView.js'

class PostsPage{
    constructor(){}

    async render(container){

        let postList=new Controller(

            new Model(await this.getUrl()),
            new PostView(container,"list"));
    }
     async getUrl(){
      //  if(localStorage.getItem('nickname')==null){
            return "https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities.json";
      /*  }else{
            let getCommunities = await fetch(
               `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem("localId")}/communities.json`
              );
              let communities=await getCommunities.json()
              console.log(communities);
              return `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities/${communities}.json`;  
              
        }*/


    }

}