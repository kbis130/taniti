import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContentService } from '../content.service';
import { Content } from '../models/content.interface' ; // Adjust the path as needed
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent implements OnDestroy {
  currentContent: Content = { title: '', body: '' };
  private contentSubscription: Subscription;

  constructor(private contentService: ContentService) {
    this.contentSubscription = this.contentService.contentUpdates$.subscribe(
      (newContent: Content) => {
        this.currentContent = newContent;
      }
    );
  }

  ngOnDestroy() {
    this.contentSubscription.unsubscribe();
  }
}