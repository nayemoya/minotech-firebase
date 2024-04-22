import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import Curso from '../interfaces/curso.interface';
import { Usuario } from '../interfaces/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(private firestore: Firestore) { }
  
  addCurso(curso: Curso){
    const cursoRef = collection(this.firestore, 'cursos');
    return addDoc(cursoRef, curso);
  }

  obtenerCursos(): Observable<Curso[]>{
    const cursoRef = collection(this.firestore, 'cursos');
    return collectionData(cursoRef, { idField: 'id' }) as Observable <Curso[]>;
  }

  eliminarCurso(curso: Curso){
    const cursoDocRef = doc(this.firestore, `cursos/${curso.id}`);
    return deleteDoc(cursoDocRef);
  }

  createDoc(data: any, path: string, id: string){
    const coleccion = collection(this.firestore, path);
    return addDoc(coleccion, data)
  }

  getDatos(data: any, path: string){
    const coleccion = collection(this.firestore, path);
    return collectionData(coleccion, data)
  }
}

