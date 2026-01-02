import { Routes } from '@angular/router';
import { HomeComponent } from './core/features/Faculty-of-Medicine/Pages/Home/Home.component';
import { FacultyOfMedicineComponent } from './core/features/Faculty-of-Medicine/Faculty-of-Medicine.component';

export const routes: Routes = [
 {
    path: '',
    component: FacultyOfMedicineComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
]}
];
