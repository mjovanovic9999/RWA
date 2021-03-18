export class Covek{

    public ime: string;
    public prezime: string;
    public godine: number;
    private host: HTMLElement;
    
    constructor(ime:string,prezime:string, godine:number){
        this.ime=ime;
        this.prezime=prezime;
        this.godine=godine;
    }

    crtaj(host:HTMLElement){
        this.host=host;
        const el=document.createElement("div");
        el.innerHTML="dfdfdf";
        el.classList.add("covek")
        host.append(el);
        
    }
}