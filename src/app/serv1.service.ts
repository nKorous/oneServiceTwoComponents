import { Injectable } from '@angular/core';
import { SomeListItemClass } from './some-list-item-class';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {
  someList = [] //Holds the items that you push into the array

  constructor() {
    /*** 
     * Just initializing one item in the array so something shows up, this is just test data 
    ***/
    this.someList.push(new SomeListItemClass(1, 'Bob', 'Some Description'))
   }

   putNewItem(itemInfo){
    /*** 
     * This function is invoked on the .html pages for the respective components
     * It will push the new item into the someList array based on the data passed over
     ***/
     this.someList.push(new SomeListItemClass(itemInfo.ID, itemInfo.name, itemInfo.description))
   }

   getAllItems(){
     /*** Simply returns everything in the someList array ***/
     return this.someList
   }
}
