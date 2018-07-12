import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SomeClass } from './some-class';

const endpoint: string = 'http://ThisIsSomeEndpoint.Endpoint?someParam=false'

@Injectable({
  providedIn: 'root'
})
export class SomeTestService {

  someArray
  someArray2 = []

  constructor(private _http: HttpClient) { }
  

  getStuff(){
    this._http.get(endpoint + '&somethingElse=')
      .subscribe((data) => {

        /*** thing 1 */
        this.someArray = data

        /*** thing 2 */
        for(let i = 0; i < data[length]; i++){
          this.someArray2.push(new SomeClass(data[i].name, data[i].number))
        }
      })
  }

  getSomeArray(){
    return this.someArray
  }

  getSomeArray2(){
    return this.someArray2
  }
}
