import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  
  url:string = environment.apiUrl;
  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  items:Item[] = [
    {
      id: 0,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false
    },
    {
      id: 1,
      title: 'pan',
      price: 3.5,
      quantity: 8,
      completed: true
    },
    {
      id: 2,
      title: 'remera',
      price: 13.5,
      quantity: 2,
      completed: false
    },
  ];;

  constructor(private http:HttpClient) { }

  getItems():Observable<Item[]> {
    // return this.items;
    return this.http.get<Item[]>(this.url + 'items');
  }

  addItem(item:Item):Observable<Item> {
    // this.items.unshift(item);
    return this.http.post<Item>(this.url + 'items/', item, this.httpOptions)
  }
}
