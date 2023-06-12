import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[] | undefined;

  constructor(private _postsService: PostsService) {

  }

  ngOnInit(): void {
    this._postsService.getPosts().then(
      (posts: Post[]| undefined) => this.posts = posts || []
    )
  }
}
