import { Component,  signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('To-do-List');

  task: string = "";
  taskList: { id: number, task: string }[] = [];

  addTask(){
    this.taskList.push({id:this.taskList.length+1,task:this.task});
    this.task="";
  }

  deleteTask(idx:number){
    this.taskList=this.taskList.filter((item)=>item.id!=idx);
    
    
  }
}
