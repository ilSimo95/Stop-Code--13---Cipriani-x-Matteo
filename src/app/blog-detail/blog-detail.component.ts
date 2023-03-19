import { Component, Input } from '@angular/core';
import { Post, Preferito } from '../interfaces';
import { PreferitiService } from '../preferiti.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  @Input()
  post?:Post;

  constructor (private preferitiService:PreferitiService) {}

  aggiungiPreferito():void {
    if (this.post!=undefined) {
      let p:Preferito = {
        "title": this.post.title,
        "id": this.post.id
      }
      this.preferitiService.addPreferito(p);
    }
  }
}
