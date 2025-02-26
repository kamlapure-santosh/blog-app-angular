// src/app/components/comments/comments.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { CommentDto } from '../../models/comment.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-comments',
  standalone: true,
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  imports: [CommonModule, RouterModule],
})
export class CommentsComponent implements OnInit {
  comments: CommentDto[] = [];
  postId: string = '';

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('postId')!;
    this.commentService.getComments(this.postId).subscribe({
      next: (data) => {
        this.comments = data;
      },
      error: (err) => {
        console.error('Failed to load comments', err);
      },
    });
  }
}
