window.onload = function(){
  
   h1 = document.getElementById("h1");
   h1.style.color = "blue";
   
   div = document.getElementsByTagName("div")[0];
   //alert(div)
  //alert(div.parentNode)
 // alert(div.childNodes);
 
 /*
 var ul = div.childNodes.item(0);
  alert(ul.nodeType);
 */

 /*
 li = document.createElement("li");
 li.appendChild(createTextNode("TESTEEEE"));
 div.firstChild.appendChild(li);
 */

 //criando um select
 var select = document.createElement("select");
 select.setAttribute("id" , "estados");

 //criando uma opção
 var op = document.createElement("option");
 op.setAttribute( "id" ,"DF" );
 op.appendChild(document.createTextNode("Distrito Federal"));

 //implementando a primeira opção na select
 select.appendChild(op);

 // clonando a opcao criada anteriormente, porem 'false' para criar o seus child nodes
 var op2 = op.cloneNode(false);
 op2.setAttribute("id" , "CE");
 op2.appendChild(document.createTextNode("Ceará"));

 //implementando a segunda opção na select
 select.appendChild(op2)

 //implementando toda a estrutura select na div
 div.appendChild(select);
}
