// src/app/components/my-blog-posts/my-blog-posts.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPostDto } from '../../models/blog-post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-my-blog-posts',
  standalone: true,
  templateUrl: './my-blog-posts.component.html',
  styleUrls: ['./my-blog-posts.component.css'],
  imports: [CommonModule, RouterModule],
})
export class MyBlogPostsComponent implements OnInit {
  myBlogPosts: BlogPostDto[] = [];

  constructor(
    private blogPostService: BlogPostService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const userId = this.authService.getUserId(); // Replace with actual user ID
    this.blogPostService.getUserBlogPosts(userId).subscribe({
      next: (data) => {
        this.myBlogPosts = data;
      },
      error: (err) => {
        console.error('Failed to load my blog posts', err);
      },
    });
  }
}
