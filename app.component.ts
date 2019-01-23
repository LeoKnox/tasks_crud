import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    newTask: any;
    reTask: any;
    tasks: any = [];
    change: any = [];

    constructor(private _httpService: HttpService){}

  ngOnInit(){
    //this.getTasksFromService();
    this.newTask = { title: "", description: "" }
    this.reTask = { title: "", description: "" }
    this._httpService.getTasks().subscribe(data => {
      console.log("Got our tasks!", data);
      this.tasks = data;
    })
  }

  onSubmit() {
    this._httpService.addTask(this.newTask)
      .subscribe(added => {
        console.log(`added ${added}`);
      })
    this.newTask = { title: "", description: "" }
  }
  
  getTasksFromService(){
    this._httpService.getTasks().subscribe(data => {
      console.log('Got our tasks!', data);
      this.tasks = data;
    })
    /*this._httpService.getOne(id).subscribe(uno => {
      console.log("Got one task", uno);
      this.change = uno;
    })*/
  }

  updateSubmit(id: String) {
    this._httpService.changeTask(id, this.reTask)
      .subscribe(upsy => {
        console.log('updated', upsy);
      });
  }

  deleteButton(id: String) {
    this._httpService.deleteTask(id)
      .subscribe(del => {
        console.log(del);
      });
  }

  editButton(id: String) {
    console.log('id = ' + id)
    this.reTask = { title: "", description: ""}
    this._httpService.getOne(id).subscribe(uno => {
      this.reTask=uno;
      this.change = uno;
    })
    console.log(this.reTask)
  }
}

