export { Router };

import { Main } from "../js/main.js";
import { Register } from "../js/register.js";
import { Login } from "../js/login.js";
import { PostsPage } from "../pages/PostsPage.js";
import { CreatePost } from "../js/createpost.js";
import { renderMenu } from "../scripts.js";
import { PostDetails } from "../pages/PostDetails.js";
import { PostCreation } from "../pages/PostCreation.js";
import { CommunityPostList } from "../pages/CommunityPostList.js";

class Router {
  constructor(route) {
    this.route = route;
    this.getRoutes();
  }

  getRoutes() {
    if (/^#\/communities\/[0-9a-zA-Z]+\/posts\//.test(this.route)) {
      let url = this.route.substring(1);
      let id=url.substring(url.length,url.lastIndexOf("/")+1)
      let postDetails = new PostDetails(url,id);
      postDetails.render(app.container);
    } else if (/^#\/communities\/[0-9a-zA-Z]+/.test(this.route)) {
      let url = this.route.substring(1);
      let commPostList = new CommunityPostList(url);
      commPostList.render(app.container);
    } else {
      switch (this.route) {
        case "#/":
          let posts = new PostsPage();
          posts.render(app.container);
          break;
        case "":
          let p = new PostsPage();
          p.render(app.container);
          break;
        case "#/register":
          let register = new Register();
          register.renderRegister();
          break;
        case "#/login":
          let login = new Login();
          login.renderLogin();
          renderMenu();

          break;
        case "#/logout":
          localStorage.clear();
          let m = new PostsPage();
          m.render(app.container);
          renderMenu();
          break;

        case "#/create_post":
          console.log("create post");
          let createPost = new PostCreation();
          createPost.render(app.container);
          break;
      }
    }
  }
}
