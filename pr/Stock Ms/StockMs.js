var Stock=[
    Ref=[""],
    Mar=[""],
    Pri=[""],
    Qtt=[""],
    Four=[""],
    Dten=[""],
    Obsr=[""]
];
var  ttre=document.getElementsByClassName("titre");
for (var i=0;i<7;i++){
    ttre[i].style.visibility="hidden";
}
// window.Zone2.style.overflow="hidden";   
var n=0;var indice=0 ;existe=false;
Masquer();
function Ajouter(){
    if (window.Rf.value=="" || window.Ma.value=="" || window.Pr.value=="" ||
    window.Qu.value=="" || window.Fo.value=="" || window.Da.value=="" ||
    window.Ob.value==""){
        Afficher('Veuillez compléter la Saisie des informations !!',true,3,'phot3');
        return;
    }
    Ref[n]=window.Rf.value;Mar[n]=window.Ma.value;Pri[n]=window.Pr.value;
    Qtt[n]=window.Qu.value;Four[n]=window.Fo.value;Dten[n]=window.Da.value;
    Obsr[n]=window.Ob.value;
    var ligne=window.Ta.insertRow(-1);
    // ligne.onmousemove=function(){
    //     ligne.style.background="red";
    //     }
    //     ligne.onmousemout=function(){
    //         ligne.style.background="black";
    //         }
    for (i=0;i<7;i++){
        var txt=document.createTextNode(Stock[i][n]);
       var  cellule=ligne.insertCell(-1);
        cellule.appendChild(txt);
        if(i==0){
            cellule.style.cursor="pointer";
            cellule.style.color="yellow";
            cellule.onclick=function(){
                window.Rf.value=this.innerHTML;
                Rechercher();
            }
             
        }
    }
    if(n>=15){
        window.Zone2.style.overflow="scroll";
    }
    n=n+1;
    // Effacer();
}

function Masquer(){
    for (var i=0;i<7;i++){
        ttre[i].style.visibility="hidden";
    }
    window.Zone2.style.display="none";
}

function AfficherEx(){
    for (var i=0;i<7;i++){
        ttre[i].style.visibility="visible";
    }
    window.Zone2.style.display="block";
}

function Effacer(){
    window.Rf.value="";window.Ma.value="";window.Pr.value="";
    window.Qu.value="";window.Fo.value="";window.Da.value="";
    window.Ob.value="";
}

function Rechercher(){
    var t=window.Rf.value;
    for(i=0;i<Ref.length;i++){
        if(t==Ref[i]){
            indice=i;existe=true;
            window.Rf.value=Ref[i];window.Ma.value=Mar[i];window.Pr.value=Pri[i];
            window.Qu.value=Qtt[i];window.Fo.value=Four[i];window.Da.value=Dten[i];
            window.Ob.value= Obsr[i];return;
        }
    }
    if (existe==false){
     alert();
    } 
}
function Supprimer(){
    window.Ta.deleteRow(indice);
    Ref.splice(indice,1);
    Mar.splice(indice,1);
    Pri.splice(indice,1);
    Qtt.splice(indice,1);
    Four.splice(indice,1);
    Dten.splice(indice,1);
    Obsr.splice(indice,1);
    var n=Ref.length;
    if(n==0){
        for (var i=0;i<7;i++){
            ttre[i].style.visibility="hidden";
        }
    }
    if(n=15){
        window.Zone2.style.overflow="hidden";
        // window.Zone2.style.width="1234px";
    }  
}
function Modifier(){
    Ref[indice]=window.Rf.value;Mar[indice]=window.Ma.value;Pri[indice]=window.Pr.value;
    Qtt[indice]=window.Qu.value;Four[indice]=window.Fo.value;Dten[indice]=window.Da.value;
    Obsr[indice]=window.Ob.value;
    window.Ta.delecteRow(indice);
    var ligne=window.Ta.insertRow(indice);
    // ligne.onmousemove=function(){
    //     ligne.style.background="red";
    //     }
    //     ligne.onmousemout=function(){
    //         ligne.style.background="black";
    //         }
    for (var i=0;i<7;i++){
        var txte=document.createTextNode(Stock[i][indice]);
        txt=document.createTextNode(txte);
       var  cellule=ligne.insertCell(-1);
        cellule.appendChild(txt);
        if(i==0){
            cellule.style.cursor="pointer";
            cellule.style.color="yellow";
            cellule.onclick=function(){
                window.Rf.value=this.innerHTML;
                Rechercher();
            }
             
        }
    }
}
function Debut(){
    indice=0;
    window.Rf.value=Ref[indice] ;
    window.Ma.value=Mar[indice] ;
    window.Pr.value=Pri[indice] ;
    window.Qu.value=Qtt[indice] ;
    window.Fo.value=Four[indice];
    window.Da.value=Dten[indice];
    window.Ob.value=Obsr[indice];
}
function Fin(){
    indice=Ref.length-1;
    window.Rf.value=Ref[indice] ;
    window.Ma.value=Mar[indice] ;
    window.Pr.value=Pri[indice] ;
    window.Qu.value=Qtt[indice] ;
    window.Fo.value=Four[indice];
    window.Da.value=Dten[indice];
    window.Ob.value=Obsr[indice];
}
function Precedent() {
    indice--;
    if(indice>=0    ){
        window.Rf.value=Ref[indice] ;
        window.Ma.value=Mar[indice] ;
        window.Pr.value=Pri[indice] ;
        window.Qu.value=Qtt[indice] ;
        window.Fo.value=Four[indice];
        window.Da.value=Dten[indice];
        window.Ob.value=Obsr[indice];
    }
    else {
        indice++;
    }
}
function Suivant() {
    indice++;
    if(indice<Ref.length){
        window.Rf.value=Ref[indice] ;
        window.Ma.value=Mar[indice] ;
        window.Pr.value=Pri[indice] ;
        window.Qu.value=Qtt[indice] ;
        window.Fo.value=Four[indice];
        window.Da.value=Dten[indice];
        window.Ob.value=Obsr[indice];
    }
    else {
        indice--;
    }
}










/*  menu c */
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))

































// ARRAY:





// var tabl=['zakaria','farih','zaki'];
// document.write(tabl[2]);




// var 
// tabl=[name=['zakaria','farih'],
// email=['zakar@gmail.com','fari@gmail.com'],
// adress=['azhar','sakani']];
// document.write(tabl[2][0]);



// var 
// tabl=[Programmation=[Note1=['zakaria','farih'],Note2=['zakari','fari']],
// Buretique=[Note1=['zakar@gmail.com','fari@gmail.com'],Note2=['zakar@gmail','fari@gmail']],
// systéme=[Note1=['azhar','sakani'],Note2=['azh','sak']]];
// document.write(tabl[2][1][0]);