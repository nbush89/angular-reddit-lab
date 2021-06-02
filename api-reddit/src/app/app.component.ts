import { Component, OnInit } from '@angular/core';
import {RedditService, Children} from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  animalPost: Children[] = [];
  constructor(public reddits: RedditService){}
  ngOnInit():void{
    this.reddits.getReddit().subscribe((data)=>{
      this.animalPost = data.data.children;
      console.log(data.data.children[0].data.title);
      console.log(data.data.children[0].data.thumbnail);
      console.log(data.data.children[0].data.permalink);
    })
  }
}
