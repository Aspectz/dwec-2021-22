import './css/css.css';
import {Menu} from './components/topmenu.js'
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Router} from './router/routes.js';
export {renderMenu}
(()=>{

    window.app={}

    document.addEventListener("DOMContentLoaded",function(){
        app.container=document.querySelector("#container");
        new Router(window.location.hash);
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




