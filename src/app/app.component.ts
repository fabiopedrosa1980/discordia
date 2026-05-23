import { Component } from '@angular/core';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ComposeBoxComponent } from './components/compose-box/compose-box.component';
import { FeedComponent } from './components/feed/feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopbarComponent, ComposeBoxComponent, FeedComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
