// src/app/models/blog-post.model.ts
export interface BlogPostDto {
  id: number;
  title: string;
  content: string;
  categoryId: number;
  categoryName?: string;
  userId: number;
  authorName: string;
  image?: Uint8Array | null; // New property for storing image data
  createdDate?: Date;
}
