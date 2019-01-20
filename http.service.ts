import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {}
  
  getTasks(){
    console.log('inside http service')
    return this._http.get('/tasks');
  }

  getOne(id){
    console.log('whatever' +  id)
    return this._http.get(`/tasks/${id}`)
  }

  addTask(newtask){
    return this._http.post('/tasks/', newtask)
  }

  changeTask(id, reTask){
    return this._http.put(`/tasks/${id}`, reTask)
  }

  deleteTask(id){
    return this._http.delete(`/tasks/${id}`)
  }
}
