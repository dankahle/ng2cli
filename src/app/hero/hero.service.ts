import { Injectable } from '@angular/core';
import {Http, Response, URLSearchParams, RequestOptions} from "@angular/http";
// import {Observable} from "rxjs";
import {Observable} from "rxjs/Observable";

import '../core/rxjs-opertators';
import {Hero} from "../hero/hero";

@Injectable()
export class HeroService {
  url = 'http://localhost:4201/api/hero';

  constructor(private http:Http) { }

  getList():Observable<Hero[]> {
    return this.http.get(this.url)
      .map(resp => {
        // console.log(resp);
        return resp.json().data;
      })
      .catch(err => {
        // return Observable.throw(err);// this is what they do with no catch
        // return Observable.of([]); // returns to subscribe success function
        return this.handleError(err);
      });
  }

  getOne(id:number):Promise<Hero> {
    return this.http.get(`${this.url}/${id}`)
      .toPromise()
      .then(resp => resp.json().data);
  }

  add(hero:Hero):Promise<Hero> {
    return this.http.post(this.url, hero)
      .toPromise()
      .then(resp => resp.json().data)
      .catch(resp => Promise.reject(resp))// returns normal response object
  }

  update(hero:Hero):Promise<Hero> {
    return this.http.put(`${this.url}/${hero.id}`, hero)
      .toPromise()
      .then(resp => resp.json().data);
  }

  delete(id:number):Promise<number> {
    return this.http.delete(`${this.url}/${id}`)
      .toPromise()
      .then(resp => resp.json().data);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      let body:any;
      let err:string;
      try {
        body = error.json();
        err = body.message || JSON.stringify(body);
      }
      catch(e) {
        err = error.text();
      }
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error('handleError', errMsg);
    return Observable.throw(errMsg);
  }


}
