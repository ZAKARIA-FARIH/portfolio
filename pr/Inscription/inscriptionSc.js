window.lalisteNom.length=0;
var date=[''];var NiveauSc=[''];var NumTel=[''];
var SectCh=[''];var NuCIN=[''];
// var AffImg=[''];
function Validierliste() {
    var i=window.lalisteNom.length;
    var n=window.NomIns.value;
    d=window.DateIns.value;
    Ns=window.NiveauScIns.value;
    Nt=window.NumTelIns.value;
    SCh=window.lalistech.selectedIndex;
    NuC=window.Ncin.value;
    if (d=="" || Ns=="" ||  Nt=="" ||  SCh=="" ||  NuC==""){
      Afficher('Veuillez compléter la Saisie des informations !!',true,3,'phot3');
      return;
    }
    date[i]=d;
    NiveauSc[i]=Ns;
    NumTel[i]=Nt;
    SectCh[i]=SCh;
    NuCIN[i]=NuC;
    
    // AffImg[i]=window.bigdivAff.value;
    window.lalisteNom.options[i]=new Option(n,true);
    window.DateIns.value="";
    window.NiveauScIns.value="";
    window.NumTelIns.value="";
    window.NomIns.value="";
    window.Ncin.value="";
    window.DivAffichImg.src="avat/333333.png"
    window.lalistech.selectedIndex=-1;
    afficherImage();
}
function affliste(){
    var i=window.lalisteNom.selectedIndex;
    var n=window.lalisteNom.options[i].text;
    window.NomIns.value=n;
    window.DateIns.value=date[i];
    window.NiveauScIns.value=NiveauSc[i];
    window.NumTelIns.value=NumTel[i];
    window.lalistech.selectedIndex=SectCh[i];
    window.Ncin.value=NuCIN[i];
    // window.bigdivAff.value=AffImg[i];
    afficherImage();
}
function afficherImage() {
    if(window.Ncin.value=="E1111"){
      window.DivAffichImg.src="avat/E1111.jpg";
    }
    else if(window.Ncin.value=="E11111"){
      window.DivAffichImg.src="avat/E11111.png";
    }
    else if(window.Ncin.value=="R11111"){
        window.DivAffichImg.src="avat/R11111.jpg";
      }
      else if(window.Ncin.value=="E111111"){
        window.DivAffichImg.src="avat/E111111.jpg";
      }
      else if(window.Ncin.value=="R111111"){
        window.DivAffichImg.src="avat/R111111.png";
      }
      else {
        window.DivAffichImg.src="avat/333333.png";
      }
  }
function Effacer(){
    window.DateIns.value="";
    window.NiveauScIns.value="";
    window.NumTelIns.value="";
    window.NomIns.value="";
    window.Ncin.value="";
    window.DivAffichImg.src="avat/333333.png"
    window.lalistech.selectedIndex=-1;
}






/*  menu c */
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))