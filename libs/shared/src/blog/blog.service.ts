import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogModel } from './blog.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BlogsModel } from './blogs.model';

@Injectable()
export class BlogService {
  constructor(private http: HttpClient) {}

  private extractListData(res) {
    const blogs: BlogsModel = new BlogsModel();
    blogs.page = res.page;
    blogs.blogposts = res._embedded.blogposts || {};
    return blogs;
  }

  private extractSingleData(res) {
    return res || {};
  }

  public getBlogPosts(): Observable<BlogsModel> {
    return this.http
      .get('http://localhost:8080/api/blogposts')
      .map(this.extractListData);
  }

  public getBlogPostsByParams(
    page: string,
    size: string
  ): Observable<BlogsModel> {
    return this.http
      .get(
        'http://localhost:8080/api/blogposts' +
          '?page=' +
          page +
          '&size=' +
          size
      )
      .map(this.extractListData);
  }

  public getBlogPost(id: string): Observable<BlogModel> {
    const url = `http://localhost:8080/api/blogposts/${id}`;
    return this.http.get(url).map(this.extractSingleData);
  }

  public addBlogPost(blogPost: BlogModel): Observable<any> {
    return this.http.post(
      'http://localhost:8080/api/blogpostcommands',
      blogPost
    );
  }

  public publishBlogPost(id: string, publishAt: Date): Observable<any> {
    const blog: BlogModel = new BlogModel();
    blog.publishAt = publishAt;
    const url = `http://localhost:8080/api/blogpostcommands/${id}/publishcommand`;
    return this.http.post(url, blog);
  }

  public unPublishBlogPost(id: string): Observable<any> {
    const blog: BlogModel = new BlogModel();
    const url = `http://localhost:8080/api/blogpostcommands/${id}/unpublishcommand`;
    return this.http.post(url, blog);
  }
}
