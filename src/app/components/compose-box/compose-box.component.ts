import { Component, computed, signal, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../../services/post.service';

const MAX_CHARS = 600;

@Component({
  selector: 'app-compose-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './compose-box.component.html',
  styleUrls: ['./compose-box.component.scss'],
})
export class ComposeBoxComponent {
  private postService = inject(PostService);

  readonly maxChars = MAX_CHARS;
  text = signal('');

  remaining = computed(() => MAX_CHARS - this.text().length);
  progress = computed(() => this.text().length / MAX_CHARS);
  circumference = 69.1;

  ringOffset = computed(() => this.circumference - this.progress() * this.circumference);
  ringColor = computed(() => {
    const r = this.remaining();
    if (r < 50) return '#ef4444';
    if (r < 120) return '#f59e0b';
    return '#7c3aed';
  });

  charClass = computed(() => {
    const r = this.remaining();
    if (r < 50) return 'danger';
    if (r < 120) return 'warn';
    return '';
  });

  canPost = computed(() => this.text().trim().length > 0);

  onInput(value: string): void {
    this.text.set(value);
  }

  publish(): void {
    if (!this.canPost()) return;
    this.postService.addPost(this.text().trim());
    this.text.set('');
  }
}
