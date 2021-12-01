import {Main} from './js/main.js';
import './css/css.css';
import {Menu} from './js/topmenu.js'
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Router} from './router/routes.js';
export {renderMenu}
(()=>{
    //Detect reload
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD){
        window.location.href="http://localhost:8080/#/";
    }


    window.app={}

    document.addEventListener("DOMContentLoaded",function(){
        app.container=document.querySelector("#container");
        new Router("#/");
        renderMenu();

    });


    window.addEventListener("hashchange",()=>{
        new Router(window.location.hash);
    });

    
   
    
    
})();

function renderMenu(){
    let menu=new Menu();
    menu.getMenu();
    
}




