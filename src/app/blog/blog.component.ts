import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor( private contentfulService : ContentfulService) { }

  // creates the variable that will hold the observable from contentfulService
  blogPosts$ : Observable<any> | undefined;

  ngOnInit(): void {
    // retrieves all the blog posts from the contentful service. This is an observable
    // this.blogPosts$ = this.contentfulService.getAllEntries();
  }

}
