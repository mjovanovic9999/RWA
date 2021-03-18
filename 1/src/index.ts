import { Covek } from './covek';

(function(host:HTMLElement)
{
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
    dugme.innerHTML="dodaj";
    el.append(dugme);
    dugme.onclick=function(){
        if(imeTb.innerText==="" || prezimeTb.innerText===""||brGodina.innerText===" ")  
            throw new Error("Neophodna polja nisu popunjena");
        ljudi.push(new Covek(imeTb.innerText,prezimeTb.innerText,parseInt(brGodina.innerText))
    };

    el=document.createElement("div");
    el.className="odvajanje";
    host.append(el);

})(document.querySelector("body"));

let ljudi: Covek[]=new Array();
ljudi.push(new Covek("Tom","Smith",56));
ljudi[0].crtaj(document.querySelector("body"));

/*let ljud=new Covek("Tom","Smith",56);
ljud.crtaj(document.querySelector("body"));*/