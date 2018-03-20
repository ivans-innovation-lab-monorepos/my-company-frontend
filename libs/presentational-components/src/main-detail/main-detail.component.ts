import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss']
})
export class MainDetailComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
