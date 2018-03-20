import { Component, OnInit, Input } from '@angular/core';
import { ProjectModel } from '@my-company-frontend/shared';

@Component({
  selector: 'app-main-detail-project',
  templateUrl: './main-detail-project.component.html',
  styleUrls: ['./main-detail-project.component.scss']
})
export class MainDetailProjectComponent implements OnInit {
  @Input() project: ProjectModel;
  @Input() editRouterLinkUrl: string;
  @Input() activateRouterLinkUrl: string;
  @Input() deactivateRouterLinkUrl: string;
  constructor() {}

  ngOnInit() {}
}
