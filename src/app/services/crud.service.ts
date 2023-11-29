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

   /*
   Se crea el uid para identificar el objeto que se va a guardar en Firestore
   y se guarda en this.referencia.doc(uid).set(Object.assign({}, tarea)) se guarda como tal la nota que se crea
   */
  saveTarea(tarea: Task){
    const uid = this.fire.createId()
    tarea.uid = uid
    this.referencia.doc(uid).set(Object.assign({}, tarea))
  }

  /**
   Se llama un collection con el nombre de la coleccion de Firebase, en mi caso tiene nombre de works
   Posteriormente un .doc donde mandamos un tarea.uid para identificar la tarea que se quiere modificar
   y el .update con la tarea entera ya editada
   */
  modifyTarea(tarea: Task): void{
    this.fire.collection('works').doc(tarea.uid).update(tarea)
   }

   /*
    LLamamos un collection nuevamente con el nombre de la coleccion works, luego un .doc con el id que vendria a ser el uid del objeto, 
    y un .delete final para eliminar el objeto guardado en la coleccion.
   */
   delete(id: string){
    this.fire.collection('works').doc(id).delete()
   }

}
