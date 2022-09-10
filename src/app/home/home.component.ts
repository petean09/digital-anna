import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contentfulService: ContentfulService) { }

  selectWorks$: Observable<any> | undefined;

  ngOnInit(): void {
      // retrieves all the blog posts from the contentful service. This is an observable
      this.selectWorks$ = this.contentfulService.getAllEntries();
  }
}
