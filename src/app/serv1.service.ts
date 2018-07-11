import { Injectable } from '@angular/core';
import { SomeListItemClass } from './some-list-item-class';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {
  someList = []

  constructor() {
    this.someList.push(new SomeListItemClass(1, 'Bob', 'Some Description'))
   }

   putNewItem(itemInfo){
     this.someList.push(new SomeListItemClass(itemInfo.ID, itemInfo.name, itemInfo.description))
   }

   getAllItems(){
     return this.someList
   }
}
