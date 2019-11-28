export class Menu{
    id:number;
    menuName:string;
    count:number;
    type:string;
    description:string;

    constructor(id?:number,menuName?:string,count?:number,type?:string,description?:string){
        this.id=id;
        this.menuName=menuName;
        this.count=count;
        this.type=type;
        this.description=description;
    }
    
}