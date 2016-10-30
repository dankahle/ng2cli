import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";

import '../core/rxjs-opertators';
import {Hero} from "../hero/hero";

@Injectable()
export class HeroService {
  url = 'http://localhost:4201/api/hero'

  constructor(private http:Http) { }

  getList():Observable<Hero[]> {
    return this.http.get(this.url)
      .map(resp => {
        // console.log(resp);
        return resp.json();
      })
      .catch(err => {
        return Observable.throw(err);// this is what they do with no catch
        // return Observable.of([]); // returns to subscribe success function
      });
  }

  getOne(id:number):Promise<Hero> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(resp => resp.json());
  }

  add(hero:Hero):Promise<Hero> {
    return this.http.post(this.url, hero)
      .toPromise()
      .then(resp => resp.json());
  }

  update(hero:Hero):Promise<Hero> {
    return this.http.put(`${this.url}/${hero.id}`, hero)
      .toPromise()
      .then(resp => resp.json());
  }

  delete(id:number):Promise<number> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(resp => resp.json());
  }


}
