import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-new-user',
  templateUrl: './main-new-user.component.html',
  styleUrls: ['./main-new-user.component.scss']
})
export class MainNewUserComponent implements OnInit {
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
