import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private _HTTP: HttpClient) {
    this.getTasks();
  }
  getTasks(): Observable<Task[]> {
    return this._HTTP.get<Task[]>('/tasks');
    // // our http response is an Observable, store it in a variable
    // const tempObservable = this._HTTP.get('/tasks');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }
  getTask(TASK_ID): Observable<Task> {
    console.log('ID is', TASK_ID);
    return this._HTTP.get<Task>('/tasks/' + TASK_ID);
  }
  addTask(newtask) {
    return this._HTTP.post('/create', newtask);
  }
  updateTask(editTask: Task): Observable<Task> {
    return this._HTTP.put<Task>(`/update/${editTask._id}`, editTask);
  }
  deleteTask(TASK_ID: string): Observable<Task> {
    console.log('deleting' + TASK_ID);
    return this._HTTP.delete<Task>(`/remove/${TASK_ID}`);
  }
}
