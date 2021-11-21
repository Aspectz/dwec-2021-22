import {Main} from './js/main.js';
import './css/css.css';
import {Menu} from './js/topmenu.js'
import 'bootstrap';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

(()=>{
    
    function main(cont){
        let main=new Main(cont);
        main.renderMain();
    }
    function renderMenu(){
        let menu=new Menu();
        menu.getMenu();
        
    }
    
    document.addEventListener("DOMContentLoaded",function(){
        renderMenu();
        let container=document.querySelector("#container");
        main(container);

    });
})();





