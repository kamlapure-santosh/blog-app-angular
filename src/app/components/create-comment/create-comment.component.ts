// src/app/components/create-comment/create-comment.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../../services/comment.service';
import { CommentDto } from '../../models/comment.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-comment',
  standalone: true,
  templateUrl: './create-comment.component.html',
  styleUrls: ['./create-comment.component.css'],
  imports: [CommonModule, FormsModule],
})
export class CreateCommentComponent {
  content: string = '';
  postId: string = '';

  constructor(
    private route: ActivatedRoute,
    private commentService: CommentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('postId')!;
  }

  onSubmit() {
    const newComment: CommentDto = {
      id: 0,
      comment: this.content,
      userId: 0,
      commentedBy: '',
      blogPostId: parseInt(this.postId),
    };
    this.commentService.createComment(this.postId, newComment).subscribe({
      next: () => {
        this.router.navigate([`/blogposts/${this.postId}/comments`]);
      },
      error: (err) => {
        console.error('Failed to add comment', err);
      },
    });
  }
}
