import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Reddit{
  kind: string;
  data: object;
  modhash: string;
  dist: number;
  children: Post[];
  title: string;

}
interface Post{
  title: string;
  permalink: string;
  preview: object;
  

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
