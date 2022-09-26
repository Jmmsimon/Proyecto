import { Component, OnDestroy, OnInit } from '@angular/core';

interface Task {
  done: boolean,
  title: string
}

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent implements OnInit, OnDestroy {

  title = 'Mis Tareas 2';

  tasks: Array<Task> = [];

  inputTask = 'Nueva tarea';

  constructor() {
  }

  ngOnInit(): void {
    this.tasks.push({ title: 'Comprar gomitas', done: false});
    this.tasks.push({ title: 'Conseguir dinero para las gomitas', done: true});

  }

  ngOnDestroy() {

  }

  addTask() {
    this.tasks.push({ title: this.inputTask, done: false});
  }

  deleteTask(task: Task) {
    if(confirm('seguro de eliminar este dato?')){
      // esta linea identifica al index a partir de la condicion, retorna el índice
      const index = this.tasks.findIndex( task_ => task.title == task_.title )
      //esta funcion borra un elemento del array a partir de un índice y la cantidad de elementos a borrar
      this.tasks.splice( index, 1)
    };
  }
}
