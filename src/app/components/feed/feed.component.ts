import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../../services/post.service';
import { PostCardComponent } from '../post-card/post-card.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule, PostCardComponent],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  private postService = inject(PostService);

  posts = this.postService.posts;

  onLike(id: number) { this.postService.toggleLike(id); }

  trackById(_: number, post: { id: number }) { return post.id; }
}
