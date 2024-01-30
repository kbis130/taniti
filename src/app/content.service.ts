// content.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Content } from './models/content.interface'; // Adjust the path as needed

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private contentSource = new Subject<Content>();

  contentUpdates$ = this.contentSource.asObservable();

  updateContent(newContent: Content) {
    this.contentSource.next(newContent);
  }
}