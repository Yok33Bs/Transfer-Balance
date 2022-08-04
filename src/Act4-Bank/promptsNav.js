let principalMenu = 0 ;

for(;;){

    
    if( principalMenu == 0){
        principalMenu = parseInt(prompt('1.-Ingresar usuario \n2.-Realizar transferencias entre usuarios\n3.- Mostrar usuarios \n4.-Terminar ejecución')) ;
    };
    if(principalMenu == 1){
        logginUser(prompt('Usuario:'));
        principalMenu = 0;

    }
    else if(principalMenu == 2) {
        transfer()
        principalMenu = 0; 
    }
    else if(principalMenu == 3) {
        alert(showUser());
        principalMenu = 0; 
    }
    else if(principalMenu == 4) {
        console.log("Fin....");break  ; 
    } else {
        principalMenu = 0 ;  
        break ;
    }
};


