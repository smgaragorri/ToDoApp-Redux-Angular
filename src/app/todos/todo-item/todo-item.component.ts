import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: ToDo;
  @ViewChild('inputPhysical') txtInputPhysical: ElementRef;

  checkCompleted: FormControl;
  textInput: FormControl;
  textEdit: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.checkCompleted = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);
    this.checkCompleted.valueChanges.subscribe((valor) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  edit() {
    this.textEdit = true;
    this.textInput.setValue(this.todo.text);
    setTimeout(() => {
      this.txtInputPhysical.nativeElement.select();
    }, 1);
  }
  finishEdit() {
    this.textEdit = false;

    if (this.textInput.invalid) {
      return;
    }
    if (this.textInput.value === this.todo.text) {
      return;
    }
    this.store.dispatch(
      actions.edit({
        id: this.todo.id,
        text: this.textInput.value,
      })
    );
  }

  remove() {
    this.store.dispatch(
      actions.remove({
        id: this.todo.id,
      })
    );
  }
}
