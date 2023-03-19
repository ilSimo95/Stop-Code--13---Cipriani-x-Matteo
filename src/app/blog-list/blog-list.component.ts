import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog-service.service';
import { Post } from '../interfaces';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts: Post[] = [];

  constructor (private blogService:BlogService) {}

  ngOnInit():void { 
    this.posts = this.blogService.getPosts();
  } 

}
