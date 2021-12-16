export { CommunityCreateView };
import { log } from "mocha/mocha-es2018";
import "../css/createPost.css";
import { Router } from "../router/routes.js";
import { View } from "./views";



class CommunityCreateView extends View {
  constructor(cont) {
    super(cont);
  }

  renderItem(Item) {
    this.data = Item;
    this.container.innerHTML = `<div class="mainContainer">
    <div class="containerCreatePosts">
        <form>
            <div class="mb-3">
            <label for="communityName" id="labelTitle" class="form-label text-white ">Community name</label>
            <input type="text" class="form-control" id="communityName">
            </div>
            <button type="submit" id="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    </div>`;
    document
      .querySelector("#submit")
      .addEventListener("click", () => this.createCommunity());
  }

  createCommunity() {
    if (this.checkCommunityExists() == 0) {
      this.fetchCommunity();
    } else {
      document.querySelector("#labelTitle").innerHTML =
        "This community already exists.";
    }
  }

  checkCommunityExists() {
    let communities = Object.values(this.data);
    let name = document.querySelector("#communityName").value;
    let sameCommunities = communities.filter( (community) => community.name == name);

    return sameCommunities.length;
  }

  fetchCommunity() {
    let name = document.querySelector("#communityName").value;
    let newCommunity = { "name" : name };

    let fetchJson = fetch(
      `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/communities/${name}.json?auth=${localStorage.getItem("IDToken")}`,
      {
        method: "put",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(newCommunity),
      }
    );

    fetchJson
      .then((resp) => resp.json())
      .then(() => {
        //Add  community to user
        console.log(localStorage.getItem("IDToken"));
        let fetchCommUser = fetch(
          `https://projectjs-b6bfe-default-rtdb.europe-west1.firebasedatabase.app/users/${localStorage.getItem("localId")}/communities/${name}.json?auth=${localStorage.getItem("IDToken")}`,
          {
            method: "put",
            headers: { "Content-type": "application/json; charset=UTF-8" },
            body: JSON.stringify(name),
          }
        ).then((resp)=>resp.json()).then(new Router("#/"));
      });
  }
}
