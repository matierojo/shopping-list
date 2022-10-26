import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-putitem',
  templateUrl: './putitem.component.html',
  styleUrls: ['./putitem.component.css']
})
export class PutitemComponent implements OnInit {
  
  // @Input() id:number = 0;
  // @Input() title:string = '';
  // @Input() price:number = 0;
  // @Input() quantity:number = 0;

  // @Output() item: EventEmitter<Item> = new EventEmitter();
  item: Item = new Item();
  id:number = 0;
  titleSection:string = '';

  constructor(private itemService:ItemService, private routerActive:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.routerActive.params.subscribe(
      (params:Params) => {
        this.id = params['id'];
      }
    );

    this.routerActive.queryParams.subscribe(
      (params: Params) => this.titleSection = params['titleSection']
    );

    this.itemService.getItem(this.id).subscribe(data => this.item = data);
  }

  onUpdate() {
    this.itemService.updateItem(this.item).subscribe(i => this.router.navigate(['/']));
  }
}
