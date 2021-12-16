export {CommunityPostList}
import { Controller } from "../controller/Controller.js";
import { Model } from "../models/Model.js";
import {PostView} from '../views/PostView.js'

class CommunityPostList{
    constructor(url){
        this.url=url
    }

    async render(container){
        let postList=new Controller(

            new Model(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/${this.url}.json`),
            new PostView(container,"listInCommunity"));
    }
}