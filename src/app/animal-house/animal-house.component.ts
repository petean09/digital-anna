import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentfulService } from '../services/contentful.service';


@Component({
  selector: 'app-animal-house',
  templateUrl: './animal-house.component.html',
  styleUrls: ['./animal-house.component.css']
})
export class AnimalHouseComponent implements OnInit {

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

  selectWork$: Observable<any> | undefined;

  ngOnInit(): void {
     // code for contently to get individual works
     this.route.params.subscribe(
      params => {
        const id = params['id'];

        this.selectWork$ = this.contentfulService.getEntryById(id);
      }
    );
  }

}
