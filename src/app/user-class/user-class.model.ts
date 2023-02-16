export class UserClass {
     id: number;
     pic: string;
     name: string;
     status: string;
    

     constructor( id: number ,  pic: string , name: string , status: string)
     {
        this.id = id;
        this.pic = pic;
        this.name = name;
        this.status = status;

     }

     getId(): number 
     {
        return this.id;
     }

     getPic(): string 
     {
        return this.pic;
     }

     getName(): string 
     {
        return this.name;
     }

     getStatus(): string 
     {
        return this.status;
     }
}
