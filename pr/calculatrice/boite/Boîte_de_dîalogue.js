var k=0;
function Afficher(msg,ok,Ref,ico){
k=Ref;
window.CommentBoîte.innerHTML=msg;
if(ok==true){
  window.BigDivBoîte.style.display="block";
  window.TitreBoîte.innerHTML="Information";
  window.ButtonNonBoîte.style.display="none";
  window.ButtonOuiBoîte.style.marginLeft="100px";
  window.ButtonOuiBoîte.style.width="150px";
  window.ButtonOuiBoîte.innerHTML="OK";
}
 else if(ok==false && Ref<0){
  // window.bdy.style.backgroundColor="red";
  window.BigDivBoîte.style.display="block";
  window.TitreBoîte.innerHTML="Confirmation";
  window.ButtonNonBoîte.style.display="inline-block";
  window.ButtonOuiBoîte.style.width="100px";
  window.ButtonNonBoîte.style.width="100px";
  window.ButtonOuiBoîte.style.marginLeft="90px";
  window.ButtonOuiBoîte.innerHTML="OK";
  window.ButtonNonBoîte.innerHTML="Annuler";
}
 else if (ok==false && Ref>0){
  // window.bdy.style.backgroundColor="red";
  window.BigDivBoîte.style.display="block";
  window.TitreBoîte.innerHTML="Confirmation";
  window.ButtonNonBoîte.style.display="inline-block";
  window.ButtonOuiBoîte.style.width="100px";
  window.ButtonNonBoîte.style.width="100px";
  window.ButtonOuiBoîte.style.marginLeft="90px";
  window.ButtonOuiBoîte.innerHTML="Oui";
  window.ButtonNonBoîte.innerHTML="Non";
}
switch(ico){
 case 'phot1':window.IconeBoite.src="boite/icons8-error-100.png"; break;
 case 'phot2':window.IconeBoite.src="boite/icons8-help-64.png"; break;
 case 'phot3':window.IconeBoite.src="boite/icons8-information-64.png"; break;
 case 'phot4':window.IconeBoite.src="boite/icons8-help-90 (1).png"; break;
 case 'phot5':window.IconeBoite.src="boite/icons8-macos-close-30.png"; break;
}
}
function FermerBoite(){
  window.BigDivBoîte.style.display="none";
  confirme=false;k=0;
}

// function Deplacer(){
//   window.BigDivBoîte.style.transitionDuration="0s";
//   document.onmousemove * function(e){
//     xp =e.clientX // window.pageXOffest;
//     yp =e.clientY // window.pageYOffest ;
//     window.BigDivBoîte.style.left=xp-200; window.BigDivBoîte.style.top=yp-10;
//     xM=xp-200;yM=yp-10;
//   }
// }
//   function Placer(){
//     window.BigDivBoîte.style.left=xM;window.BigDivBoîte.style.top=yM;
//     window.BigDivBoîte.style.transitionDuration="0,3s";
//     document.onmousemove=null;
//   }