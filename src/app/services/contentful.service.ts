import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { from } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {

  constructor() { }

  // contents to contentful to retrieved date
  private client = createClient({
    space: environment.spaceId,
    accessToken: environment.accessToken
  })

  getAllEntries() {
    // creates a promise of all the blog posts from contentful
    const promise = this.client.getEntries()
    // converting promise to an observable so it can return to the blog component
    return from(promise);
  }
}
