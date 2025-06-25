// app.routes.ts
import { Routes } from '@angular/router';
import { StudentListComponent } from './components/student-list/student-list';
import { StudentAddComponent } from './components/student-add/student-add';
import { StudentEditComponent } from './components/student-edit/student-edit';

export const routes: Routes = [
  { path: '', component: StudentListComponent },
  { path: 'add', component: StudentAddComponent },
  { path: 'edit/:id', component: StudentEditComponent },
];
