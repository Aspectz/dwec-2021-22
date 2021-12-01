export {Model};
export {Service};
class Model{

    constructor(url){
        this.service=new Service(url);
        this.service.read().then();
    }

    notifyChange(callback){
        this.service.onItemChange=callback;
    }
}

class Service{

    constructor(url){
        this.url=url;
        this.Items=[]
        this.onItemChange=()=>{}
    }

    async read(){
        return await fetch(this.url).
        then(response=>response.json()).
        then(data=>{
            this.Items=data;
            this.onItemChange(this.Items);
        });
    }

}