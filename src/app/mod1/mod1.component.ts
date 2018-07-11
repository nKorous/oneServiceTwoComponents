import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../serv1.service';

@Component({
  selector: 'app-mod1',
  templateUrl: './mod1.component.html',
  styleUrls: ['./mod1.component.css']
})
export class Mod1Component implements OnInit {

  items

  constructor(private _srv: Serv1Service) { }

  ngOnInit() {
    this.getItems()
  }

  sendItem(ID:number, name:string, description:string){
    let itemInfo = {
      ID: ID,
      name: name,
      description: description
    }

    this._srv.putNewItem(itemInfo)
  }

  getItems(){
    this.items = this._srv.getAllItems()
  }

}
