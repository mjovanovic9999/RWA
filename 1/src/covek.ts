export class Covek{

    public ime: string;
    public prezime: string;
    public godine: number;
    private host: HTMLElement;
    private el: HTMLElement;
    
    constructor(ime:string,prezime:string, godine:number){
        this.ime=ime;
        this.prezime=prezime;
        this.godine=godine;
    }

    crtaj(host:HTMLElement){
        this.host=host;
        const el=document.createElement("div");
        el.innerHTML=this.ime+"<br>"+this.prezime+"<br>"+this.godine;
        this.el=el;
        el.classList.add("covek")
        host.append(el);
        
    }
    obrisi(){
        this.el.remove();
    }
}