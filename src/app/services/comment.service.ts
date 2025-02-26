// src/app/services/comment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { CommentDto } from '../models/comment.model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getComments(postId: string): Observable<CommentDto[]> {
    return this.http.get<CommentDto[]>(
      `${this.apiUrl}/blogposts/${postId}/comments`
    );
  }

  createComment(postId: string, comment: CommentDto): Observable<CommentDto> {
    return this.http.post<CommentDto>(
      `${this.apiUrl}/blogposts/${postId}/comments`,
      comment
    );
  }
}
