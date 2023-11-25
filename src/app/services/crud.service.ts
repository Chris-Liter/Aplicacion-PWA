import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/compat/firestore';
import { Task } from '../Modelo/Task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private path = '/works'

  referencia: AngularFirestoreCollection<any>
  constructor(private fire: AngularFirestore) { 
    this.referencia = fire.collection(this.path)
  }

  getTareas(){
    return this.referencia.valueChanges()
  }
  getTarea(uid: string){
    console.log('uid', uid)
    return this.fire.doc(this.path + '/' + uid).valueChanges()
   }
  saveTarea(tarea: Task){
    const uid = this.fire.createId()
    tarea.uid = uid
    this.referencia.doc(uid).set(Object.assign({}, tarea))
  }

  modifyTarea(tarea: Task): void{
    this.fire.collection('works').doc(tarea.uid).update(tarea)
   }

   delete(id: string){
    this.fire.collection('works').doc(id).delete()
   }

}
