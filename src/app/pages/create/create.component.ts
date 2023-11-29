import { Component } from '@angular/core';
import { Task } from 'src/app/Modelo/Task';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  task: Task = new Task()

  constructor(private fire: CrudService){

  }

  /*
  Se llama al servicio para guardar la nota
  */
  save(){
    this.fire.saveTarea(this.task)
    this.task = new Task()
  }

  

}
