// src/app/models/comment.model.ts
export interface CommentDto {
  id: number;
  comment: string;
  userId: number;
  blogPostId: number;
}
