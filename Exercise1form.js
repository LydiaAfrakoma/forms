
function validateform(){
    /*validation du champs civilité,nom.email,prénom,photo,téléphone*/
    inputs=new Array("Civilité, Nom,E-mail,Prénom,Photo,Téléphone");
  for(i=0;i<inputs.length;i++){
    if((document.getElementById(i).value).trim()==""){
      alert(" champ est vide.veuillez le remplir" +inputs[i]);
      return false;
    }
  }

 /* validation du champ text*/
  if(document.getElementById(6).checked==false )
  {
    alert("veuillez cocher la case");
    return false;
  }
}