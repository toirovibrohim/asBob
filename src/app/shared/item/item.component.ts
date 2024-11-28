import {Component, effect, input, output, signal} from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  item = input<any>();
  count = signal(0);
  countChanged = output<any>();

  constructor() {
    effect(() => this.countChanged.emit({id: this.item().id, count: this.count()}))
  }

  increment() {
    this.count.set(this.count() + 1);
  }

  decrement() {
    this.count.set(this.count() - 1);
  }
}
