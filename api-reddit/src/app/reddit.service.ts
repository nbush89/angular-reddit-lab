import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Reddit{
  kind: string;
  data: Data;
}

export interface Data{
  children: Children[];
}
export interface Children{
  data: PostData;
}
interface PostData{
  title: string;
  thumbnail: string;
  permalink: string;

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
