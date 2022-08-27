import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ConnectModalComponent } from './connect-modal/connect-modal.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'connect', component: ConnectModalComponent, },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
