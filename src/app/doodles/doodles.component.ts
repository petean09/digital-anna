import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';


@Component({
  selector: 'app-doodles',
  templateUrl: './doodles.component.html',
  styleUrls: ['./doodles.component.css']
})
export class DoodlesComponent implements OnInit {

  constructor( private contentfulService : ContentfulService) { }

  // creates the variable that will hold the observable from contentfulService
  doodles$ : Observable<any> | undefined;
  selectWorks$: Observable<any> | undefined;

  ngOnInit(): void {
    // retrieves all the blog posts and select works from the contentful service. This is an observable
    this.doodles$ = this.contentfulService.getAllEntries();
    this.selectWorks$ = this.contentfulService.getAllEntries();

  }

}
