import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { SideInfoComponent } from './home/side-info/side-info.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {
        path: 'info',
        component: SideInfoComponent,
      },

    ],
  },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
