import { Covek } from './covek';

export class Prikaz
{
    public niz:Covek[];

    constructor(niz:Covek[]) {
        this.niz=niz;
    }
    klik(a:Covek) {
       
        this.niz.push(a);
        
        
    }

    inicijalno(){
    let host=document.querySelector("body");
    let el=document.createElement("div");
    
    let imeTb=document.createElement("input");
    el.append(imeTb);
    let ime=document.createElement("label");
    ime.innerHTML="Ime";
    el.append(ime);
    
    el.append(document.createElement("div"))

    
    let prezimeTb=document.createElement("input");
    el.append(prezimeTb);
    let prezime=document.createElement("label");
    prezime.innerHTML="Prezime";
    el.append(prezime);

    el.append(document.createElement("div"))


    
    let godineUnos =document.createElement("input");
    godineUnos.type="number";
    el.append(godineUnos);
    let brGodina=document.createElement("label");
    brGodina.innerHTML="Godine starosti";
    el.append(brGodina);
    

    host.append(el);

    el.append(document.createElement("div"))

    let dugme=document.createElement("button");
    dugme.innerHTML="Dodaj u red";
    el.append(dugme);
    dugme.onclick=(ev)=>{
        if(imeTb.value==="" || prezimeTb.value===""||godineUnos.value===""||parseInt(godineUnos.value)<1)  
            throw new Error("Greska! Probajte opet");

        const a =new Covek(imeTb.value,prezimeTb.value,parseInt(godineUnos.value));
        a.crtaj(kont);
       this.klik(a);
        
        
    }

    dugme=document.createElement("button");
    dugme.innerHTML="Zavrsio";
    el.append(dugme);
    
    dugme.onclick=(ev)=>{
        if(this.niz.length===0) alert("Nema vise ljudi koji cekaju");
        else this.niz.shift().obrisi();
        
    }

    let odv=document.createElement("div");
    odv.className="odvajanje";
    host.append(odv);

    let kont=document.createElement("div");
    kont.className="kont";
    host.append(kont);
    }
}
