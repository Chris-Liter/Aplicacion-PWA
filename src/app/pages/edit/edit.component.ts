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
        this.loadPersona(params['id'])
      }
    })
  }

  loadPersona(uid: string){
    this.db.getTarea(uid).subscribe(data => {
      console.log(data)
      this.task = <any>data
    })
  }
  modify(){
    this.db.modifyTarea(this.task)
    this.task = new Task()
    this.router.navigate(['/pages/list'])
  }
}
