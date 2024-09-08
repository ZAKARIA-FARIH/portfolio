// window.bd.style.background="yellow";
function calculer(){
   var t=window.ms.value;
   var pri=window.Pr.value ;
   var qti=window.Qtt.value;
   var Mhti=window.Mht.innerHTML;
   var Tau=window.Taux.selectedIndex;
   var Mtvi=window.Mtv.innerHTML;
   var Mttci=window.Mttc.innerHTML;
    if(pri=="" || qti=="" || t==""){
      Afficher('Veuillez compléter la Saisie des informations !!',true,3,'phot3');
      return;
    }
   Mhti=pri*qti;
   Mtvi=Mhti*Tau;
   Mttci=Mhti+Mtvi;
   window.Mht.innerHTML=Mhti;
   window.Mtv.innerHTML=Mtvi;
   window.Mttc.innerHTML=Mttci;
}
var Prix=[''];var Qt=[''];var TVA=[''];var montttc=[''];var monttv=[''];var montht=[''];
window.List.length=0;
function Valider(){
var t=window.ms.value;
var n=window.List.length; 
var pri=window.Pr.value ;
var qti=window.Qtt.value;
var Mhti=window.Mht.innerHTML;
var Tau=window.Taux.selectedIndex;
var Mtvi=window.Mtv.innerHTML;
var Mttci=window.Mttc.innerHTML;
if(pri=="" || qti=="" || t==""){
  Afficher('Veuillez compléter la Saisie des informations !!',true,3,'phot3');
  return;
}
Prix[n]=pri; Qt[n]=qti;TVA[n]=Tau;montttc[n]=Mttci;monttv[n]=Mtvi;montht[n]=Mhti;
window.List.options[n]=new Option(t,true);
vide();
window.ms.focus();
}
function affdata(){
    var i=window.List.selectedIndex;
    var t=window.List.options[i].text;
window.ms.value=t;
window.Pr.value=Prix[i];
window.Qtt.value=Qt[i];
window.Mht.innerHTML=montht[i];
window.Mtv.innerHTML=monttv[i];
window.Mttc.innerHTML=montttc[i];
window.Taux.selectedIndex=TVA[i];
}
function vide(){
  window.ms.value="";
  window.Pr.value="";
  window.Qtt.value="";
  window.Mht.innerHTML="";
  window.Mtv.innerHTML="";
  window.Mttc.innerHTML="";
  window.Taux.selectedIndex=-1;
  window.List.selectedIndex=-1;
}
function Effacer(){
  window.ms.value="";
  window.Pr.value="";
  window.Qtt.value="";
  window.Mht.innerHTML="";
  window.Mtv.innerHTML="";
  window.Mttc.innerHTML="";
  window.Taux.selectedIndex=-1;
  window.List.selectedIndex=-1;
}
function Supprimer(){
  var i=window.List.selectedIndex;
  k=window.Taux.selectedIndex;
  window.List.options[i]=null;
  Prix.splice(i,1); Qt.splice(i,1);
  TVA.splice(i,1);montttc.splice(i,1);
  monttv.splice(i,1);montht.splice(i,1);
  window.ms.value="";
  window.Pr.value="";
  window.Qtt.value="";
  window.Mht.innerHTML="";
  window.Mtv.innerHTML="";
  window.Mttc.innerHTML="";
  window.ms.focus();
}
function Nouveau(){
  window.ms.value="";
  window.Pr.value="";
  window.Qtt.value="";
  window.Mht.innerHTML="";
  window.Mtv.innerHTML="";
  window.Mttc.innerHTML="";
  window.Taux.selectedIndex=-1;
  window.List.selectedIndex=-1;
}







/*  menu c */
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))































// function calculer() {
//     var prix=0 ,quantite=0 ,tva=0,mht=0,mtva=0,mttc=0;
//     prix=window.pr.value;
//     quantite=window.qn.value;
//     tva= Number(window.tv.value);
//     mht=window.ht.value;
//     mtva=window.mtv.value;
//    mttc=window.ttc.value;
//    mht=prix*quantite;
//    mtva=mht*(tva/100);
//    mttc=mht-mtva;
//    window.ht.value=mht;
//    window.mtv.value=mtva;
//    window.ttc.value=mttc;
// }
