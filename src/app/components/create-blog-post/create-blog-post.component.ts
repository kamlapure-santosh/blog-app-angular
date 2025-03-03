// src/app/components/create-blog-post/create-blog-post.component.ts
import { Component } from '@angular/core';
import { BlogPostService } from '../../services/blog-post.service';
import { Router } from '@angular/router';
import { BlogPostDto } from '../../models/blog-post.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogCategoryDto } from '../../models/blog-categoty.model';

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
  categories: BlogCategoryDto[] = []; // Array to hold categories
  selectedCategoryId: number = 1; // Variable to hold selected

  constructor(
    private blogPostService: BlogPostService,
    private router: Router
  ) {
    this.loadCategories();
  }

  loadCategories() {
    this.blogPostService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
      },
      error: (err) => {
        console.error('Failed to load categories', err);
      },
    });
  }

  image: File | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.image = input.files[0]; // Assign the first file from the FileList
    }
  }

  onSubmit() {
    const newPost: BlogPostDto = {
      id: 0,
      title: this.title,
      content: this.content,
      userId: 0,
      authorName: '',
      categoryId: this.selectedCategoryId,
    };

    this.blogPostService.createBlogPost(newPost, this.image).subscribe({
      next: () => {
        this.router.navigate(['/blog-posts']);
      },
      error: (err) => {
        console.error('Failed to create blog post', err);
      },
    });
  }
}
