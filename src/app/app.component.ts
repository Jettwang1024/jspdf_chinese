import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { TODO } from './@models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'abcdefg';
  check_all_BTN = false;
  placeho = '请输入代办事项';
  todolist = this.todoService.todolist;

  constructor(private todoService: TodoDataService) {}

  btnFn(event: MouseEvent): void {
    alert('警告');
  }

  select_all(): void {
    this.check_all_BTN = !this.check_all_BTN;
    this.todoService.toggleAll(this.check_all_BTN);
  }

  Select_one(index: number): void {
    this.todoService.toggleStatus(index);
  }

  delete(index: number): void {
    this.todoService.deleteTodoItem(index);
  }

  add(inputValue: string): void {
    this.todoService.addTodoItem({ Status: false, Thing: inputValue, Editing: false });
  }

  edit(item: TODO): void {
    item.Editing = true;
  }

  update(item: TODO, value: string): void {
    const todos = this.todoService.getTodoListSync();
    const index = todos.indexOf(item);
    if (index > -1) {
      this.todoService.updateTodoItem(index, value);
    }
  }
}
