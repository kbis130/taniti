// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SightseeingComponent } from './components/sightseeing/sightseeing.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { FoodComponent } from './components/food/food.component';
import { LodgingComponent } from './components/lodging/lodging.component';
import { TransportationComponent } from './components/transportation/transportation.component';
import { QuestionsComponent } from './components/questions/questions.component';
// Import other components as needed

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sightseeing', component: SightseeingComponent },
    { path: 'entertainment', component: EntertainmentComponent },
    { path: 'food', component: FoodComponent },
    { path: 'lodging', component: LodgingComponent },
    { path: 'transportation', component: TransportationComponent },
    { path: 'questions', component: QuestionsComponent },
    // Define other routes as needed
    { path: '', redirectTo: '/home', pathMatch: 'full' } // default route
  ];