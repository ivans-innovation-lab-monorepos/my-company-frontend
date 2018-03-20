import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  EventManager,
  UsersService,
  UserModel
} from '@my-company-frontend/shared';

@Component({
  selector: 'app-users-new',
  templateUrl: './users-new.component.html',
  styleUrls: ['./users-new.component.scss']
})
export class UsersNewComponent implements OnInit {
  form: FormGroup;
  isSaving: Boolean;

  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private eventManager: EventManager
  ) {
    this.form = fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onSubmit({ value, valid }: { value: UserModel; valid: boolean }) {
    this.usersService
      .addUser(value)
      .subscribe(
        response => this.onSaveSuccess(response),
        () => this.onSaveError()
      );
  }

  private onSaveSuccess(result) {
    this.eventManager.broadcast({
      name: 'userListModification',
      content: 'OK'
    });
    this.isSaving = false;
  }

  private onSaveError() {
    this.isSaving = false;
  }
}
