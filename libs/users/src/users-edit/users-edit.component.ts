import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import {
  EventManager,
  UserModel,
  UsersService
} from '@my-company-frontend/shared';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.scss']
})
export class UsersEditComponent implements OnInit {
  form: FormGroup;
  isSaving: Boolean;
  user: UserModel;
  errorMessage: string;
  userId: string;

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

  ngOnInit() {
    this.route.parent.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.userId = params['id'];
        this.populateUserForm(this.userId);
      }
    });
  }

  private populateUserForm(id: string): void {
    this.usersService.getUser(id).subscribe(user => {
      this.form.reset({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username
      });
    }, error => (this.errorMessage = <any>error));
  }

  onSubmit({ value, valid }: { value: UserModel; valid: boolean }) {
    this.usersService
      .updateUser(this.userId, value)
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
