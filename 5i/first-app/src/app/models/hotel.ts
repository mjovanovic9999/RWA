import { Comment } from 'src/app/models/comment';

export interface Hotel {
  id: number;
  name: string;
  photo: string;
  description: string;
  price: number;
  rate: number;
  comment: Comment[];
}
