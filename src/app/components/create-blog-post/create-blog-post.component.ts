// src/app/components/create-blog-post/create-blog-post.component.ts
import { Component } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { Router } from '@angular/router';
import { BlogPostDto } from '../../models/blog-post.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-blog-post',
  standalone: true,
  templateUrl: './create-blog-post.component.html',
  styleUrls: ['./create-blog-post.component.css'],
  imports: [CommonModule, FormsModule],
})
export class CreateBlogPostComponent {
  title: string = '';
  content: string = '';

  constructor(
    private blogPostService: BlogPostService,
    private router: Router
  ) {}

  onSubmit() {
    const newPost: BlogPostDto = {
      id: 0,
      title: this.title,
      content: this.content,
      userId: 0,
    };
    this.blogPostService.createBlogPost(newPost).subscribe({
      next: () => {
        this.router.navigate(['/blog-posts']);
      },
      error: (err) => {
        console.error('Failed to create blog post', err);
      },
    });
  }
}
