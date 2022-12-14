import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];
  total:number = 0;

  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    // this.items = [];

    // this.items = this.itemService.getItems();

    this.itemService.getItems().subscribe(data => {
      this.items = data;  
      this.getTotal();
    })

  }

  deleteItem(item: Item) {
    this.items = this.items.filter(x => x.id != item.id );
    this.getTotal();
  }

  toggleItem(item: Item) {
    this.getTotal();
  }
  
  putItem(item: Item) {
    this.getTotal();
  }

  getTotal() {
    this.total = this.items
      .filter(item => !item.completed) // items.completed = false
      .map(item => item.quantity * item.price)
      .reduce((acc, item) => acc += item, 0);
  }
}
