import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private contentfulService : ContentfulService) { }

  // creates the variable that will hold the observable from contentfulService
  aboutPics$ : Observable<any> | undefined;

  ngOnInit(): void {
    // retrieves all the about pics from the contentful service. This is an observable
    this.aboutPics$ = this.contentfulService.getAllEntries();

  }

}
