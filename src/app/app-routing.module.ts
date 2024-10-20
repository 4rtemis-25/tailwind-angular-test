import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarMainComponent } from './Pages/Components/navbar-main/navbar-main.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: NavbarMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
