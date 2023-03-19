import { Injectable } from '@angular/core';
import { Preferito } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class PreferitiService {
  preferiti:Preferito[] = [];

  constructor() { }

  addPreferito(preferito:Preferito):void {
    let p = this.preferiti.find(x => x.id == preferito.id);
    if (p == undefined) {
      this.preferiti.push(preferito);
    }
  }

  removePreferito(preferito:Preferito):void {
    let p = this.preferiti.find(x => x.id == preferito.id);
    if (p != undefined) {
      let index = this.preferiti.indexOf(p);
      this.preferiti.splice(index, 1);
    }
  }

  removeAll():void {
    this.preferiti = [];
  }

}
