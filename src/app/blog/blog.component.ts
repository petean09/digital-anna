import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

// @Pipe({ name: 'dateValues' })
// export class ValuesPipe implements PipeTransform {
//   // transform(value: any, args: any[] = null): any {
//   //   return Object.keys(value).map(key => value[key]);
//   // }
//   transform(value: any, ...args: any[]) {
//     return console.log('here')
//   }
// } 

export class BlogComponent implements OnInit {

  constructor( private contentfulService : ContentfulService) { }

  // creates the variable that will hold the observable from contentfulService
  blogPosts$ : Observable<any> | undefined;
  

  ngOnInit(): void {
    // retrieves all the blog posts from the contentful service. This is an observable
    this.blogPosts$ = this.contentfulService.getAllEntries();

    console.log(this.blogPosts$.subscribe(res => console.log(res.items)))
   
  }

}
