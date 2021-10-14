import {Login} from './login.js';

(()=>{
    function login(container){
        let login=new Login();
        login.renderLogin(container);
    }



    document.addEventListener("DOMContentLoaded",function(){
        let container=document.querySelector("#container");
        login(container);
        console.log("a");
    });
})();





