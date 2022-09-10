import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { DoodlesComponent } from './doodles/doodles.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { AnimalHouseComponent } from './animal-house/animal-house.component';

const routes: Routes = [
  { path: 'app', component: AppComponent },
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'doodles', component: DoodlesComponent},
  { path: 'blog/:id', component: BlogPostComponent},
  { path: 'select-work/:id', component: AnimalHouseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
