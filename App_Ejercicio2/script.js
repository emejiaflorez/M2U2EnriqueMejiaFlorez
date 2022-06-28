
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const n3 = document.getElementById("n3");
const n4 = document.getElementById("n4");

const submit = document.getElementById("submit");

submit.addEventListener("click", e => {
      e.preventDefault()
      const nums = [];
      nums.push(n1.value);
      nums.push(n2.value);
      nums.push(n3.value);
      nums.push(n4.value);
      if(Validar_Numeros(nums)){
         Calcular_Mayor_Menor(nums)
      }
})

function Calcular_Mayor_Menor(ArrNum){
  let mayor = parseInt(ArrNum[0],10);
  let menor = parseInt(ArrNum[0],10);
  
  for (let i=1 ; i<ArrNum.length ; i++){
      if (parseInt(ArrNum[i],10) > mayor ){ mayor = parseInt(ArrNum[i],10);}
      else 
      {
      if (parseInt(ArrNum[i],10) < menor ){ menor = parseInt(ArrNum[i],10);} 
      }
  }
  respuesta(mayor,"El Número Mayor Es :  ");
  respuesta(menor,"El Número Menor Es :  ");
}

function Validar_Numeros(ArrNum){
   if (n1.value=='' || n2.value=='' || n3.value=='' || n4.value==''  ) {
       excepciones("Hay Numero(s) que NO han sido ingresados. Por favor ingrese los Numeros");
       return false
   }
   if (Tiene_Repetidos(ArrNum)){
       excepciones("Existen Números Iguales. Por favor Digite Números diferentes");
       return false;
   } 
   return true ; 
}

function Tiene_Repetidos(array){
 return new Set(array).size !== array.length
}

const respuesta = (numero, mensaje) => {
      const resp = document.createElement("p");
      const espacio = document.createElement("br");
      resp.textContent = mensaje + numero ;
      resp.classList.add("resp"); 
      document.body.appendChild(resp);
      document.body.appendChild(espacio);
      
      setTimeout(()=> {
            document.body.removeChild(resp);
            document.body.removeChild(espacio);
      }, 5000)
}

const excepciones = (mensaje) => {
      const excep = document.createElement("p");
      excep.textContent = mensaje;
      excep.classList.add("excep");
      document.body.appendChild(excep);
      setTimeout(()=> {document.body.removeChild(excep)}, 3000);
}
  
