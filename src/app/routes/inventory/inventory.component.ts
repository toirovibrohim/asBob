import {Component} from '@angular/core';
import {ListComponent} from '../../shared/list/list.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [
    ListComponent
  ],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.css'
})
export class InventoryComponent {
  list = [
    {
      id: 1,
      title: 'Pilsa Труба Рех 16x2mm; L = 160m',
      measurement: 'м',
      count: 0
    },
    {
      id: 2,
      title: 'Pilsa Труба Рех 16x2mm; L = 160m',
      measurement: 'м',
      count: 0
    },
    {
      id: 3,
      title: 'Pilsa Труба Рех 16x2mm; L = 160m',
      measurement: 'м',
      count: 0
    },
    {
      id: 4,
      title: 'Pilsa Труба Рех 16x2mm; L = 160m',
      measurement: 'м',
      count: 0
    },
    {
      id: 5,
      title: 'Pilsa Труба Рех 16x2mm; L = 160m',
      measurement: 'м',
      count: 0
    }
  ];
  updatedList = [];
  hasItems = false;

  updateData(data: any) {
    this.hasItems = data?.hasItems;
    // this.hasItems = !!(list.reduce((acc: number, cur: any) => acc + cur.count, 0));
    // this.updatedList = list;
  }

  sendItems() {
    console.log(this.list);
  }
}
