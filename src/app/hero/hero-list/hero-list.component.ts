import { Component, OnInit, Input } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";
import {WikiService} from "../../core/wiki.service";

enum Mode {
  add,
  edit
}

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes:Hero[] = [];
  curHero:Hero = <Hero>{};
  mode:Mode = Mode.add;
  addText:string;
  Mode = Mode;
  errorMessage:any;
  responses:Promise<string[]>;

  constructor(private heroService:HeroService, private wikiService:WikiService) { }

  ngOnInit() {

    this.resetAddMode();

    this.heroService.getList()
      .subscribe(
        heroes => this.heroes = heroes,
        err => this.errorMessage = <any>err
      );
  }

  resetAddMode() {
    this.mode = Mode.add;
    this.addText = 'Add';
    this.curHero = new Hero();
  }

  add() {
    if (this.curHero.name) {
      this.heroService.add(this.curHero)
        .then(hero => {
          this.heroes.push(hero);
          this.resetAddMode();
        },
        err => console.log('adderr', err));
    }
  }

  update() {
    if (this.curHero.name) {
      this.heroService.update(this.curHero)
        .then(hero => {
          this.heroes.splice(this.heroes.indexOf(this.curHero), 1, hero);
          this.resetAddMode();
        });
    }
  }

  delete(event, hero) {
    event.stopImmediatePropagation();
    this.heroService.delete(hero.id)
      .then(x => {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
      })
  }

  addOrNew() {
    if (this.mode === Mode.add) {
      this.add();
    }
    else {
      this.resetAddMode();
    }
  }

  select(hero) {
    this.addText = 'new';
    this.mode = Mode.edit;
    this.curHero = hero;
  }

}
