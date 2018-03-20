import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-new',
  templateUrl: './main-new.component.html',
  styleUrls: ['./main-new.component.scss']
})
export class MainNewComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
