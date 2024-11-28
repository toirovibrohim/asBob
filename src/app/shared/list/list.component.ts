import {Component, input, output} from '@angular/core';
import {ItemComponent} from "../item/item.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ItemComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  list = input<any[]>([]);
  updatedData = output<any>();

  countUpdate(updatedItem: { count: number; id: number }) {
    const updatedList = this.list().map((item) => item.id === updatedItem.id ? {
      ...item,
      count: updatedItem.count
    } : item);
    this.updatedData.emit({list: updatedList, hasItems: !!updatedItem.count});
  }
}
