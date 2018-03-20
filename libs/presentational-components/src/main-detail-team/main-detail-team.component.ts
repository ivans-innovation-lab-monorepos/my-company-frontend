import { Component, OnInit, Input } from '@angular/core';
import { TeamModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-detail-team',
  templateUrl: './main-detail-team.component.html',
  styleUrls: ['./main-detail-team.component.scss']
})
export class MainDetailTeamComponent implements OnInit {
  @Input() team: TeamModel;
  constructor() {}

  ngOnInit() {}
}
