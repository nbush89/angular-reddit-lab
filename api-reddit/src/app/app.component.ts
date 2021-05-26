import { Component, OnInit } from '@angular/core';
import { RedditService, Reddit } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  reddit?: Reddit;
  constructor(public reddits: RedditService){}
  ngOnInit(){
    this.reddits.getReddit().subscribe((data:Reddit)=>{
      this.reddit = {...data};
      console.log(data.kind);
      // console.log(data.media_embed);
      // console.log(data.url);
      // data.children.forEach(data=>console.log(data.title));
      // for(let data of data.children){
      //   console.log(data.title)
      // }
    })
  }
}
