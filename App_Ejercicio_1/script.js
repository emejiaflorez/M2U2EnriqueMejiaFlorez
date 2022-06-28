//BD.Estudiantes Inscritos y Materias a Matricular
const ins = [
    {id:85437861, nombre:"Enrique Mejia Florez"},
    {id:39017682, nombre:"Claudia Castro Gonzalez"},
    {id:1001, nombre:"Clayen Mejia Castro"},
    {id:1002, nombre:"Valentina Mejia Castro"},
    {id:1003, nombre:"Profe Stiwar"}
 ];
const mat = [
    {id:1, nombre:"Informatica I", valor:5000},
    {id:2, nombre:"Matematica I", valor:4000},
    {id:3, nombre:"Algoritmo I", valor:7000},
    {id:4, nombre:"Algebra Lineal",valor:2500},
    {id:5, nombre:"Historia de la Computacion",valor:4500}
 ];
 
 const costoFijo= {papeleria:20000, carnet:8000};
 const descuento = 20;

const cargar_Asignaturas=()=> {
   const select = document.getElementById("select");
   for (let i = 0; i < mat.length; i++){
      const option = document.createElement('option');   
      option.value = mat[i].id;
      option.text  = mat[i].nombre;
      select.appendChild(option);
   }
}   

cargar_Asignaturas();

const buscarEstudiante  = document.getElementById("Buscar");
const adicionarMateria  = document.getElementById("Mas");
const calcularMatricula = document.getElementById("Calcular");

const traer_Estudiante=(idEst)=> {
   const result = ins.find(e => e.id == idEst);
   document.getElementById("NomEst").value = result.nombre;
}   

buscarEstudiante.addEventListener("click", e => {
      e.preventDefault()
      const idEst = document.getElementById("idEst");
      traer_Estudiante(idEst.value);
})

adicionarMateria.addEventListener("click", e => {
   e.preventDefault()
   const nombreMat = document.createElement ("p");
   nombreMat.classList.add("matmat");
   const idMat=document.getElementById('select').value;
   nombreMat.textContent = traerDatosMateria(idMat);
   document.body.appendChild(nombreMat)
})

let valorNeto=0;
let valorDscto=0;
let arrMatMat=[];

const traerDatosMateria=(idMat)=>{
   const datos = mat.find(e => e.id == idMat);
   console.log(datos)
   valorNeto = valorNeto + datos.valor ;
   arrMatMat.push(datos.id) ;
   return "Asignatura : " + datos.nombre + " | Costo : " + "$ " + datos.valor ;
}

calcularMatricula.addEventListener("click", e => {
   e.preventDefault();

   const vlrNetoMat = document.createElement ("p");
   vlrNetoMat.classList.add("matmat1");
   vlrNetoMat.textContent = "(=) Neto Matricula : $ " + valorNeto;
   document.body.appendChild(vlrNetoMat);

   valorDscto= (valorNeto*20)/100
   
   const vlrDsctoMat = document.createElement ("p");
   vlrDsctoMat.classList.add("matmat");
   vlrDsctoMat.textContent = "(-) Descuento 20% : $ " + valorDscto;
   document.body.appendChild(vlrDsctoMat);

   const valorPapel = costoFijo.papeleria;

   const vlrPapel = document.createElement ("p");
   vlrPapel.classList.add("matmat");
   vlrPapel.textContent = "(+) Total Papeleria : $ " + valorPapel;
   document.body.appendChild(vlrPapel);
   
   const valorCarnet = costoFijo.carnet;

   const vlrCarnet = document.createElement ("p");
   vlrCarnet.classList.add("matmat");
   vlrCarnet.textContent = "(+) Total Carnetizacion : $ " + valorCarnet;
   document.body.appendChild(vlrCarnet);

   const totalMatricula =  valorNeto-valorDscto+valorPapel+valorCarnet ;

   const vlrMatricula = document.createElement ("p");
   vlrMatricula.classList.add("matmat1");
   vlrMatricula.textContent = "(=) TOTAL MATRICULA : $ " + totalMatricula;
   document.body.appendChild(vlrMatricula);


})





