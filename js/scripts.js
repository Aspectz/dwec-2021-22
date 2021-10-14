import {Login} from './login.js';
import {Main} from './main.js';

(()=>{
    function login(container){
        let login=new Login();
        login.renderLogin(container);
    }
    function main(container){
        let main=new Main();
        main.renderMain(container);
    }


    document.addEventListener("DOMContentLoaded",function(){
        let container=document.querySelector("#container");
        main(container);
        console.log("a");
    });
})();





