import { Component, OnInit } from '@angular/core';
import {WikiService} from "../../core/wiki.service";

@Component({
  selector: 'wiki-comp',
  templateUrl: './wiki.component.html',
  styleUrls: ['./wiki.component.scss']
})
export class WikiComponent {

  title   = 'Wikipedia Demo';
  fetches = 'Fetches after each keystroke';
  items: Promise<string[]>;

  constructor (private wikiService: WikiService) { }

  search (term: string) {
    this.items = this.wikiService.wikiJsonp(term);
  }

}
