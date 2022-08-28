import { Injectable } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  // This whole section is for the blog (api connect for contentful)
  // // contents to contentful to retrieved date
  // private client = createClient({
  //   // I can't get dotenv to work
  //   // space: process.env.spaceId,
  //   // accessToken: process.env.accessToken,

  //   space: environment.spaceId,
  //   accessToken: environment.accessToken
  // })

  // getAllEntries() {
  //   // creates a promise of all the blog posts from contentful
  //   const promise = this.client.getEntries()
  //   // converting promise to an observable so it can return to the blog component
  //   return from(promise);
  // }

  // getEntryById(id: string ){
  //   // creates a promise of one blog post id from contentful
  //   const promise = this.client.getEntry(id);
  //   // converting promise to an observable so it can return to the blog post component
  //   return from(promise);
  // }
  
}
