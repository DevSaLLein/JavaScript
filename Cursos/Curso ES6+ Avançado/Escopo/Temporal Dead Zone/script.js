
/* U N D E F I N E D ==> { 
-> Dá undefined porque o JS faz meio que uma 'varredura' no código      ^
assim descobrindo descobrindo a variável NAME, porém o JS não sabe o    |
há dentro dessa variável                                                |    
                                                                        |
console.log(name);                                                      |
var name = 'Isaac';                                                     |       
                                                                        |    
}*/                                                                                                                                         



/* [E R R O R] ==> {                                                     ^   
-> Diferente do VAR o JS nao 'varre' as constantes                       | 
                                                                         |   
console.log(name);                                                       |
const name = 'Isaac';                                                    |  
                                                                         |
}*/



