// src/app/components/blog-posts/blog-posts.component.ts
import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { BlogPostDto } from '../../models/blog-post.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-posts',
  standalone: true,
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css'],
  imports: [CommonModule, RouterModule],
})
export class BlogPostsComponent implements OnInit {
  blogPosts: BlogPostDto[] = [];

  constructor(private blogPostService: BlogPostService) {}

  ngOnInit() {
    this.blogPostService.getAllBlogPosts().subscribe({
      next: (data) => {
        this.blogPosts = data;
      },
      error: (err) => {
        console.error('Failed to load blog posts', err);
      },
    });
  }

  getImageSrc(image: Uint8Array | null): string {
    if (!image || image.length === 0) {
      return '';
    }
    return `data:image/jpeg;base64,${image}`;
  }
}
