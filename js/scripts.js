import {Login} from './login.js';
import {Main} from './main.js';
import {Register} from './register.js';
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





