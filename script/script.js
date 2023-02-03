function start(){
  let parent=document.querySelector('.menu');
  let childre=parent.children;
for(let i=0;i<childre.length;i++ ){

  childre[i].classList.add('desativado');
   console.log(childre[i].classList);

}

let imagens=document.querySelectorAll('[src^="./img"]');
console.log(imagens);
let arrayImagens=Array.from(imagens);
console.log(arrayImagens);
 arrayImagens.filter((value)=>{
   if(value.getAttribute("alt")){
    console.log(value.getAttribute("alt"));
     

   }
   else{
    value.setAttribute("alt","teste");
    console.log(value.getAttribute.value);
  
   }
   

 });

 let mLink=document.querySelector('[href^="#"]');
    mLink.setAttribute("href","https://www.google.com.br");
    console.log(mLink.getAttribute("href"));




  
  


}
  // let menu=document.querySelectorAll('img');
  // console.log(menu);

  // let links = document.querySelectorAll('[href^="#"]');
  // console.log(links);

  // let imagensQueComecam =document.querySelectorAll('[src^="./img/imagem"]');
  // console.log(imagensQueComecam);

  // let meuArray= Array.from(imagensQueComecam);

  // meuArray.forEach(function(value,index){
  //   console.log(value,index);
  // })

  // let primeiroH2=document.querySelector(".container-description h2");
  // console.log(primeiroH2);

  // // primeiroH2.innerHTML="Elefante";

  // let ultimoP=document.querySelector("p:last-of-type");
  // console.log(ultimoP);
  // ultimoP.innerHTML="Eu sou o utimo p"









