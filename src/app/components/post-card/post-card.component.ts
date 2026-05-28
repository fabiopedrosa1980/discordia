import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Post } from '../../models/post.model';
import { HashtagPipe } from '../../services/hashtag.pipe';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [CommonModule, HashtagPipe],
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent {
  post = input.required<Post>();
  liked = output<number>();

  onLike(): void { this.liked.emit(this.post().id); }
}
