const PI = (3,141592);

function functionB (){
    let a = window.prompt('valor de A')
    a = Number(a)

    let b = window.prompt('valor de B')
    b = Number(b)

    let c = window.prompt('valor de C')
    c = Number(c)
    var coeficiente1;
    var coeficiente2
    var delta = (b*b)-4*a*c;
    if(delta < 0){
        alert('o seu delta é negativo,resultado do delta:' + delta)
    }else{
      
		  coeficiente1 = (-b + Math.sqrt(delta)) / (2 * a);
		  coeficiente2 = (-b - Math.sqrt(delta)) / (2 * a);
        alert("esse é o x1:" + coeficiente1 + " esse é o x2:" + coeficiente2)    
    }
}
function functionR(){
    var r = window.prompt('digite o valor do número')
    r = Number(r)
    if(r <= 0){
        alert('sem raiz')
    }else{
    var rel = Math.sqrt(r)
    alert('a raiz quadrada de ' + r + ' é ' + rel)
    }
}
function functionC (){
    
    var Radius;

    Radius = window.prompt("digite o radius")
    Radius = Number(Radius)
    
    var circu = 2 * Math.PI * Radius
    alert("sua circunferencia é " + circu) 
}
function functionVM(){
    var deslocamentoI = window.prompt('qual seu deslocamento inicial')
    deslocamentoI = Number(deslocamentoI) 
    var deslocamentoF = window.prompt('qual seu deslocamento final')
    deslocamentoF = Number(deslocamentoF)  
    var tempoI = window.prompt('qual seu tempo inicial')
    tempoI = Number(tempoI) 
    var tempoF= window.prompt('qual seu tempo final')
    tempoF = Number(tempoF) 
    var relD = deslocamentoF - deslocamentoI 
    var relT = tempoF - tempoI 
   if(relD == 0){
    let VM = window.prompt('digite a vlocidade escalar media')
    let relDD = VM * relT
    alert("o valor do deslocamento é " + relDD)
   }else{
    let relF = relD/relT
   alert(relF)
   }
   if(relT == 0){
    let VM = window.prompt('digite a velocidade escalar media')
    let relTT = relD/VM
    alert("o valor da variacao do tempo é " + relTT)
   }else{
   let relF = relD/relT
   alert(relF)
}
}
function functionTRAS(){
    let KM = document.getElementById("translateKM").value
    KM = Number(KM)
    let MS = document.getElementById("translateMS").value
    MS = Number(MS)
    let KMMS = KM / (3,6)
    let MSKM = MS * (3,6)
    document.write(KM)
    var input = document.querySelector("translateKM").value
alert('ue?')

}
var input = document.querySelector("translateKM").value
alert('ue?')
