import {Login} from './js/login.js';
import {Main} from './js/main.js';
import {Register} from './js/register.js';
import { CreatePost } from './js/createpost.js';
import './css/css.css';
import {Menu} from './js/topmenu.js'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

(()=>{
    function login(cont){
        let login=new Login();
        login.renderLogin(cont);
    }
    function register(cont){
        let register=new Register();
        register.renderRegister(cont);
    }
    function main(cont){
        let main=new Main(cont);
        main.renderMain();
    }
    function createPost(container){
        let createPost=new CreatePost(container);
        createPost.renderCreatePost();
    }
    function renderMenu(){
        let menu=new Menu();
        if(localStorage.getItem("email")!=null && localStorage.getItem("IDToken")!=null)
            menu.getLoggedMenu();
        else
            menu.getDefaultMenu();
        
    }
    
    document.addEventListener("DOMContentLoaded",function(){
        renderMenu();
        let container=document.querySelector("#container");
        main(container);

       /* document.querySelector("#login_link").addEventListener("click",()=>{
            login(container);
        });
        document.querySelector("#register_link").addEventListener("click",()=>{
            register(container);
        });
        document.querySelector("#create_post").addEventListener("click",()=>{
            createPost(container);
        });*/
        document.querySelector("#log_out").addEventListener("click",()=>{ localStorage.clear()});
    });
})();





