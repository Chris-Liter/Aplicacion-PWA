import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/Modelo/Task';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  task: Task = new Task()
  

  constructor(private route: ActivatedRoute, private db: CrudService, private router: Router){
    this.route.params.subscribe(params => {
      console.log(params)
      if(params['id']){
        this.loadTask(params['id'])
      }
    })
  }
/**
 * Este metodo cargara el objeto de la coleccion que se quiere editar
 */
  loadTask(uid: string){
    this.db.getTarea(uid).subscribe(data => {
      console.log(data)
      this.task = <any>data
    })
  }
  /**
   Tarea entera que se va a editar con el metodo creado en el Servicio CrudService
   */
  modify(){
    this.db.modifyTarea(this.task)
    this.router.navigate(['/pages/list'])
  }
}
