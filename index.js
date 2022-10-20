let amigos=[];

let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");


  


let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}
function pintar(){
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto,index)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}" />Detalles</button>
                                                  <button class="eliminarContacto"indice=${index}">Borrar</button>`;
            lista.appendChild(amigo);
        });
        let botones=document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click",()=>{
                showDetalles(element.children[0].value);

            });
        }
        botones=document.getElementsByClassName("eliminarcontacto");
        for (let i =0; i< botones.length; i++){
            const element =botones[i];
            element.addEventListener("click",()=>{
                amigo.splice(element.getAttribute("click",()=>{

                }))
            })
        }
    }



    else{
        lista.innerHTML="<h2>No tenemos amigos</h2>";
    }
}

function showDetalles(tel){
    let Detalles=document.getElementById("detallesAmigo");
    let amigo=amigos.find(a=>{
        if(a.telefono==tel){
            return a;

        }
    });
   Detalles.innerHTML=`<img src="${amigos.foto}" alt="">
    <h3>${amigos.nombre}</h3>
   <p><span>Telefono:</span>${amigo.foto}</p>
   <p><span>correo:</span>${amigo.correo}</p>
     <button>cerrar</button>`;
    Detalles.classList.remove("ocultar"); 
}



btnCancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();
});
// para mandar a llamar
 btnGuardar.addEventListener("click",(event)=>{
let contacto={
    nombre:formulario["nombre"].value,
    telefono:formulario["telefono"].value,
correo:formulario["correo"].value,
foto:formulario["foto"].value,
};
amigos.push(contacto);
limpiar();
pintar();
event.preventDefault();

 });
