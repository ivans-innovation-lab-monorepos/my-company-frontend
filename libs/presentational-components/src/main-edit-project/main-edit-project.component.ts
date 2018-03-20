import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProjectModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-edit-project',
  templateUrl: './main-edit-project.component.html',
  styleUrls: ['./main-edit-project.component.scss']
})
export class MainEditProjectComponent implements OnInit {
  @Input() form: FormGroup;
  @Output()
  formSubmit: EventEmitter<{
    value: ProjectModel;
    valid: boolean;
  }> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  submit(event) {
    this.formSubmit.emit(event);
  }
}
