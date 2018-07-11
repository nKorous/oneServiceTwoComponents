import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../serv1.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {

  items = [] //empty array that holds the items returned

  constructor(private _srv: Serv1Service) { }

  ngOnInit() {
    this.getItems() //on init grab any items that are already in the array.
  }


  sendItem(ID:number, name:string, description:string){
    /**
   * sends the info to create a new item to the Serv1Service, invoking function putNewItem()
   */
    let itemInfo = {
      ID: ID,
      name: name,
      description: description
    }

    this._srv.putNewItem(itemInfo)
  }

  getItems(){
    /***
     * pulls back the list of items. 
     * This function is invoked onInit and every time 
     * the submit new item is clicked.
     */
    this.items = this._srv.getAllItems()
  }

}
