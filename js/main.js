function produit(titre, accroche, description){
	    this.titre=titre;
	    this.accroche=accroche;
	    this.description=description;
	    this.fichprod= function(){ return  "le produit est: "+ this.titre +"  , il est  "+
	    								this.accroche+"  c'est un  "+this.description+".";				

	                  };

        }


function envoyer(){
           
       var titreProduit= document.getElementById("titre").value;
      
      var accrocheProduit= document.getElementById('phrase').value;
       var descriptionProduit= document.getElementById('description').value;
            console.log("titre,"+titreProduit);
	
        var produitx=new produit(titreProduit, accrocheProduit, descriptionProduit);
        console.log(produitx.fichprod());

        var ficheproduit= document.getElementById("froduit");
         var  paragproduit = document.createElement("p");
          ficheproduit.appendChild(paragproduit);
          
          
         paragproduit.textContent=produitx.fichprod();
       
         document.getElementById("titre").value="";
         document.getElementById('phrase').value=""; 
         document.getElementById('description').value="";
  }     





