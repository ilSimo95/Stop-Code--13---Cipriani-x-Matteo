import { Injectable } from '@angular/core';
import { DATA } from './data';
import { Post } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getPosts(): Post[] { return DATA; }
  
}
