import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProjectModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-new-project',
  templateUrl: './main-new-project.component.html',
  styleUrls: ['./main-new-project.component.scss']
})
export class MainNewProjectComponent implements OnInit {
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
