import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TeamModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-new-team',
  templateUrl: './main-new-team.component.html',
  styleUrls: ['./main-new-team.component.scss']
})
export class MainNewTeamComponent implements OnInit {
  @Input() form: FormGroup;
  @Output()
  formSubmit: EventEmitter<{
    value: TeamModel;
    valid: boolean;
  }> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  submit(event) {
    this.formSubmit.emit(event);
  }
}
