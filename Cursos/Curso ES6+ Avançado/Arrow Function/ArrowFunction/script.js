/* 
   F U N C T I O N  
     P A D R Õ E S() {

     const ireland = ['Dublin' , 'Galway' , 'Cork'];
     const love = ireland.map(function(name) {
        return `I love ${name}`;
     });

     console.log(love);
--------------------------------------------> 
}*/

/* 
    A R R O W 
        F U N C T I O N S => {

    const ireland = ['Dublin' , 'Galway' , 'Cork'];
    const love = ireland.map(name => `I love ${name}!`);

    console.log(love);

    --> Como a função so recebe um parâmetro, 
    não precisa dos ();
    --> Como é apenas uma única linha, não
    precisa das {}, nem do RETURN; 
--------------------------------------------->
            M É T O D O S
                E N C A D E A D O S

    const ireland = ['Dublin' , 'Galway' , 'Cork'];
    const love = ireland
        .filter(name => name === 'Galway')
        .map(name => `I love ${name}!` )
        
    console.log(love)
}*/