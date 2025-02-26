// src/app/services/blog-post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { BlogPostDto } from '../models/blog-post.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllBlogPosts(): Observable<BlogPostDto[]> {
    return this.http.get<BlogPostDto[]>(`${this.apiUrl}/blogposts`);
  }

  getUserBlogPosts(userId: number): Observable<BlogPostDto[]> {
    return this.http.get<BlogPostDto[]>(
      `${this.apiUrl}/blogposts/user/${userId}`
    );
  }

  createBlogPost(post: BlogPostDto): Observable<BlogPostDto> {
    return this.http.post<BlogPostDto>(`${this.apiUrl}/blogposts`, post);
  }
}
