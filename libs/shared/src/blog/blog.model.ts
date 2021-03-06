export class BlogModel {
  id: number;
  title: string;
  renderContent: string;
  rawConten: string;
  publicSlug: string;
  draft: boolean;
  publishAt: Date;
  category: string;
  broadcast: boolean;
}
