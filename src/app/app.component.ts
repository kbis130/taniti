import { Component, Injector } from '@angular/core';
import { Router, RouterModule, Routes, ROUTES } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { appRoutes } from './app.routes';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, MainContentComponent, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    { provide: ROUTES, useValue: appRoutes, multi: true }
  ]
})
export class AppComponent {
  title = 'taniti-site';

  constructor(injector: Injector) {
    const router = injector.get(Router);
    router.resetConfig(appRoutes);
  }
}
