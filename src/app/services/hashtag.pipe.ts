import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({ name: 'hashtag', standalone: true })
export class HashtagPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(value: string): SafeHtml {
    const html = value.replace(
      /#(\w+)/g,
      '<span class="tag">#$1</span>'
    );
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
