import { Injectable } from '@angular/core';
import {URLSearchParams, Http, Jsonp} from "@angular/http";

@Injectable()
export class WikiService {

  constructor(private http:Http, private jsonp:Jsonp) { }

  wikiProxy(searchText):Promise<string[]> {

    let params = new URLSearchParams();
    params.set('search', searchText);
    params.set('action', 'opensearch');
    params.set('format', 'json');

    return this.http.get('http://localhost:4201/cnn', {search: params})
      .toPromise()
      .then(resp => {
        return resp.json()[1];
      }, resp => {
        // console.log(resp);
        return Promise.reject(resp);
      });
  }

  // no provider for Jsonp and you don't see it in the @angular module. They must have pulled it
  wikiJsonp(searchText):Promise<string[]> {

    let wikiUrl = 'https://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', searchText);
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp.get(wikiUrl, {search: params})
      .toPromise()
      .then(resp => {
        return resp.json()[1];
      }, resp => {
        // console.log(resp);
        return Promise.reject(resp);
      });
  }




}
