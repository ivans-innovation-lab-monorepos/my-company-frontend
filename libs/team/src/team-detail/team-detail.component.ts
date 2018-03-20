import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TeamModel, TeamsService } from '@my-company-frontend/shared';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  team: TeamModel;
  errorMessage: string;
  navigated = false;

  constructor(
    private teamsService: TeamsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = params['id'];
        this.navigated = true;
        this.getTeam(id);
      } else {
        this.navigated = false;
        this.team = new TeamModel();
      }
    });
  }

  private getTeam(id: string): void {
    this.teamsService
      .getTeam(id)
      .subscribe(
        team => (this.team = team),
        error => (this.errorMessage = <any>error)
      );
  }
}
