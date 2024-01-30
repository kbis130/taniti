import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavbarComponent {

  constructor(private router: Router) {}

  onNavButtonClick(contentType: string) {
    switch (contentType) {
      case 'Home Content':
        this.router.navigateByUrl('/home');
        break;
      case 'Sightseeing Content':
        this.router.navigateByUrl('/sightseeing');
        break;
      case 'Entertainment Content':
        this.router.navigateByUrl('/entertainment');
        break;
      case 'Food Content':
        this.router.navigateByUrl('/food');
        break;
      case 'Lodging Content':
        this.router.navigateByUrl('/lodging');
        break;
      case 'Transportation Content':
        this.router.navigateByUrl('/transportation');
        break;
      case 'General Question Content':
        this.router.navigateByUrl('/questions');
        break;
      // ... additional cases for each content type
      default:
        this.router.navigateByUrl('/');
    }
  }

toggleButtonClass(event: any) {
    // Remove the 'clicked-button' class from all buttons
    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(btn => btn.classList.remove('clicked-button'));

    // Find the button element (in case the image is the event target)
    let targetElement = event.target;
    while (targetElement != null && !targetElement.classList.contains('nav-button')) {
        targetElement = targetElement.parentElement;
    }

    // Add the 'clicked-button' class to the clicked button
    if (targetElement) {
        targetElement.classList.add('clicked-button');
    }
}
}

