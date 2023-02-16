export class videoClass {
    id: number;
    link: string;
   

    constructor( id: number ,  link: string)
    {
       this.id = id;
      
       this.link = link;

    }

    getId(): number 
    {
       return this.id;
    }

    getLink(): string 
    {
       return this.link;
    }
}
