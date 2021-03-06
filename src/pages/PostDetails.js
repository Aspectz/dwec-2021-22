import { Controller } from "../controller/Controller.js";
import { Model } from "../models/Model.js";
import {PostView} from '../views/PostView.js'
export{PostDetails}
class PostDetails{

    constructor(url,id){
        this.url=url;
        this.id=id;
    }

    render(container){
        new Controller(
            new Model(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/${this.url}.json`),
            new PostView(container,"detail",this.id));
    }


}