import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private _http: HttpClient) { }
  topNews='https://newsapi.org/v2/top-headlines?country=in&apiKey=7cbacda1d0804a5293c0253a2f5554d3';
  techNews='https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7cbacda1d0804a5293c0253a2f5554d3';
  topHeadlines():Observable<any>{
    return this._http.get(this.topNews);
  }
  techHeadlines(): Observable<any>{
    return this._http.get(this.techNews);
  }
}
