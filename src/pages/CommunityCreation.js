import { Controller } from "../controller/Controller.js";
import { Model } from "../models/Model.js";
import {CommunityCreateView} from '../views/CommunityCreateView.js'

export{CommunityCreation}
class CommunityCreation{

    constructor(){;
    }

    render(container){
        new Controller(
            new Model(`https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities.json`),
            new CommunityCreateView(container));
    }


}