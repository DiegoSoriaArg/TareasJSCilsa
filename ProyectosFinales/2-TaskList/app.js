document.getElementById("formTask").addEventListener("submit", guardarTarea);

function guardarTarea(e){
    let titulo = document.getElementById("title").value;
    let descripcion = document.getElementById("description").value;

    const tarea = {
        titulo,
        descripcion
    };

    if(localStorage.getItem("tareas") === null){
        let tareas = [];
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    } else {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        tareas.push(tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    obtenerTarea();

    document.getElementById("formTask").reset();

    e.preventDefault();
}

function eliminarTarea(titulo) {
  let tareas = JSON.parse(localStorage.getItem("tareas"));
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].titulo == titulo) {
      tareas.splice(i, 1);
    }
  }

  localStorage.setItem("tareas", JSON.stringify(tareas));
  obtenerTarea();
}

function obtenerTarea(){
    let tareas = JSON.parse(localStorage.getItem("tareas"));
    let vistaTarea = document.getElementById('tareas');

    vistaTarea.innerHTML = '';
    for(let i = 0; i < tareas.length; i++){
        let titulo = tareas[i].titulo;
        let descripcion = tareas[i].descripcion;

        vistaTarea.innerHTML += `<div class="card mb-3">
        <div class="card-body">
            <p>${titulo} - ${descripcion}
            <a href="#" onclick="eliminarTarea('${titulo}')" class="btn btn-danger ml-5">Eliminar</a>
            </p>
        </div>
        </div>`;
    }
}

obtenerTarea();