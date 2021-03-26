export class Prikaz
{
    private niz:HTMLElement[];
    private host:HTMLElement;

    constructor(body:HTMLElement) {
        this.host=body;
        this.niz=null;
    }

    incicialnoCrtanje(){
        
        if(this.host===null)
            throw new Error("Greska!");
        let el=document.createElement("div");
        this.host.append(el);

        let kontejner1=document.createElement("div");
        kontejner1.className="kontejner";
        this.host.append(kontejner1);
        
        let kontejner2=document.createElement("div");
        kontejner2.className="kontejner";
        this.host.append(kontejner2);

        let broj=document.createElement("input");
        broj.type="number";
        el.append(broj);

        let button=document.createElement("button");
        button.innerHTML="Crtaj zadati broj elemenata";
        el.append(button);
        button.onclick= ()=>{
            kontejner1.innerHTML=null;
            kontejner2.innerHTML=null;
            this.crtaj(parseInt(broj.value));
            broj.value="";
        };
        
        button=document.createElement("button");
        button.innerHTML="Nasumicni broj";
        el.append(button);
        button.onclick= (ev)=>{
            kontejner1.innerHTML=null;
            kontejner2.innerHTML=null;
            this.crtaj(Math.round(Math.random()*8)+2);
            broj.value="";

        };
    }

    crtaj(broj:number){
        let divs:NodeListOf<HTMLElement>=document.querySelectorAll(".kontejner");
        
        if(divs.length!==2)
            throw new Error("Greska");
        
        const nizPromise:Promise<HTMLElement>[]=[];
        for (let index = 0; index <broj; index++) {

            let boja=this.getHex();
            let kocka=document.createElement("div");
            kocka.innerHTML="index"+index+"    ";
            kocka.className="kocka";
            kocka.style.backgroundColor=boja;
            this.prikaziKocku(kocka).then((el) => divs[0].append(el));

            kocka=document.createElement("div");
            kocka.innerHTML="index"+index+"";
            kocka.className="kocka";
            kocka.style.backgroundColor=boja;
            nizPromise.push(this.prikaziKocku(kocka));
        }      
        Promise.all(nizPromise).then(el=>el.forEach((element,index) => {
            divs[1].append(el[index])
        }));
    }

    prikaziKocku(kocka:HTMLElement)
    {
        return new Promise<HTMLElement>((resolve,reject) =>
        {
            setTimeout(() => resolve(kocka),Math.round(Math.random()*2000));
        })
    }

    private getHex()
    {
        return "#"+Math.round((Math.random()*16777215)).toString(16);
    }

    


}
