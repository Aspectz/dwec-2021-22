export { Router };

import { Main } from "../js/main.js";
import { Register } from "../js/register.js";
import { Login } from "../js/login.js";
import { PostsPage } from "../pages/PostsPage.js";
import { CreatePost } from "../js/createpost.js";
import { renderMenu } from "../scripts.js";
import { PostDetails } from "../pages/PostDetails.js";
import { PostCreation } from "../pages/PostCreation.js";

class Router {
  constructor(route) {
    this.route = route;
    this.getRoutes();
  }

  getRoutes() {


    if (/^#\/communities/.test(this.route)) {
        let url=this.route.substring(1);
        let postDetails=new PostDetails(url);
        postDetails.render(app.container);


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
          console.log("reg");
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
