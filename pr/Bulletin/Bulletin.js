
function clacule(){
    var n1,n2,m,mc=0,mg=0,Note1,Note2;
    for(i=0 ; i<=6; i++) {
        Note1=(document.getElementsByClassName("Nt1")[i].value);
        Note2=(document.getElementsByClassName("Nt2")[i].value);
     if (Note1=="" || Note2=="") {
        Afficher('Veuillez compléter la Saisie des notes !! ',true,2,'phot1');
      return; 
     }
    n1=Number(Note1);
    n2=Number(Note2);
    if (n1<0 || n1>20 || n2<0 || n2>20) {
      Afficher('Attention...Vérifier la validité des notes !! ',false,-1,'phot2');
        return ;
    }
    m=(n1+n2)/2 ;
    document.getElementsByClassName("MoyenneBulletin")[i].innerHTML = m;
    if(i==0){
        document.getElementsByClassName("RésultasBulletin")[i].innerHTML = m*4 ;
        }
       else if(i==1){
            document.getElementsByClassName("RésultasBulletin")[i].innerHTML = m*3 ;
            }
            else if(i==2){
                document.getElementsByClassName("RésultasBulletin")[i].innerHTML = m*2 ;
                }
                 else if(i==3){
                    document.getElementsByClassName("RésultasBulletin")[i].innerHTML = m*3 ;
                    }
                    else if(i==4){
                        document.getElementsByClassName("RésultasBulletin")[i].innerHTML = m*2 ;
                        }
                        else if(i==5){
                            document.getElementsByClassName("RésultasBulletin")[i].innerHTML = m*2 ;
                            }
                            else if(i==6){
                                document.getElementsByClassName("RésultasBulletin")[i].innerHTML = m*1 ;
                                }
    mc+=Number(document.getElementsByClassName("RésultasBulletin")[i].innerHTML);
        if(m<4) {
            document.getElementsByClassName("ObservationBulletin")[i].innerHTML = "Très insuffisant" ;
        }
             else if(m<8) {
            document.getElementsByClassName("ObservationBulletin")[i].innerHTML = "insuffisant" ;
                 }
                    else if(m<10) {
                    document.getElementsByClassName("ObservationBulletin")[i].innerHTML = "travail insuffisant" ;
                        }
                        else if(m<12) {
                        document.getElementsByClassName("ObservationBulletin")[i].innerHTML = "Passable" ;
                        }
                       else if(m<14) {
                      document.getElementsByClassName("ObservationBulletin")[i].innerHTML = "Assez Bien" ;
                         }
                         else if(m<16) {
                         document.getElementsByClassName("ObservationBulletin")[i].innerHTML = "Bon Travail!" ;
                       }
                         else if(m<18) {
                         document.getElementsByClassName("ObservationBulletin")[i].innerHTML = "Trés Bien!" ;
                         }
                      else if(m<20) {
                      document.getElementsByClassName("ObservationBulletin")[i].innerHTML = "Félicitations!" ;
                         }
    }
    window.bdy.backgroundColor="red";
    document.getElementsByClassName("T")[0].innerHTML = mc ;
    mg=mc/17 ;
    document.getElementsByClassName("Mg")[0].innerHTML = mg.toFixed(2);
}


    function Effacer() {
        for(i=0 ; i<=6; i++) {
            document.getElementsByClassName("Nt1")[i].value="",
            document.getElementsByClassName("Nt2")[i].value="";  
            document.getElementsByClassName("MoyenneBulletin")[i].innerHTML="";
            document.getElementsByClassName("ObservationBulletin")[i].innerHTML ="";
            document.getElementsByClassName("RésultasBulletin")[i].innerHTML ="";
        }
        document.getElementById("BulletinName").value="" ;
        document.getElementsByClassName("T")[0].innerHTML="";
        document.getElementsByClassName("Mg")[0].innerHTML="";
    }














    var Table=[
        programmation=[programmationN1=[''],programmationN2=[''],programmationM=[''],programmationR=[''],programmationOb=['']],
        Bureatique=[BureatiqueN1=[''],BureatiqueN2=[''],BureatiqueM=[''],BureatiqueR=[''],BureatiqueOb=['']],
        systéme=[systémeN1=[''],systémeN2=[''],systémeM=[''],systémeR=[''],systémeOb=['']],
        contabilité=[contabilitéN1=[''],contabilitéN2=[''],contabilitéM=[''],contabilitéR=[''],contabilitéOb=['']],
        Gestion=[GestionN1=[''],GestionN2=[''],GestionM=[''],GestionR=[''],GestionOb=['']],
        CommFr=[CommFrN1=[''],CommFrN2=[''],CommFrM=[''],CommFrR=[''],CommFrOb=['']],
        CommAn=[CommAnN1=[''],CommAnN2=[''],CommAnM=[''],CommAnR=[''],CommAnOb=['']],
        resultasGénerale=[total=[''],MoyenneGénérale=['']]];
    window.BulletinListeNom.length=0;
    function Validierliste(){
        if (window.BulletinName.value=="") {
            Afficher('Veuillez saisir le Nom et Prénom de l\'Etudiant !! ',true,3,'phot1');
            return;  
        }
        var l=window.BulletinListeNom.length;
        var nom=window.BulletinName.value;
        Table[0][0][l]=window.Note1Programmation.value;
        Table[0][1][l]=window.Note2Programmation.value;
        Table[0][2][l]=window.MoyenneProgrammation.innerHTML;
        Table[0][3][l]=window.RésultasProgrammation.innerHTML;
        Table[0][4][l]=window.ObservationProgrammation.innerHTML;
        
        Table[1][0][l]=window.Note1Bureautique.value;
        Table[1][1][l]=window.Note2Bureautique.value;
        Table[1][2][l]=window.MoyenneBureautique.innerHTML;
        Table[1][3][l]=window.RésultasBureautique.innerHTML;
        Table[1][4][l]=window.ObservationBureautique.innerHTML;
       
        Table[2][0][l]=window.Note1Systéme.value;
        Table[2][1][l]=window.Note2Systéme.value;
        Table[2][2][l]=window.MoyenneSystéme.innerHTML;
        Table[2][3][l]=window.RésultasSystéme.innerHTML;
        Table[2][4][l]=window.ObservationSystéme.innerHTML;
       
        Table[3][0][l]=window.Note1Comtabilité.value;
        Table[3][1][l]=window.Note2Comtabilité.value;
        Table[3][2][l]=window.MoyenneComtabilité.innerHTML;
        Table[3][3][l]=window.RésultasComtabilité.innerHTML;
        Table[3][4][l]=window.ObservationComtabilité.innerHTML;
        
        Table[4][0][l]=window.Note1Gestion.value;
        Table[4][1][l]=window.Note2Gestion.value;
        Table[4][2][l]=window.MoyenneGestion.innerHTML;
        Table[4][3][l]=window.RésultasGestion.innerHTML;
        Table[4][4][l]=window.ObservationGestion.innerHTML;
        
    
        Table[5][0][l]=window.Note1CommunicationFr.value;
        Table[5][1][l]=window.Note2CommunicationFr.value;
        Table[5][2][l]=window.MoyenneCommunicationFr.innerHTML;
        Table[5][3][l]=window.RésultasCommunicationFr.innerHTML;
        Table[5][4][l]=window.ObservationCommunicationFr.innerHTML;
    
        Table[6][1][l]=window.Note1CommunicationAn.value;
        Table[6][0][l]=window.Note2CommunicationAn.value;
        Table[6][2][l]=window.MoyenneCommunicationAn.innerHTML;
        Table[6][3][l]=window.RésultasCommunicationAn.innerHTML;
        Table[6][4][l]=window.ObservationCommunicationAn.innerHTML;
    
        Table[7][0][l]=window.TotalNotes.innerHTML ;
        Table[7][1][l]=window.MoyenneTotalNotes.innerHTML;
    
        window.BulletinListeNom.options[l]=new Option(nom,true);
        window.BulletinName.value="";
        
        window.Note1Programmation.value="";
        window.Note2Programmation.value="";
        window.MoyenneProgrammation.innerHTML="";
        window.RésultasProgrammation.innerHTML="";
        window.ObservationProgrammation.innerHTML="";
        
        window.Note1Bureautique.value           ="";
        window.Note2Bureautique.value           ="";
        window.MoyenneBureautique.innerHTML     ="";
        window.RésultasBureautique.innerHTML    ="";
        window.ObservationBureautique.innerHTML ="";
    
        window.Note1Systéme.value          ="";
        window.Note2Systéme.value          ="";
        window.MoyenneSystéme.innerHTML    ="";
        window.RésultasSystéme.innerHTML   ="";
        window.ObservationSystéme.innerHTML="";
    
        window.Note1Comtabilité.value           ="";
        window.Note2Comtabilité.value           ="";
        window.MoyenneComtabilité.innerHTML     ="";
        window.RésultasComtabilité.innerHTML    ="";
        window.ObservationComtabilité.innerHTML="";
    
        window.Note1Gestion.value          ="";
        window.Note2Gestion.value          ="";
        window.MoyenneGestion.innerHTML    ="";
        window.RésultasGestion.innerHTML   ="";
        window.ObservationGestion.innerHTML="";
    
        window.Note1CommunicationFr.value          ="";
        window.Note2CommunicationFr.value          ="";
        window.MoyenneCommunicationFr.innerHTML    ="";
        window.RésultasCommunicationFr.innerHTML   ="";
        window.ObservationCommunicationFr.innerHTML="";
       
        window.Note1CommunicationAn.value          ="";
        window.Note2CommunicationAn.value          =""; 
        window.MoyenneCommunicationAn.innerHTML    ="";
        window.RésultasCommunicationAn.innerHTML   ="";
        window.ObservationCommunicationAn.innerHTML="";
    
        window.TotalNotes.innerHTML ="";
        window.MoyenneTotalNotes.innerHTML="";
    }
    function openListe(){
        var i=window.BulletinListeNom.selectedIndex;
        var t=window.BulletinListeNom.options[i].text;
            window.BulletinName.value=t;
        
            window.Note1Programmation.value           =Table[0][0][i];
            window.Note2Programmation.value           =Table[0][1][i];
            window.MoyenneProgrammation.innerHTML     =Table[0][2][i];
            window.RésultasProgrammation.innerHTML    =Table[0][3][i];
            window.ObservationProgrammation.innerHTML =Table[0][4][i];
        
            window.Note1Bureautique.value            =Table[1][0][i];
            window.Note2Bureautique.value          =Table[1][1][i];
            window.MoyenneBureautique.innerHTML      =Table[1][2][i];
            window.RésultasBureautique.innerHTML   =Table[1][3][i];
            window.ObservationBureautique.innerHTML  =Table[1][4][i];
         
            window.Note1Systéme.value          =Table[2][0][i];
            window.Note2Systéme.value          =Table[2][1][i];
            window.MoyenneSystéme.innerHTML    =Table[2][2][i];
            window.RésultasSystéme.innerHTML   =Table[2][3][i];
            window.ObservationSystéme.innerHTML=Table[2][4][i];
            
            window.Note1Comtabilité.value          =Table[3][1][i];
            window.Note2Comtabilité.value          =Table[3][0][i];
            window.MoyenneComtabilité.innerHTML    =Table[3][2][i];
            window.RésultasComtabilité.innerHTML   =Table[3][3][i];
            window.ObservationComtabilité.innerHTML=Table[3][4][i];
    
            window.Note1Gestion.value          =Table[4][0][i];
            window.Note2Gestion.value          =Table[4][1][i];
            window.MoyenneGestion.innerHTML    =Table[4][2][i];
            window.RésultasGestion.innerHTML   =Table[4][3][i];
             window.ObservationGestion.innerHTML=Table[4][4][i];
    
           window.Note1CommunicationFr.value           =Table[5][0][i];
           window.Note2CommunicationFr.value           =Table[5][1][i];
           window.MoyenneCommunicationFr.innerHTML     =Table[5][2][i];
           window.RésultasCommunicationFr.innerHTML    =Table[5][3][i];
            window.ObservationCommunicationFr.innerHTML=Table[5][4][i]; 
    
            window.Note1CommunicationAn.value          =Table[6][0][i];
            window.Note2CommunicationAn.value          =Table[6][1][i];
            window.MoyenneCommunicationAn.innerHTML    =Table[6][2][i];
            window.RésultasCommunicationAn.innerHTML   =Table[6][3][i];
            window.ObservationCommunicationAn.innerHTML=Table[6][4][i];
    
            window.TotalNotes.innerHTML =Table[7][0][i];
            window.MoyenneTotalNotes.innerHTML=Table[7][1][i];
    }


/*  menu c */
const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))












































