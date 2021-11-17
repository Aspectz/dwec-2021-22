import {Login} from './js/login.js';
import {Main} from './js/main.js';
import {Register} from './js/register.js';

import './css.css';

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
    function main(container){
        let main=new Main();
        main.renderMain(container);
    }


    document.addEventListener("DOMContentLoaded",function(){
        let container=document.querySelector("#container");
        main(container);

        
        document.querySelector("#login_link").addEventListener("click",()=>{
            login(container);
        });
        document.querySelector("#register_link").addEventListener("click",()=>{
            register(container);
        });
    });
})();





