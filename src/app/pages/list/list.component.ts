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
  
  tareas: Task[] = []
  tarea: Task = new Task()
  constructor(private db: CrudService, private router: Router, private act: ActivatedRoute){
    
  }

  
  

  ngOnInit(): void {
    this.db.getTareas().subscribe((data: any) => {
      this.tareas = data;
    });
  }
  
  modify(tarea: Task) {
    
    this.router.navigate(['/pages/edit', tarea.uid]), {queryParams: {data: JSON.stringify(tarea)}}; // Redirigir a la página de edición
  }
  
  deleted(tarea: Task){
    var uid = tarea.uid
    if(uid){
      this.db.delete(uid)
    }
  }
}
