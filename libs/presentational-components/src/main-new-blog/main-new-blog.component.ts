import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BlogModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-new-blog',
  templateUrl: './main-new-blog.component.html',
  styleUrls: ['./main-new-blog.component.scss']
})
export class MainNewBlogComponent implements OnInit {
  @Input() form: FormGroup;
  @Output()
  formSubmit: EventEmitter<{
    value: BlogModel;
    valid: boolean;
  }> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  submit(event) {
    this.formSubmit.emit(event);
  }
}
