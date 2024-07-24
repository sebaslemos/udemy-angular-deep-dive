import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  multiplier: number = 0;

  counter = signal(0);
  derivedCounter = computed(() => {
    const counter = this.counter();
    if (this.multiplier >= 10) {

      return counter * 10;
    } else {
      return 0;
    }

  })

  course = signal({
    title: 'Angular',
    id: 1
  });

  courses = signal([
    "angular for beginners",
    "angular for experts"
  ]);

  increment() {
    this.counter.update((value) => value + 1);
  }

  incrementMultiplier() {
    this.multiplier++;
  }

  constructor(private counterService: CounterService) {
    const readyOnly = this.counter.asReadonly();

  }

}
