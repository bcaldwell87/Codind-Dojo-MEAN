import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { Task } from './task';
import { TmplAstElement } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Restful Tasks Continued';
  tasks: Task[] = [];
  task: Task;
  description: string;
  newTask: any;
  editTask: any;

  constructor(private _HTTPSERVICE: HttpService) {}
  ngOnInit() {
    this.newTask = { title: '', description: '', completed: '' };
    this.editTask = { _id: '', title: '', description: '' };
  }

  onButtonClick(): void {
    const observable = this._HTTPSERVICE.getTasks();
    observable.subscribe(data => {
      console.log('Got your data', data);
      this.tasks = data;
    });
  }

  showTask(TASK_ID: string) {
    console.log('task_id');
    const observable = this._HTTPSERVICE.getTask(TASK_ID);
    observable.subscribe(data => {
      console.log('got one task', data);
      this.task = data;
    });
  }
  onSubmit() {
    const observable = this._HTTPSERVICE.addTask(this.newTask);
    observable.subscribe(data => {
      console.log('Got some data!', data);
    });
    this.newTask = { title: '', description: '' };
  }
  onEditTaskSubmit(editTask: Task) {
    this._HTTPSERVICE.updateTask(editTask).subscribe(data => {
      this.tasks = this.tasks.map(currentTask =>
        currentTask._id === data._id ? data : currentTask
      );
      console.log('task has been updated', data);
    });
  }
  onEditTask(task: Task) {
    this.editTask = task;
    // this.editTask = {
    //   _id: task._id,
    //   title: task.title,
    //   description: task.description,
    //   completed: task.completed
    // };
    console.log('selecting', this.editTask);
  }
  onDelete(task: Task) {
    console.log(task._id);
    this._HTTPSERVICE.deleteTask(task._id).subscribe(data => {
      this.tasks = this.tasks.filter(
        currentTask => currentTask._id !== data._id
      );
      // for (let i = 0; i < this.tasks.length; i++) {
      //   const currentTask = this.tasks[i];
      //   if (currentTask._id === data._id) {
      //     this.tasks.splice(i, 1);
      //     console.log("spliced!");
      //   }
      //   console.log(this.tasks);
      // }
    });
  }
}
