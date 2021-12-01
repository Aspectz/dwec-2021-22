export {Controller}

class Controller{

    constructor(model,view){
        this.model=model;
        this.view=view;
        this.model.notifyChange(this.onItemChange);
    }

    onItemChange=Item =>{
        this.view.renderItem(Item);
    }

}