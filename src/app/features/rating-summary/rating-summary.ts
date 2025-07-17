import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IRating } from '../../shared/interfaces/rating.interface';

@Component({
  selector: 'app-rating-summary',
  imports: [CommonModule],
  templateUrl: './rating-summary.html',
  styleUrl: './rating-summary.css'
})
export class RatingSummary implements OnChanges {
  @Input() ratings: IRating[] = [];
  @Output() filterByScore: EventEmitter<number> = new EventEmitter();
  @Output() ShowAllRatings: EventEmitter<void> = new EventEmitter();

  totalRatings = 0;
  ratingPercentages: { [star: number]: number } = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ratings'] && this.ratings) {
      this.totalRatings = this.ratings.length;
      const counts: { [star: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
      for (const r of this.ratings) {
        if (r.score >= 1 && r.score <= 5) {
          counts[r.score]++;
        }
      }
      this.ratingPercentages = {};
      for (let star = 1; star <= 5; star++) {
        this.ratingPercentages[star] = this.totalRatings > 0 ? Math.round((counts[star] / this.totalRatings) * 100) : 0;
      }
    }
  }
}