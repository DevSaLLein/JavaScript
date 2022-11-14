window.onload = function() {
    document.getElementById("button").onclick = function(){
        requisitar("https://www.amazon.com.br/?&tag=hydrbrabk-20&ref=pd_sl_8qa725equ7_e&adgrpid=79547423725&hvpone=&hvptwo=&hvadid=591863875878&hvpos=&hvnetw=g&hvrand=15498472650676384487&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001538&hvtargid=kwd-296458785041&hydadcr=26346_11691057&gclid=EAIaIQobChMIh9WilLmc-gIVAWuRCh3m0AnbEAAYASAAEgJtOfD_BwE")
    }
    function carregando(c){
        while(c.hasChildNodes()){c.removeChild(c.lastChild);}
        var img = document.createElement("img");
        img.setAttribute("src" , "loading.gif");
        c.appendChild(img);
    }
    function iniciarAjax(){
        ajax = null;
        if(window.XMLHttpRequest) {
            ajax = new XMLHttpRequest();
        }else if(window.ActiveXObject){
            try {
                ajax = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }

        }
        return ajax;
    }

    function mostrar(ajax){
        r = document.getElementById("resposta");
        while(r.hasChildNodes()){r.removeChild(r.lastChild);}
      //  var txt = new XMLHttpRequest();
      //  r.appendChild(document.createTextNode(txt))

      alert(ajax.responseText)
    }
    
    function requisitar(url){
        ajax = iniciarAjax();
        carregando(document.getElementById("resposta"));
         ajax.onreadystatechange = function(){
            if(ajax.readyState == 4){
                mostrar(ajax);
            }
         }
         ajax.open("POST" , url);
         ajax.send(null);
    }
}
