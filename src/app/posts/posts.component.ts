import { Component, OnInit } from '@angular/core';
import { DataService} from "../data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor(private data : DataService) { }

  posts$ : Object;

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data
    )
  }

}
