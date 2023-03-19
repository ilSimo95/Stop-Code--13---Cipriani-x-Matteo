import { Component } from '@angular/core';
import { PreferitiService } from '../preferiti.service';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.css']
})
export class PreferitiComponent {

  constructor(public preferitiService:PreferitiService) {}

}
