let lepes; /**4 lépés a minimum, úgy gondolom. Ha szerencséje van az embernek, és 6 világít elég 2 is.*/
let sor;
kever();
let lista=[new Jatekos("Névtelen",100),
new Jatekos("Névtelen",100),
new Jatekos("Névtelen",100)
]
kiir()
function kever(){
    lepes=0;
    sor=[0,0,0,0,0,0,0]
    let n=Math.floor(Math.random()*7)
    for(let i=0;i<100;i++){
        if (n==0){
            valt(n+1)
        }else{
            valt(n)
        }
        
    }
}
function kapcsol(az){
    if(sor[az]==0){
        $("#"+az).css("background-color","yellow")
        sor[az]=1
    }else{
        $("#"+az).css("background-color","black")
        sor[az]=0
    }
}
function valt(n){
    kapcsol(n)
    kapcsol((n+1)%7)
    kapcsol((n+6)%7)
}
function vege(){
    if(sor.toString()=="0,0,0,0,0,0,0"){
        let n=prompt("Gratulálok, sikerült "+lepes+" lépésben\nNeved?")
        beszur(n,lepes)
        kiir()
        kever()
    }
}
$(".lampa").click(function(){
    valt(+this.id)
    lepes++
    vege()
})
function Jatekos(nev,pont){
    this.nev=nev
    this.pont=pont
}
function kiir(){
    let s=""
    for (const j of lista){
        s+="<p>"+j.nev+"\t"+j.pont+"<p>"
    }$("#eredmenyek").html(s)
}
function beszur(nev,pont){
    lista.push(new Jatekos(nev,pont))
    for(let i=lista.length-1;i>0;i--){
        if(lista[i].pont<lista[i-1].pont){
        let t=lista[i-1];
        lista[i-1]=lista[i]
        lista[i]=t
    }}lista.length=3
}