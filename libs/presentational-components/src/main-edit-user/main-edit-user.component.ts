import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-edit-user',
  templateUrl: './main-edit-user.component.html',
  styleUrls: ['./main-edit-user.component.scss']
})
export class MainEditUserComponent implements OnInit {
  @Input() form: FormGroup;
  @Output()
  formSubmit: EventEmitter<{
    value: UserModel;
    valid: boolean;
  }> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  submit(event) {
    this.formSubmit.emit(event);
  }
}
