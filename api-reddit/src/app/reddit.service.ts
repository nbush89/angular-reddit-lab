import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  apiUrl = "https://www.reddit.com/r/aww/.json";
  constructor(public client: HttpClient) { }

  getReddit(){
    return this.client.get(this.apiUrl);
  }
}
