import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../serv1.service';

@Component({
  selector: 'app-mod2',
  templateUrl: './mod2.component.html',
  styleUrls: ['./mod2.component.css']
})
export class Mod2Component implements OnInit {

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
