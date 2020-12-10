import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import {EmployeeDetailsComponent} from './components/employee-details/employee-details.component';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {AuthGuard} from './auth/auth.guard';
import {AuthComponent} from './auth/auth.component';

const routes: Routes = [
  { path: '', redirectTo: 'tutorials',
    canActivate: [AuthGuard],
    pathMatch: 'full' },
  { path: 'tutorials',
    canActivate: [AuthGuard],
    component: TutorialsListComponent },
  { path: 'tutorials/:id',
    canActivate: [AuthGuard],
    component: TutorialDetailsComponent },
  { path: 'add',
    component: AddTutorialComponent },
  { path: 'employees',
    canActivate: [AuthGuard],
    component: EmployeeListComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
