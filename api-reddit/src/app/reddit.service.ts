import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Reddit{
  kind: string;
  children: Post[];

}
interface Post{
  title: string;
  media_embed: string;
  permalink: string;
  data: object;

}

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  apiUrl = "https://www.reddit.com/r/aww/.json";
  constructor(public client: HttpClient) { }

  getReddit(){
    return this.client.get<Reddit>(this.apiUrl);
  }
}
