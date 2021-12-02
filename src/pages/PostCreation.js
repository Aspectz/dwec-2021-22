import { Controller } from "../controller/Controller.js";
import { Model } from "../models/Model.js";
import {PostCreateView} from '../views/PostCreateView.js'
export{PostCreation}
class PostCreation{

    constructor(){;
    }

    render(container){
        new Controller(
            new Model(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem('localId')}/communities.json`),
            new PostCreateView(container));
    }


}