import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Route, Router } from '@angular/router';
import { Task } from 'src/app/Modelo/Task';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  
/**
 * Los metodos de eliminar y modificar se llamaran en el listado, osea, por cada elemento de la coleccion de Firebase, abra un boton eliminar y un boton modificar
 * donde dentro de cada metodo se llama a la clase que se esta listando
 * En el listado se utiliza un *ngFor= "let i of tareas" para listar toda la coleccion, y a su vez se manda el metodo modify(i) y deleted(i) para mandar la clase
 * entera del listado, teniendo cada elemento de la lista su propio boton Eliminar y Editar
 */

  tareas: Task[] = []
  tarea: Task = new Task()
  constructor(private db: CrudService, private router: Router, private act: ActivatedRoute){
    
  }

  /**
   Usaremos el motodo OnInit, que se ejecutara despues de que angular
   haya iniciado todas las propiedades vinculadas en un componente
   */
  ngOnInit(): void {
    this.db.getTareas().subscribe((data: any) => {
      this.tareas = data; 
      // this.tareas es un arreglo declarado al inicio de esta clase que sera usado para exponer dentro de el los datos guardados en la coleccion
    });
  }
  
  modify(tarea: Task) {
    
    this.router.navigate(['/pages/edit', tarea.uid]), {queryParams: {data: JSON.stringify(tarea)}}; // Redirigir a la página de edición
    //{queryParams: {data: JSON.stringify(tarea)}} es una configuracion de enrutamiento de angular para pasar parametros de una consulta a una ruta
  }
  
  /*
  El eliminar agarra la clase Task completa, y solo se extraera el uid para eliminarlo
  */
  deleted(tarea: Task){
    var uid = tarea.uid
    if(uid){
      this.db.delete(uid)
    }
  }
}
