import { Component, OnInit } from '@angular/core';
import {HeroService} from "../hero.service";
import {Hero} from "../hero";

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
  mode:Mode;
  addText = 'add';
  Mode = Mode;

  constructor(private heroService:HeroService) { }

  ngOnInit() {
    this.heroService.getList()
      .subscribe(heroes => {
        // console.log('>>>>>>>>>subscribe', heroes);
        this.heroes = heroes;
      });
  }

  add() {
    if (this.curHero.name) {
      this.heroService.add(this.curHero)
        .then(hero => {

          this.heroes.push(hero);
          this.curHero = new Hero();
        });
    }
  }

  update() {
    if (this.curHero.name) {
      this.heroService.update(this.curHero)
        .then(hero => {
          this.heroes.splice(this.heroes.indexOf(this.curHero), 1, hero);
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

  addOrNew(hero) {
    if (this.mode === Mode.add) {
      this.add(hero);
    }
    else {
      this.new();
    }
  }

  new() {
    this.addText = 'add';
    this.mode = Mode.add;
    this.curHero = new Hero();
  }

  select(hero) {
    this.addText = 'new';
    this.mode = Mode.edit;
    this.curHero = hero;
  }

}
