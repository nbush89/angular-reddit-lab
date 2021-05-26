import { Component } from '@angular/core';
import { RedditService } from './reddit.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-reddit';
  constructor(public client: RedditService){}
  ngOnInit(){
    this.client.getReddit().subscribe((data:any)=>{
      console.log(data.title);
      console.log(data.media_embed);
      console.log(data.url);      
    })
  }
}
