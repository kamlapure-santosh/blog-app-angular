// src/app/services/blog-post.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { BlogPostDto } from '../models/blog-post.model';
import { BlogCategoryDto } from '../models/blog-categoty.model';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<BlogCategoryDto[]>(
      `${this.apiUrl}/blogposts/categories`
    );
  }

  getAllBlogPosts(): Observable<BlogPostDto[]> {
    return this.http.get<BlogPostDto[]>(`${this.apiUrl}/blogposts`);
  }

  getUserBlogPosts(userId: number): Observable<BlogPostDto[]> {
    return this.http.get<BlogPostDto[]>(
      `${this.apiUrl}/blogposts/user/${userId}`
    );
  }

  createBlogPost(
    post: BlogPostDto,
    image: File | null
  ): Observable<BlogPostDto> {
    const formData = new FormData();
    formData.append('title', post.title);
    formData.append('content', post.content);
    formData.append('categoryId', post.categoryId.toString());
    formData.append('userId', post.userId.toString());
    if (image) {
      formData.append('imageFile', image);
    }

    const headers = new HttpHeaders({
      enctype: 'multipart/form-data',
    });

    return this.http.post<BlogPostDto>(`${this.apiUrl}/blogposts`, formData, {
      headers,
    });
  }
}
