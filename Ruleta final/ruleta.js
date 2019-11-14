
        var pmuertos = document.getElementById('pMuertos');
        equipo = ["Elena", "Diana", "Santiago", "Maelly", "Magdalena", "Juana", "Víctor", "Hanan", "Yesid", "Belén", "Ernesto", "Yoana", "Yeison", "Karen", "Marilyn", "Daniel", "Lali", "María", "Jaime", "Gema", "Erick", "Aliona", "Esther", "Rodrigo"];
        sacrificios = [];
        var ataud;
        var sarcofago;  
        var breset = document.getElementById('reset');
        var bataud = document.getElementById('Ataud');


        function fruleta() {
           document.getElementById('ruleta2').style.animation =  "gira infinite ease";

            ataud = localStorage.getItem(sarcofago);
            
            if (ataud != null) {
            sacrificios = ataud.split(',');
            }
            
            do {
                var muerto = Math.floor(Math.random() * equipo.length);
                
            } 
              while (sacrificios.includes(muerto) == true)

            sacrificios.push(equipo[muerto]);
            alert(equipo[muerto]+"  "+muerto);
            pmuertos.innerHTML = sacrificios;
            localStorage.setItem(sarcofago,sacrificios.toString());
            if (sacrificios.length == 24){
                alert ("Están todos bien muertos");
                document.getElementById('button').disabled = true;
            }
        }

     function forense() {
        alert(localStorage.getItem(sarcofago));
     }

      function freset() {
        localStorage.clear();
     }

    
   
     
     

        

     