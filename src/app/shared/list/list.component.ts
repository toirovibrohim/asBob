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

  private updatedList: any[] = [];

  countUpdate(updatedItem: { count: number; id: number }) {
    if (this.updatedList.length === 0) {
      this.updatedList = this.list();
    }
    let count = 0;
    this.updatedList = this.updatedList.map((item) => {
      const isUpdatedItem = item.id === updatedItem.id;
      if (isUpdatedItem) {
        count = count + updatedItem.count;
      } else {
        count = count + item.count;
      }
      return isUpdatedItem ? {
        ...item,
        count: updatedItem.count
      } : item
    });
    this.updatedData.emit({hasItems: !!count});
  }
}
