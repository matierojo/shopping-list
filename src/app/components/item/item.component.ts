import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item = new Item();
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() toggleItem: EventEmitter<Item> = new EventEmitter();
  // @Output() itemUpdate: EventEmitter<Item> = new EventEmitter();
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onDelete(item: Item) { 
    this.deleteItem.emit(item);
  }
  
  onUpdate() { 
    this.router.navigate(['update', this.item.id], {queryParams: {titleSection: this.item.title}})
  }

  onToggle(item: Item) {
    item.completed = !item.completed
    this.toggleItem.emit(item);
  }
}
