import { ProjectModel } from './project.model';
import { MemberModel } from './member.model';
export class TeamModel {
  id: string;
  name: string;
  description: string;
  status: string;
  project: ProjectModel;
  members: MemberModel[];
}
