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
            return "https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities.json";


    }

}