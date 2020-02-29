
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  todoArray = [];
  todo;
  todoUpdate:boolean = false;
  
  
  /* add todo */
  addTodo(value) {
    if (value !== "" && value!== " " ) {
      this.todoArray.push(value)
    }
    else {
      alert('Field required **')
    }
  }

  /*delete item*/
  deleteItem(todo) {
    this.todoUpdate = false;
    for (let i = 0; i <= this.todoArray.length; i++) {
      if (todo == this.todoArray[i]) {
        this.todoArray.splice(i, 1)
      }
    }
  }

  todoSubmit(value: any) {
    if (value.todo !== '' && value.todo !== ' ' ) {
      this.todoArray.push(value.todo) 
    } else {
      alert('Field required **')
    }
  }

}




