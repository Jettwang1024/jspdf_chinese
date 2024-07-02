import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TODO } from './@models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  [x: string]: any;
  private todolistSource = new BehaviorSubject<TODO[]>([
    { Status: true, Thing: '第一件事', Editing: false },
    { Status: false, Thing: '第二件事', Editing: false },
    { Status: false, Thing: '第三件事', Editing: false }
  ]);

  getTodoListSync(): TODO[] {
    return this.todolistSource.value;
  }
  getTodoList(): TODO[] {
    return this.todolistSource.value;
  }

  // 公开Observable供组件订阅
  todolist = this.todolistSource.asObservable();

  constructor() { }

  // 添加待办事项
  addTodoItem(item: TODO): void {
    this.todolistSource.next([...this.todolistSource.value, item]);
  }

  // 根据索引删除待办事项
  deleteTodoItem(index: number): void {
    const updatedList = this.todolistSource.value.filter((_, i) => i !== index);
    this.todolistSource.next(updatedList);
  }

  // 切换待办事项的状态
  toggleStatus(index: number): void {
    const updatedList = this.todolistSource.value.map((item, i) => {
      if (i === index) {
        return { ...item, Status: !item.Status };
      }
      return item;
    });
    this.todolistSource.next(updatedList);
  }

  // 更新待办事项内容
  updateTodoItem(index: number, newValue: string): void {
    const updatedList = this.todolistSource.value.map((item, i) => {
      if (i === index) {
        return { ...item, Thing: newValue, Editing: false };
      }
      return item;
    });
    this.todolistSource.next(updatedList);
  }

  // 切换所有待办事项的状态
  toggleAll(status: boolean): void {
    const updatedList = this.todolistSource.value.map(item => ({ ...item, Status: status }));
    this.todolistSource.next(updatedList);
  }
}
